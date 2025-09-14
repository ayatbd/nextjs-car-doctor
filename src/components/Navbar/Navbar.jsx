import Image from "next/image";
import Link from "next/link";
import { FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link className="font-semibold" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/services"}>
            Services
          </Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/blogs"}>
            Blogs
          </Link>
        </li>
        <li>
          <Link className="font-semibold" href={"/contacts"}>
            Contacts
          </Link>
        </li>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm md:my-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image src={"/assets/logo.svg"} width={50} height={50} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
      </div>
      <div className="navbar-end gap-3">
        <FaShoppingBag className="text-gray-500" />
        <FaSearch className="text-gray-500" />
        <Link
          alt=""
          href={""}
          className="btn rounded-md border-[#FF3811] text-[#FF3811]"
        >
          Appointment
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
