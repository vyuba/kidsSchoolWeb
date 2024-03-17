import { useState } from "react";
function Navber() {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log("clicked");
    setmenuIsOpen((prev) => !prev);
  };

  return (
    <nav className="flex justify-between z-10  fixed bg-white px-10 lg:justify-evenly h-fit items-center w-full py-5 lg:py-10">
      <div
        id="logoContainer"
        className="flex w-32 items-center justify-between"
      >
        <svg
          width="35"
          height="20"
          viewBox="0 0 35 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1526 19.9028H31.1477L11.3422 0.0971985H3.34705L23.1526 19.9028Z"
            fill="#7476ED"
          />
          <path
            d="M15.4497 0.0971995L34.5419 19.1894V0.0971985H29.3752V6.12496L23.3474 0.0971985L15.4497 0.0971995Z"
            fill="#E56F8C"
          />
          <path
            d="M0 0.760223V19.9027H5.16667V13.8749L11.1944 19.9027H19.1425L0 0.760223Z"
            fill="#64C2DB"
          />
        </svg>
        <h1 className="font-Poppins font-medium ">Kids world</h1>
      </div>
      <ul
        className={`bg-[#0065FF] lg:bg-white rounded-r-lg transition-all absolute lg:static top-0 left-0 w-52 lg:w-fit z-20 h-screen  lg:h-fit flex flex-col items-start py-10 lg:py-0 lg:flex-row capitalize font-Poppins font-normal text-xl lg:text-base lg:items-center ${
          !menuIsOpen ? "left-[-100%]" : "left-0"
        }`}
      >
        <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-white  lg:text-black bg-transparent">home</li>
        <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-white  lg:text-black bg-transparent">
          for student
        </li>
        <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-white  lg:text-black bg-transparent">
          for teacher
        </li>
        <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-white  lg:text-black bg-transparent">
          about us
        </li>
        <li className="w-full lg:w-fit py-2 px-5 hover:bg-blue-700 lg:px-3 xl:px-4 text-white  lg:text-black bg-transparent">
          contact us
        </li>
      </ul>
      <ul className="w-fit lg:flex capitalize bg-transparent hidden">
        <li className="text-black px-4 py-2 bg-transparent font-medium rounded-3xl">
          sign in
        </li>
        <li className="text-white px-4 py-2 font-medium bg-[#0065FF] rounded-3xl">
          log in
        </li>
      </ul>
      <div
        id="hamburgerMenu"
        onClick={toggleMenu}
        className="flex items-center justify-between w-[4.3rem] sm:flex lg:hidden z-20 cursor-pointer"
      >
        <div className="w-5 h-5 flex flex-col justify-evenly">
          <span
            className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? "menu"
                : "-rotate-45 translate-y-[6px] translate-x-[1px]"
            }`}
          ></span>
          <span
            className={` h-[2px] rounded-2xl border-black bg-black block ${
              !menuIsOpen ? "w-full" : "w-0"
            }`}
          ></span>
          <span
            className={`w-full h-[2px] rounded-2xl border-black bg-black block transition-all ${
              !menuIsOpen
                ? "menu"
                : "rotate-45 -translate-y-1 translate-x-[1px]"
            }`}
          ></span>
        </div>
        <p className="font-Poppins capitalize font-normal">
          {!menuIsOpen ? "menu" : "close"}
        </p>
      </div>
    </nav>
  );
}
export default Navber;
