"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMedia } from "react-use";

type Props = {
  image: string;
};

const Logo = ({ image }: Props) => {
  const isMobile = useMedia("(max-width: 576px)", false);
  const isTablet = useMedia(
    "(min-width: 577px) and (max-width: 1023px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1024px)", false);

  let height = 40;
  let width = 40;

  if (isMobile) {
    height = 40;
    width = 40;
  } else if (isTablet) {
    height = 50;
    width = 50;
  } else if (isDesktop) {
    height = 60;

    width = 60;
  }

  return (
    <Link href="/">
      <div className="flex-row gap-3 items-center justify-center">
        <Image src={image} alt="kiit" height={height} width={width} />
      </div>
    </Link>
  );
};

export default Logo;
