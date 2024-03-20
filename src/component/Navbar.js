import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Navbar({ toggleSidebar }) {
  const navigate = useNavigate();
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };
  const token = localStorage.getItem("token");
  const logout = () => {
    Swal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire({
          title: "Berhasil Logout",
          text: "Anda berhasil keluar!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <header className="bg-gray-100">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="flex flex-col items-center text-[#776b5d]" href="#">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            className=""
            viewBox="0 0 184.000000 183.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
              fill="#776b5d"
              stroke="none"
            >
              <path
                d="M477 1684 c-4 -4 -7 -16 -7 -26 0 -13 7 -18 26 -18 21 0 25 4 22 22
-3 23 -27 35 -41 22z"
              />
              <path
                d="M780 1640 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
              />
              <path
                d="M1010 1620 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
              />
              <path
                d="M265 1577 c-4 -13 -5 -43 -3 -68 l3 -44 68 -6 68 -6 79 -78 79 -79 3
-70 3 -71 47 -3 c48 -3 71 -23 67 -55 -4 -32 3 -46 24 -49 19 -3 22 -10 25
-55 l3 -53 -55 0 c-53 0 -56 1 -56 24 0 25 0 25 -122 28 l-123 3 3 -87 3 -88
101 0 c118 0 161 -15 177 -62 15 -42 14 -64 -4 -97 -19 -39 -34 -44 -150 -50
l-100 -6 -3 -85 c-5 -131 -5 -130 83 -130 40 0 86 -5 100 -10 15 -6 59 -39 98
-75 74 -68 186 -132 272 -156 29 -8 95 -14 160 -14 180 1 305 53 430 179 57
58 135 173 135 200 0 9 -138 7 -202 -3 -41 -7 -75 -22 -119 -51 -84 -58 -138
-80 -212 -87 -149 -14 -310 82 -377 225 -85 179 0 387 197 484 61 30 76 33
153 33 71 -1 95 -5 145 -28 33 -16 77 -45 98 -65 42 -40 91 -127 82 -142 -4
-6 -118 -10 -286 -10 -262 0 -280 -1 -276 -17 3 -10 8 -35 12 -57 9 -55 47
-110 92 -132 35 -17 68 -19 392 -22 l354 -3 -6 93 c-12 184 -76 337 -188 449
-74 75 -164 124 -288 158 -85 24 -97 32 -106 72 -6 28 -8 29 -71 29 l-64 0 0
-35 c0 -46 -17 -80 -47 -94 -15 -7 -95 -11 -210 -11 l-185 0 -79 76 -78 77 -3
71 -3 71 -67 3 c-64 3 -68 2 -73 -21z m835 -312 c0 -39 -3 -45 -25 -51 -14 -3
-36 -3 -50 0 -21 5 -25 12 -25 45 0 21 3 41 7 44 3 4 26 7 50 7 l43 0 0 -45z
m-320 -60 l0 -55 -55 0 -55 0 0 55 0 55 55 0 55 0 0 -55z m70 -69 c6 -8 10
-25 8 -38 -2 -19 -9 -23 -38 -23 -29 0 -36 4 -38 23 -4 28 14 52 38 52 10 0
23 -7 30 -14z m-130 -594 c7 -70 -1 -82 -55 -82 -70 0 -75 5 -75 69 0 32 3 61
7 65 4 4 32 6 63 4 l55 -3 5 -53z"
              />
              <path d="M880 1530 l0 -40 40 0 40 0 0 40 0 40 -40 0 -40 0 0 -40z" />
              <path
                d="M595 1517 c-4 -13 -5 -48 -3 -78 l3 -54 78 -3 78 -3 -3 78 -3 78 -72
3 c-69 3 -73 2 -78 -21z"
              />
              <path
                d="M1180 1490 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
              />
              <path
                d="M102 1428 c2 -15 11 -24 26 -26 18 -3 22 1 22 22 0 21 -5 26 -26 26
-21 0 -25 -4 -22 -22z"
              />
              <path d="M380 1225 l0 -45 45 0 45 0 0 45 0 45 -45 0 -45 0 0 -45z" />
              <path
                d="M140 1220 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
              />
              <path d="M240 1081 l0 -49 53 -4 52 -3 -3 53 -4 52 -49 0 -49 0 0 -49z" />
              <path d="M106 913 c-12 -12 -6 -33 9 -33 8 0 15 6 15 14 0 17 -14 28 -24 19z" />
              <path
                d="M172 813 c2 -22 9 -29 31 -31 24 -3 27 0 27 27 0 28 -3 31 -31 31
-27 0 -30 -3 -27 -27z"
              />
              <path d="M272 695 l3 -50 45 0 45 0 3 47 3 46 -51 4 -51 3 3 -50z" />
              <path
                d="M170 561 c0 -28 3 -31 31 -31 27 0 30 3 27 28 -2 21 -9 28 -30 30
-25 3 -28 0 -28 -27z"
              />
            </g>
          </svg>
          <p className="text-xs font-bold montserrat">E-Kampoeng</p>
        </a>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            {/* <h1>E-Kampoeng</h1> */}
          </nav>

          <div className="flex items-center gap-4">
            {token === null ? (
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-[#776b5d] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 shadow-md hover:bg-[#776b5d]/75 active:bg-gray-100 border border-[#776b5d] active:text-[#776b5d]"
                  href="/sign-in"
                >
                  Login
                </a>

                <a
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-[#776b5d] transition-all duration-200 hover:bg-[#776b5d] hover:shadow-md hover:text-white active:bg-gray-100 border border-transparent active:border-[#776b5d] active:text-[#776b5d] sm:block"
                  href="/sign-up"
                >
                  Register
                </a>
              </div>
            ) : (
              <div className="sm:flex sm:gap-4">
                <button
                  onClick={logout}
                  className="block rounded-md bg-[#776b5d] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 shadow-md hover:bg-[#776b5d]/75 active:bg-gray-100 border border-[#776b5d] active:text-[#776b5d]"
                >
                  Logout
                </button>
              </div>
            )}

            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={toggleSidebar}
            >
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
