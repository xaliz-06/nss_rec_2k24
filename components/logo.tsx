"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMedia } from "react-use";

type Props = {
  image: string;
};

const Logo = ({ image }: Props) => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <Link href="/">
      <div className="flex-row gap-3 items-center justify-center">
        {isMobile ? (
          <Image src={image} alt="kiit" height={60} width={60} />
        ) : (
          <Image src={image} alt="kiit" height={80} width={80} />
        )}
      </div>
    </Link>
  );
};

export default Logo;
