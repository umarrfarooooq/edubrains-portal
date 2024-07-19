import React from "react";
import logo from "@public/mini Logo.svg"
import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
const Header = ({ onClick, className }) => {
    return (
        <>
        <div className={`${className}`}>
            <div className="bg-[#FFF9EF] md:hidden">
                <div className="flex items-center justify-between p-4">
                    <div className="leftSideHeader">
                        <Link href="/">
                            <Image className="w-12 h-11" src={logo} />
                        </Link>
                    </div>
                    <div className="rightSideHeader cursor-pointer" onClick={onClick}>
                        <HamburgerIcon />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;
