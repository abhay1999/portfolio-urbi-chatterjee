"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center bg-gray-600 text-white text-4xl font-semibold"
        aria-hidden
      >
        {alt.charAt(0)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 160px, 192px"
      className="object-cover"
      priority
      onError={() => setError(true)}
    />
  );
}
