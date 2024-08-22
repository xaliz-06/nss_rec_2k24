"use client";

import Logo from "./logo";
import Navigation from "./navigation";

const images = ["/kiit.png", "/soee.png", "/lakshya_hero.png"];

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-6 py-3 md:py-4 w-full sticky top-0 left-0 drop-shadow-xl z-50">
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
