// import React, { useState, memo } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = memo(() => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const navLinkClass = ({ isActive }) =>
//     `block px-4 py-2 rounded transition-colors ${
//       isActive
//         ? "text-red-400 font-medium bg-gray-800"
//         : "text-gray-300 hover:text-white"
//     }`;

//   return (
//     <nav className="bg-gray-900 py-4 rounded-lg shadow mb-10">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         <NavLink to="/" className="text-white text-2xl font-bold">
//           Recipe Book
//         </NavLink>

//         <div className="block md:hidden">
//           <button
//             onClick={toggleMenu}
//             className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
//             aria-label="Toggle navigation"
//           >
//             <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M18.278 16.864a1 1 0 01-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 01-1.414-1.414L10.586 12 5.722 7.136a1 1 0 011.414-1.414L12 10.586l4.864-4.864a1 1 0 011.414 1.414L13.414 12l4.864 4.864z"
//                 />
//               ) : (
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         <div className="hidden md:flex items-center gap-x-10 text-lg">
//           <NavLink className={navLinkClass} to="/">
//             Home
//           </NavLink>
//           <NavLink className={navLinkClass} to="/recipes">
//             Recipes
//           </NavLink>
//           <NavLink className={navLinkClass} to="/about">
//             About
//           </NavLink>
//           <NavLink className={navLinkClass} to="/favorite">
//             Favorites
//           </NavLink>
//         </div>
//       </div>

//       <div
//         className={`md:hidden ${
//           isOpen ? "block" : "hidden"
//         } mt-4 px-2 pb-3 space-y-1 sm:px-3`}
//       >
//         <NavLink
//           onClick={() => setIsOpen(false)}
//           className={navLinkClass}
//           to="/"
//         >
//           Home
//         </NavLink>
//         <NavLink
//           onClick={() => setIsOpen(false)}
//           className={navLinkClass}
//           to="/recipes"
//         >
//           Recipes
//         </NavLink>
//         <NavLink
//           onClick={() => setIsOpen(false)}
//           className={navLinkClass}
//           to="/about"
//         >
//           About
//         </NavLink>
//         <NavLink
//           onClick={() => setIsOpen(false)}
//           className={navLinkClass}
//           to="/favorite"
//         >
//           Favorites
//         </NavLink>
//       </div>
//     </nav>
//   );
// });

// export default Navbar;





//Navbar.jsx
import React, { useState, memo } from "react";
import { NavLink } from "react-router-dom";

const Navbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = ({ isActive }) =>
    `block px-4 py-2 rounded transition-colors ${
      isActive
        ? "text-red-400 font-medium bg-gray-800"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-900 py-4 rounded-lg shadow mb-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              src="https://t4.ftcdn.net/jpg/03/25/71/87/360_F_325718700_Fdgmb8R5H2RqGG5px27QhEkTAMvmjieo.jpg"
              alt="Recipe Book Logo"
              className=" w-22 mr-2  rounded-full"
            />
          </NavLink>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 01-1.414-1.414L10.586 12 5.722 7.136a1 1 0 011.414-1.414L12 10.586l4.864-4.864a1 1 0 011.414 1.414L13.414 12l4.864 4.864z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="hidden md:flex items-center gap-x-10 text-lg">
          <NavLink className={navLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkClass} to="/recipes">
            Recipes
          </NavLink>
          <NavLink className={navLinkClass} to="/about">
            About
          </NavLink>
          <NavLink className={navLinkClass} to="/favorite">
            Favorites
          </NavLink>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } mt-4 px-2 pb-3 space-y-1 sm:px-3`}
      >
        <NavLink
          onClick={() => setIsOpen(false)}
          className={navLinkClass}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={navLinkClass}
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={navLinkClass}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          className={navLinkClass}
          to="/favorite"
        >
          Favorites
        </NavLink>
      </div>
    </nav>
  );
});

export default Navbar;