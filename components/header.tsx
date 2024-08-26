"use client";

import Logo from "./logo";
import Navigation from "./navigation";

const images = ["/kiit.png", "/soee.png", "/lakshya_hero.png"];

const Header = () => {
  return (
    <header className="bg-[#070F2B] px-6 py-3 md:py-2 w-[100vw] sticky top-0 left-0 drop-shadow-xl z-50">
      <div className="max-w-screen-5xl flex md:max-w-screen-">
        <div className="w-full flex items-center justify-between md:mx-5">
          <div className="flex items-center w-full">
            <div className="flex flex-1 justify-start items-center gap-3">
              {images.map((image, index) => (
                <Logo image={image} key={index} />
              ))}
            </div>
            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
