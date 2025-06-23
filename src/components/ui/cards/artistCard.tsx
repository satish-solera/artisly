import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  name: string;
  category: string;
  price?: string;
  location: string;
  image?: string;
};

export const ArtistCard = ({ name, category, price, location, image }: Props) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700/80 rounded-2xl shadow-lg hover:shadow-pink-700/30 transition-all duration-300 group">
        <CardHeader className="p-0 overflow-hidden rounded-t-2xl">
          <div className="relative w-full h-60">
            {
              image &&
              <Image
                src={image !== undefined ? image : ''}
                alt={name}
                // width={200}
                // height={200}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
            }
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-3">
          <CardTitle className="text-xl font-semibold text-white">{name}</CardTitle>
          <p className="text-sm text-zinc-400">{category} · {location}</p>
          <p className="text-base font-medium text-pink-400">{price}</p>
          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:from-pink-600 hover:to-fuchsia-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200"
            variant="default"
            size="lg"
          >
            Ask for Quote
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
