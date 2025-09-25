import Image from "next/image";
import Link from "next/link";
import LogoPurple from "../_icons/LogoPurple";
import DropDownIcon from "../_icons/DropDownIcon";
import SearchIcon from "../_icons/SearchIcon";
import MoonIcon from "../_icons/MoonIcon";

const Nav = () => {
  return (
    <>
      <nav className="flex justify-around items-center p-2 bg-white shadow">
        <Link href="/">
          <div className="flex items-center gap-2 cursor-pointer">
            <LogoPurple/>

            <p className="italic font-bold text-purple-500 text-lg">Movie Z</p>
          </div>
        </Link>

        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-2 border p-2 rounded-sm">
            <DropDownIcon/>

            <p className="text-sm">Genre</p>
          </div>
          <div className="flex border items-center rounded-sm p-2 gap-3 w-[400px]">
            <SearchIcon/>

            <input className="" placeholder="Search..." />
          </div>
        </div>

        <button className=" w-8 h-8 rounded-lg flex items-center justify-center border">
          <MoonIcon/>
        </button>
      </nav>
    </>
  );
};

export default Nav;
