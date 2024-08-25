"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width: 1023px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="default"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent text-white focus:bg-white/30 transition p-2"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuIcon className="size-8" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-2 w-[60vw] bg-white">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                className={route.href === pathname ? "bg-[#1B1A55]/40" : ""}
                onClick={() => onClick(route.href)}
              >
                <p className="text-lg font-bold text-[#070F2B]">
                  {route.label}
                </p>
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <div className="flex flex-1 flex-row gap-4 items-center justify-end p-3">
      {routes.map((route, index) => (
        <Button
          variant="outline"
          key={index}
          size="default"
          className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent text-white focus:bg-white/30 transition p-2 md:p-4 md:mx-8"
          onClick={() => onClick(route.href)}
        >
          <p className="text-lg font-bold text-blue-600 md:text-2xl md:text-white">
            {route.label}
          </p>
        </Button>
      ))}
    </div>
  );
};

export default Navigation;
