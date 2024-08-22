"use client";

import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useMedia } from "react-use";

const Footer = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <footer className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-6 py-5 w-full pt-8 md:pt-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold tracking-tight text-white text-sm md:text-xl">
              Follow Our Social Media:
            </h4>
            <div className="flex flex-row gap-3 text-white">
              <Link href="https://www.facebook.com/nssprojectlakshya">
                <FaFacebook size={isMobile ? 24 : 32} />
              </Link>
              <Link href="https://www.instagram.com/nss_projectlakshya_soee">
                <FaInstagram size={isMobile ? 24 : 32} />
              </Link>
              <Link href="https://www.twitter.com/Nss_Lakshya">
                <FaXTwitter size={isMobile ? 24 : 32} />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-white text-sm font-bold md:text-2xl">
              NSS SoEE Project Lakshya
            </h5>
            <h6 className="text-white text-xs font-bold md:text-lg">
              NSS School of Electronics Engineering
            </h6>
            <p className="text-white text-xs font-bold md:text-lg">
              KIIT University, Patia, Bhubaneswar
            </p>
            <p className="text-white text-xs md:text-base">2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
