import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { useClickOutside } from "@/hooks/clickOutside";
import gsap from "gsap";
import { ChevronRight, ChevronBottom } from "./chevron";
import { services_links } from "@/data/services";

const menu = [
  { name: "Accueil", link: "/" },
  { name: "Prestations", link: "/prestations", subMenu: services_links },
  { name: "À propos", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const SubmenuRef = useRef(null);
  useClickOutside(SubmenuRef, () => setIsSubMenuOpen(false));

  function handleMenu() {
    const hamburger = document.querySelector(".hamburger");
    const hamburgerSpan = document.querySelectorAll(".hamburger span");
    const list = document.querySelectorAll(".hidden_menu ul li");

    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      for (let i = 0; i < hamburgerSpan.length; i++) {
        gsap.to(hamburgerSpan[i], {
          duration: 0.5,
          rotate: 0,
          delay: i * 0.1,
          onComplete: () => {
            gsap.to(hamburger, { duration: 0.5, rotate: 0 });
          },
        });
      }

      for (let i = 0; i < list.length; i++) {
        gsap.to(list[i], {
          duration: 0.5,
          opacity: 0,
          delay: i * 0.1,
          onComplete: () => {
            gsap.to(".hidden_menu", { duration: 0.5, top: "-100vh" });
          },
        });
      }
    } else {
      gsap.to(hamburger, {
        duration: 0.5,
        rotate: 90,
        onComplete: () => {
          for (let i = 0; i < hamburgerSpan.length; i++) {
            gsap.to(hamburgerSpan[i], {
              duration: 0.5,
              rotate: 90,
              delay: i * 0.1,
            });
          }
        },
      });

      gsap.to(".hidden_menu", {
        duration: 0.5,
        top: "0vh",
        onComplete: () => {
          for (let i = 0; i < list.length; i++) {
            gsap.to(list[i], { duration: 0.5, opacity: 1, delay: i * 0.1 });
          }
        },
      });
    }
  }
  let test = 0;
  useEffect(() => {
    const submenu = document.querySelector(".submenu");
    const submenu_mobile = document.querySelectorAll(".submenu_mobile");
    const chevron = document.querySelector("#ChevronBottom");

    if (!isSubMenuOpen) {
      gsap.to(submenu, {
        duration: 0.5,
        opacity: 0,
        onComplete: () => {
          gsap.to(submenu, { duration: 0.5, display: "none" });
        },
      });
      for (let i = 0; i < submenu_mobile.length; i++) {
        gsap.to(submenu_mobile[i], {
          duration: 0.5,
          opacity: 0,
          delay: i * 0.1,
          onComplete: () => {
            gsap.to(submenu_mobile[i], {
              duration: 0.5,
              display: "none",
              onComplete: () => {
                gsap.to(chevron, { duration: 0.5, rotate: 0 });
              },
            });
          },
        });
      }
    } else {
      gsap.to(submenu, {
        duration: 0.5,
        display: "block",
        onComplete: () => {
          gsap.to(submenu, { duration: 0.5, opacity: 1 });
        },
      });

      gsap.to(chevron, {
        duration: 0.5,
        rotate: -180,
        onComplete: () => {
          for (let i = 0; i < submenu_mobile.length; i++) {
            gsap.to(submenu_mobile[i], {
              duration: 0.5,
              display: "flex",
              delay: i * 0.1,
              onComplete: () => {
                gsap.to(submenu_mobile[i], { duration: 0.5, opacity: 1 });
              },
            });
          }
        },
      });
    }
    test++;
  }, [isSubMenuOpen, test]);

  return (
    <header ref={SubmenuRef} className="">
      <nav
        className="fixed top-0 w-full bg-white z-50
      "
      >
        <ul
          className="w-full h-12 px-4 flex items-center justify-between absolute z-50 bg-white
                md:min-h-fit md:h-fit md:px-10
                "
        >
          <li>
            <Link href="/">
              <Image
                id="LogoHeader"
                alt="Logo Arthur Guilet"
                width={100}
                height={100}
                className="w-8 md:w-20 md:py-2"
                src="/logo.png"
              />
            </Link>
          </li>

          <li
            className="hamburger flex flex-col h-5 justify-around md:hidden"
            onClick={handleMenu}
          >
            <span className="h-0.5 w-5 bg-black"></span>
            <span className="h-0.5 w-5 bg-black"></span>
            <span className="h-0.5 w-5 bg-black"></span>
          </li>

          <li className="hidden md:flex md:max-w-xl text-xl items-center justify-between w-1/2">
            {menu.map((item, index) => {
              if (item.subMenu) {
                return (
                  <div
                    key={index}
                    ref={SubmenuRef}
                    onClick={() => {
                      setIsSubMenuOpen(!isSubMenuOpen);
                    }}
                    className="desk_navlinks desk_navlinks_withsubmenu cursor-pointer"
                  >
                    <span className="hover:text-blue-500">{item.name}</span>
                    <div>
                      <ul className="submenu absolute hidden rounded-xl opacity-0 top-0 pt-24 px-4 pb-4 bg-white -z-10">
                        {item.subMenu.map((subItem, index) => {
                          return (
                            <li
                              className="h-10 flex items-center border-b-[1px] border-grey hover:text-blue-500"
                              key={index}
                            >
                              <Link className="text-xl " href={subItem.link}>
                                {subItem.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              } else {
                return (
                  <a
                    className="desk_navlinks text-xl hover:text-blue-500"
                    key={index}
                    href={item.link}
                  >
                    {item.name}
                  </a>
                );
              }
            })}
          </li>
        </ul>
      </nav>

      <div className="hidden_menu absolute -top-full left-0 w-full h-auto bg-white z-10">
        <ul
          className="w-full h-auto flex flex-col pt-12 items-center border-b-[1px] border-black text-2xl
                "
        >
          {menu.map((item, index) => {
            if (item.subMenu) {
              return (
                <>
                  <li
                    key={index}
                    ref={SubmenuRef}
                    className="navbar_mobile_links relative text-2xl px-5 opacity-0 border-b-[1px] border-gray w-full h-14 flex items-center justify-between cursor-pointer"
                  >
                    <button
                      onClick={() => {
                        setIsSubMenuOpen(!isSubMenuOpen);
                      }}
                    >
                      {item.name}
                    </button>
                    <ChevronBottom />
                  </li>
                  {item.subMenu.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="navbar_mobile_links relative text-2xl px-5 border-b-[1px] border-gray w-full h-14 cursor-pointer submenu_mobile hidden opacity-0 "
                      >
                        <Link
                          href={item.link}
                          className="w-full h-full flex items-center justify-between text-2xl"
                        >
                          {item.name} <ChevronRight />{" "}
                        </Link>
                      </li>
                    );
                  })}
                </>
              );
            } else {
              return (
                <li
                  key={index}
                  className="navbar_mobile_links relative text-2xl px-5 opacity-0 border-b-[1px] border-gray w-full h-14 cursor-pointer"
                >
                  <Link
                    href={item.link}
                    className="w-full h-full flex items-center justify-between text-2xl"
                  >
                    {item.name}
                    <ChevronRight />
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </header>
  );
}
