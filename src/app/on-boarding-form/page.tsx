"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const categories = ["Singer", "Dancer", "DJ", "Speaker"] as const;
const languages = ["English", "Hindi", "Spanish", "French"] as const;
const fees = ["$300 - $800", "$500 - $1000", "$1000 - $2000"] as const;

type FormData = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  fee: string;
  location: string;
  image: FileList | null;
};
const schema = yup.object({
  name: yup.string().required("Name is required").min(4 , 'Nmae must be at least 4 characters'),
  bio: yup.string().required("Bio is required").min(10, "Bio must be at least 10 characters"),
  category: yup.array().of(yup.string()).defined().min(1, "Select at least one category"),
  languages: yup.array().of(yup.string()).defined().min(1, "Select at least one language"),
  fee: yup.string().required("Fee is required"),
  location: yup.string().required("Location is required"),
  image: yup
    .mixed<FileList>()
    .nullable()
    .test("fileSize", "File too large", (value) => {
      if (!value || value.length === 0) return true;
      return value[0].size <= 5 * 1024 * 1024;
    }),
}) as yup.ObjectSchema<FormData>;


export default function ArtistOnboardingForm() {
  const { register, handleSubmit, control, watch, setValue, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      bio: "",
      category: [],
      languages: [],
      fee: "",
      location: "",
      image: null,
    },
  });

  const [preview, setPreview] = useState<string | null>(null);
  const imageFiles = watch("image");

  useEffect(() => {
    if (imageFiles && imageFiles.length > 0) {
      const file = imageFiles[0];
      const url = URL.createObjectURL(file);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [imageFiles]);

  function handleCheckbox(
    fieldName: "category" | "languages",
    value: string,
    checked: boolean,
    current: string[]
  ) {
    const updated = checked
      ? [...current, value]
      : current.filter((v) => v !== value);
    setValue(fieldName, updated, { shouldValidate: true });
  }

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert('data is print on console')
    console.log(data);
    // handle form submission
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl w-full mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-7"
    >
      <h2 className="text-2xl font-bold text-white mb-2">🎤 Artist Onboarding</h2>

      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-white mb-1 block">Name</Label>
        <Input
          {...register("name")}
          placeholder="Your full name"
          id="name"
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:border-pink-500 transition"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      {/* Bio */}
      <div>
        <Label htmlFor="bio" className="text-white mb-1 block">Bio</Label>
        <Textarea
          {...register("bio")}
          placeholder="Tell us about yourself..."
          id="bio"
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:border-pink-500 transition"
          rows={4}
        />
        {errors.bio && <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>}
      </div>

      {/* Category */}
      <div>
        <Label className="text-white mb-1 block">Category</Label>
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value?.includes(cat)}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckbox("category", cat, checked, field.value || [])
                    }
                    id={`cat-${cat}`}
                  />
                )}
              />
              <Label htmlFor={`cat-${cat}`} className="text-white">{cat}</Label>
            </div>
          ))}
        </div>
        {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
      </div>

      {/* Languages */}
      <div>
        <Label className="text-white mb-1 block">Languages Spoken</Label>
        <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
            <div key={lang} className="flex items-center gap-2">
              <Controller
                name="languages"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value?.includes(lang)}
                    onCheckedChange={(checked: boolean) =>
                      handleCheckbox("languages", lang, checked, field.value || [])
                    }
                    id={`lang-${lang}`}
                  />
                )}
              />
              <Label htmlFor={`lang-${lang}`} className="text-white">{lang}</Label>
            </div>
          ))}
        </div>
        {errors.languages && <p className="text-sm text-red-500 mt-1">{errors.languages.message}</p>}
      </div>

      {/* Fee Range */}
      <div>
        <Label className="text-white mb-1 block">Fee Range</Label>
        <Controller
          name="fee"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:border-pink-500 transition">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {fees.map((fee) => (
                  <SelectItem key={fee} value={fee}>{fee}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.fee && <p className="text-sm text-red-500 mt-1">{errors.fee.message}</p>}
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="text-white mb-1 block">Location</Label>
        <Input
          {...register("location")}
          placeholder="City or Region"
          id="location"
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 bg-white text-zinc-900 focus:outline-none focus:border-pink-500 transition"
        />
        {errors.location && <p className="text-sm text-red-500 mt-1">{errors.location.message}</p>}
      </div>

      {/* Profile Image */}
      <div>
        <Label className="text-white mb-1 block">Profile Image (optional)</Label>
        <input
          type="file"
          accept="image/*"
          {...register("image")}
          className="block w-full text-sm text-zinc-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
        />
        {errors.image && <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>}
        {preview && (
          <Image
            src={preview}
            alt="Preview"
            className="mt-3 w-32 h-32 object-cover rounded-full border-4 border-pink-400 shadow-lg transition-all"
          />
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="w-full bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold py-3 rounded-xl transition"
      >
        Submit Artist Profile
      </Button>
    </form>
  );
}
