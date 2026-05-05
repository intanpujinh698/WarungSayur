import { useState } from "react";
import { MapPin, ShoppingCart, Star, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  priceUnit: string;
  image: string;
  seller: string;
  location: string;
  rating: number;
  sold: number;
  badge?: "segar" | "promo" | "terlaris";
  discount?: number;
  originalPrice?: string;
}

const badgeStyles = {
  segar: "bg-primary text-primary-foreground",
  promo: "bg-harvest text-harvest-foreground",
  terlaris: "bg-amber-500 text-white",
};

const badgeLabels = {
  segar: "Segar Hari Ini",
  promo: "Promo",
  terlaris: "Terlaris",
};

export default function ProductCard({
  name,
  price,
  priceUnit,
  image,
  seller,
  location,
  rating,
  sold,
  badge,
  discount,
  originalPrice,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <div className="product-card bg-card rounded-2xl overflow-hidden border border-border group cursor-pointer">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-primary-light/30">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex gap-1.5">
          {badge && (
            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${badgeStyles[badge]}`}>
              {badgeLabels[badge]}
            </span>
          )}
          {discount && (
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-red-500 text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); setIsWishlisted(!isWishlisted); }}
          className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100 duration-200"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground"}`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-3">
        {/* Name */}
        <h3 className="text-sm font-semibold text-warm-dark leading-snug mb-1 line-clamp-2 group-hover:text-primary transition-colors duration-150">
          {name}
        </h3>

        {/* Price */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-primary">{price}</span>
            <span className="text-xs text-muted-foreground">/ {priceUnit}</span>
          </div>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">{originalPrice}</span>
          )}
        </div>

        {/* Rating & Sold */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-warm-dark">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">Terjual {sold}</span>
        </div>

        {/* Seller Info */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
            <span className="text-[10px] font-bold text-primary">{seller.charAt(0)}</span>
          </div>
          <span className="text-xs text-muted-foreground font-medium truncate">{seller}</span>
          <span className="text-muted-foreground/40">·</span>
          <div className="flex items-center gap-0.5 shrink-0">
            <MapPin className="w-2.5 h-2.5 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">{location}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          className={`w-full text-xs font-semibold h-8 rounded-xl transition-all duration-200 ${
            addedToCart
              ? "bg-primary text-primary-foreground"
              : "bg-harvest text-harvest-foreground hover:bg-harvest-dark hover:text-primary-foreground shadow-harvest"
          }`}
        >
          <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
          {addedToCart ? "Ditambahkan!" : "+ Keranjang"}
        </Button>
      </div>
    </div>
  );
}
