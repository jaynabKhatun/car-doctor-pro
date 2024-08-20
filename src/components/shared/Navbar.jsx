import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosCart, IoIosCheckmarkCircleOutline } from "react-icons/io";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];
  return (
    <div className="bg-base-100">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image alt="logo" src="/assets/logo.svg" height={60} width={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex justify-center space-x-6">
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center space-x-3">
            <IoIosCart className="text-xl" />
            <CiSearch  className="text-xl"/>
            <a className="btn btn-outline btn-primary px-8">Appoinment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
