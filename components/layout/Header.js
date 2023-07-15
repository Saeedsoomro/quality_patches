import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaToolbox, FaUserAlt } from "react-icons/fa";
import {
  BsFillEnvelopePaperFill,
  BsList,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { services, about, items } from "../../utils/data";
import LoginScreen from "../Login";
import axios from "axios";
import { signOut } from "next-auth/react";

export default function NavBar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [subItems, setSubItems] = useState(items[0].subItems);
  const [menu, setMenu] = useState(items[0].subItems);
  const [openNav, setOpenNav] = useState(false);
  const [openTab, setOpenTab] = useState("products");
  const [subProduct, setSubProduct] = useState("");
  const [categories, setCategories] = useState();
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
    setOpenSearch(false);
  };
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    setOpenLogin(false);
  };

  const handleOpenTab = (product) => {
    setOpenTab(product);
  };
  const handleOpenSubProduct = (id) => {
    if (id) {
      fetchProductsBycategory(id);
    }
    setSubProduct(subProduct);
  };

  const handleHover = (id) => {
    fetchProductsBycategory(id);
  };

  const fetchProductsBycategory = async (id) => {
    try {
      const { data } = await axios.get(`/api/product/category/${id}`);
      if (data) {
        setSubItems(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseLeave = () => {};

  const handleMenuHover = (menuItem) => {
    setMenu(menuItem);
    setOpenLogin(false);
    setOpenSearch(false);
  };

  const handleMenuMouseLeave = () => {
    setMenu("");
  };

  async function gettProductCategory() {
    try {
      const { data } = await axios.get("/api/admin/category");
      if (data) {
        setCategories(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gettProductCategory();
  }, []);

  useEffect(() => {
    if (session?.user) {
      setOpenLogin(false);
    }
  }, [router, session, redirect]);

  return (
    <nav className=" absolute top-0 lg:top-8 left-0 md:px-4 lg:px-16 text-center w-screen z-10">
      {/* responsive navbar */}
      <div
        className={`${
          openNav
            ? "opacity-100 left-0 transit lg:hidden "
            : "left-[-100%] opacity-0 transit lg:hidden"
        } relative z-10 `}
      >
        <div className="fixed top-0 w-11/12 bg-lightgray min-h-screen">
          <div className=" text-4xl font-bold p-10">
            <AiOutlineClose onClick={() => setOpenNav(false)} />
          </div>
          <div className="flex flex-col border border-slate rounded">
            <div className="flex justify-between text-primary px-4 py-2">
              <Link href="#home" legacyBehavior>
                <a className="text-lg font-semibold">PRODUCTS</a>
              </Link>
              <button>
                {openTab == "products" ? (
                  <AiOutlineMinus
                    onClick={() => handleOpenTab("")}
                    className="font-semibold text-xl"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => handleOpenTab("products")}
                    className="font-semibold text-xl"
                  />
                )}
              </button>
            </div>
            <div
              className={
                openTab == "products" ? "bg-white flex flex-col px-6" : "hidden"
              }
            >
              <div>
                {categories &&
                  categories.map((cat) => (
                    <div key={cat._id}>
                      <div className="flex justify-between border-b border-lightgray py-2">
                        <Link href="#home" legacyBehavior>
                          <a>{cat.name}</a>
                        </Link>
                        <button>
                          {subProduct == cat._id ? (
                            <AiOutlineMinus
                              onClick={() => handleOpenSubProduct("")}
                              className="font-semibold"
                            />
                          ) : (
                            <AiOutlinePlus
                              onClick={() => handleOpenSubProduct(cat._id)}
                              className="font-semibold"
                            />
                          )}
                        </button>
                      </div>
                      <div
                        className={
                          subProduct == cat._id ? "text-left px-4" : "hidden"
                        }
                      >
                        {subItems?.map((item) => (
                          <Link
                            key={item._id}
                            href={`/products/${item._id}`}
                            legacyBehavior
                          >
                            <a className="text-primary">{item.title}</a>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <div className="flex justify-between border-b border-lightgray  py-2">
                  <Link href="#home" legacyBehavior>
                    <a>Embroided Emblems</a>
                  </Link>
                  <button>a</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-slate rounded">
            <div className="flex justify-between text-primary px-4 py-2">
              <Link href="#home" legacyBehavior>
                <a className="text-lg font-semibold">SERVICES</a>
              </Link>
              <button>
                {openTab == "services" ? (
                  <AiOutlineMinus
                    onClick={() => handleOpenTab("")}
                    className="font-semibold text-xl"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => handleOpenTab("services")}
                    className="font-semibold text-xl"
                  />
                )}
              </button>
            </div>
            <div
              className={
                openTab == "services" ? "bg-white flex flex-col px-6" : "hidden"
              }
            >
              <div>
                {services &&
                  services.map((item) => (
                    <div
                      key={item}
                      className="flex w-full text-left justify-between border-b border-lightgray py-2"
                    >
                      <Link href="#home" legacyBehavior>
                        <a>{item}</a>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col border border-slate rounded">
            <div className="flex justify-between text-primary px-4 py-2">
              <Link href="#home" legacyBehavior>
                <a className="text-lg font-semibold">ABOUTS</a>
              </Link>
              <button>
                {openTab == "abouts" ? (
                  <AiOutlineMinus
                    onClick={() => handleOpenTab("")}
                    className="font-semibold text-xl"
                  />
                ) : (
                  <AiOutlinePlus
                    onClick={() => handleOpenTab("abouts")}
                    className="font-semibold text-xl"
                  />
                )}
              </button>
            </div>
            <div
              className={
                openTab == "abouts" ? "bg-white flex flex-col px-6" : "hidden"
              }
            >
              <div>
                {about &&
                  about.map((item) => (
                    <div
                      key={item}
                      className="flex w-full text-left justify-between border-b border-lightgray py-2"
                    >
                      <Link href="#home" legacyBehavior>
                        <a>{item}</a>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="p-4">
            <button className="w-full text-white bg-primary flex items-center justify-center py-2 text-lg ">
              <FaUserAlt className="mr-2" />
              Request a Login
            </button>
          </div>
        </div>
      </div>

      {/* nava bar for pc */}

      <div className=" flex items-center  w-full h-14 md:h-20">
        <div className=" border-2 h-full bg-white  p-4 mr-1 border-lightgray">
          <Link href="/">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.ta3k2VChGjj3vVIMNYeV0wHaEK&pid=Api&rs=1&c=1&qlt=95&w=195&h=109"
              alt="Logo"
              className="h-full 2xl:w-[15rem] md:w-[12rem] w-[8rem]"
            />
          </Link>
        </div>
        <div className="navRight bg-white">
          <BsList
            onClick={() => setOpenNav(true)}
            className="lg:hidden text-primary text-3xl font-semibold"
          />
          <ul className=" hidden lg:flex 2xl:w-2/5 lg:w-5/12  items-center justify-between 2xl:pr-10 pl-2">
            <li
              onMouseEnter={() => handleMenuHover("products")}
              onMouseLeave={handleMenuMouseLeave}
            >
              <Link className="navTab" href="/products">
                Products
                <AiFillCaretDown className="downIcon" />
              </Link>
              <div
                className={
                  menu == "products"
                    ? "absolute text-left left-0 right-10"
                    : "hidden"
                }
              >
                <ul className="mt-8 bg-white shadow z-10">
                  <div className="flex shadow h-96 relative">
                    <div className="border-r-2 border-lightgray my-4 px-6">
                      {categories?.map((item) => (
                        <div key={item._id} className="group">
                          <div
                            onMouseEnter={() => handleHover(item?._id)}
                            onMouseLeave={handleMouseLeave}
                            className="listContainer"
                          >
                            <li className="listItem">{item.name}</li>
                            <BsFillCaretRightFill className="text-sm text-lightgray ml-14" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div
                      onMouseEnter={() => handleHover(subItems)}
                      onMouseLeave={handleMouseLeave}
                      className="flex flex-row-reverse flex-grow"
                    >
                      <div className="flex-grow bg-no-repeat bg-cover bg-[url('https://tse1.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&rs=1&c=1&qlt=95&w=166&h=93')] "></div>
                      <ul
                        className={
                          "shadow-3xl px-6 py-4 flex flex-col z-10 flex-wrap "
                        }
                      >
                        {subItems &&
                          subItems.map((subItem, index) => (
                            <li
                              className="py-2 min-w-[20rem] listItem"
                              key={subItem._id}
                            >
                              <Link href={`/products/${subItem._id}`}>
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>

                  {/* Add more submenu items as needed */}
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMenuHover("services")}
              onMouseLeave={handleMenuMouseLeave}
            >
              <Link className="navTab" href="/services">
                Services
                <AiFillCaretDown className="mr-1 downIcon" />
              </Link>
              <div
                className={
                  menu == "services"
                    ? "absolute text-left left-40 right-10"
                    : "hidden"
                }
              >
                <ul className="mt-8 bg-white shadow z-10">
                  <div className="flex shadow  relative">
                    <div className="flex flex-row-reverse flex-grow">
                      <div className="flex-grow bg-no-repeat bg-cover bg-[url('https://tse1.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&rs=1&c=1&qlt=95&w=166&h=93')] ">
                        {/* <img
                            className="w-full h-full"
                            src="https://tse1.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&rs=1&c=1&qlt=95&w=166&h=93"
                          /> */}
                      </div>
                      <ul
                        className={
                          "shadow-3xl px-6 py-4 flex flex-col z-10 flex-wrap "
                        }
                      >
                        {services.map((item, index) => (
                          <li key={index} className="py-2  listItem">
                            <Link href="/servicecomponent">{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Add more submenu items as needed */}
                </ul>
              </div>
            </li>
            <li
              onMouseEnter={() => handleMenuHover("abouts")}
              onMouseLeave={handleMenuMouseLeave}
            >
              <Link className="navTab" href="/about">
                About Us
                <AiFillCaretDown className="mr-1 downIcon" />
              </Link>
              <div
                className={
                  menu == "abouts"
                    ? "absolute text-left left-[15rem] xl:left-[20rem] right-10"
                    : "hidden"
                }
              >
                <ul className="mt-8 bg-white shadow z-10">
                  <div className="flex h-full shadow relative">
                    <div className="flex flex-row-reverse flex-grow">
                      <div className="flex-grow bg-no-repeat bg-cover bg-[url('https://tse1.mm.bing.net/th?id=OIP.fzSnClvueUiDCZNJINMWywHaEK&pid=Api&rs=1&c=1&qlt=95&w=166&h=93')] "></div>
                      <ul
                        className={
                          "shadow-3xl px-6 py-4 flex flex-col z-10 flex-wrap "
                        }
                      >
                        {about.map((item, index) => (
                          <li key={index} className="py-2  listItem">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </li>
          </ul>
          <ul className="2xl:w-3/5 lg:w-7/12 flex items-center justify-evenly relative">
            <li>
              <Link className="navTabWithBorder" href="/contact">
                <BsFillEnvelopePaperFill className="mr-1" />
                <span className="hidden lg:block"> Contact Us</span>
              </Link>
            </li>
            <li>
              <Link className="navTabWithBorder" href="/careers">
                <FaToolbox className="mr-1" />
                <span className="hidden lg:block">Careers</span>
              </Link>
            </li>
            <li>
              {session?.user ? (
                <div className="group">
                  <button
                    onClick={handleOpenLogin}
                    className="navTabWithBorder"
                  >
                    <FaUserAlt className="mr-1" />
                    <span className="hidden lg:block">
                      {session?.user.name}
                    </span>
                    <AiFillCaretDown className="mr-1 downIcon" />
                  </button>
                  <div className="hidden group-hover:block absolute pt-4 px-4  ml-10 shadow-xl flex flex-col bg-white shadow">
                    <li>
                      <Link href="/cart" legacyBehavior>
                        <a className="border-b w-full my-4">Cart</a>
                      </Link>
                    </li>
                    {session?.user.isAdmin && (
                      <li>
                        <Link href="/admin/orders" legacyBehavior>
                          <a className="border-b w-full my-4">Dashboard</a>
                        </Link>
                      </li>
                    )}
                    {session?.user && (
                      <li>
                        <Link href="/order-history" legacyBehavior>
                          <a className="border-b w-full my-4">My orders</a>
                        </Link>
                      </li>
                    )}
                    {session?.user && (
                      <li>
                        <Link href="/profile" legacyBehavior>
                          <a className="border-b w-full my-4">Profile</a>
                        </Link>
                      </li>
                    )}

                    <li>
                      <button className="border-b  my-4" onClick={handleLogout}>
                        Logout
                      </button>
                    </li>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    onClick={handleOpenLogin}
                    className="navTabWithBorder"
                    href="/careers"
                  >
                    <FaUserAlt className="mr-1" />
                    <span className="hidden lg:block">login</span>
                    <AiFillCaretDown className="mr-1 downIcon" />
                  </button>
                  <div className={openLogin ? "loginForm" : "hidden"}>
                    <LoginScreen />
                  </div>
                </>
              )}
            </li>
            <li>
              <button
                onClick={handleOpenSearch}
                href="/careers"
                className="navSearchWithBorder"
              >
                <FiSearch className="mr-1" />
              </button>
              <div className={openSearch ? "searchCard" : "hidden"}>
                <form className="flex">
                  <input
                    className="border-none"
                    type="text"
                    name="userId"
                    placeholder="Search"
                  />

                  <input type="submit" placeholder="Login" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
