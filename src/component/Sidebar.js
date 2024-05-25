import React, { useState } from "react";

const Sidebar = () => {
  const role = localStorage.getItem("role");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <div
        className={`flex h-screen ${
          isOpen ? "w-72 md:relative absolute h-screen" : "w-16"
        } flex-col justify-between md:bg-white/75 h-screen bg-white border-r z-20 transition-all duration-300`}
      >
        <div>
          <div
            onClick={toggleSidebar}
            className="cursor-pointer inline-flex size-16 items-center justify-center"
          >
            <span className="grid size-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
              L
            </span>
          </div>

          <div className="border-t border-gray-100">
            <div className="px-2">
              <div className="py-4">
                <a
                  href="/"
                  className={`t group ${
                    isOpen
                      ? "px-3 py-2 gap-x-3"
                      : "relative justify-center py-2"
                  } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12l7-7 7 7"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
                    />
                  </svg>

                  <a
                    href="/"
                    className={`${
                      isOpen ? "block" : "hidden"
                    } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                  >
                    Home
                  </a>

                  <span
                    className={`${
                      isOpen ? "hidden" : "block"
                    } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                  >
                    Home
                  </span>
                </a>
                <a
                  href="/wilayah-rt"
                  className={`t group ${
                    isOpen
                      ? "px-3 py-2 gap-x-3"
                      : "relative justify-center py-2"
                  } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6s-3-4-8-4V2s0 3 4 4c.758.15 1.561.226 2 .5a9.442 9.442 0 012 0c.439-.274 1.242-.35 2-.5 4 0 4-4 4-4v.001c-5 0-8 4-8 4zM12 12a3 3 0 100-6 3 3 0 000 6zM3 18v3h18v-3M4 21h16"
                    />
                  </svg>

                  <a
                    href="/"
                    className={`${
                      isOpen ? "block" : "hidden"
                    } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                  >
                    Wilayah RT
                  </a>

                  <span
                    className={`${
                      isOpen ? "hidden" : "block"
                    } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                  >
                    Wilayah RT
                  </span>
                </a>
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                {/* {role === "admin" && ( */}
                <li>
                  <a
                    href="/list-user"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <a
                      href="/list-user"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      List User
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      List User
                    </span>
                  </a>
                </li>
                {/* )} */}

                {/* {(role === "rw" || role === "admin") && ( */}
                <li>
                  <a
                    href="/rt"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6s-3-4-8-4V2s0 3 4 4c.758.15 1.561.226 2 .5a9.442 9.442 0 012 0c.439-.274 1.242-.35 2-.5 4 0 4-4 4-4v.001c-5 0-8 4-8 4zM12 12a3 3 0 100-6 3 3 0 000 6zM3 18v3h18v-3M4 21h16"
                      />
                    </svg>

                    <a
                      href="/rt"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      RT
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      RT
                    </span>
                  </a>
                </li>
                {/* )} */}

                {/* {(role === "warga" || role === "rt" || role === "admin") && ( */}
                <li>
                  <a
                    href="/warga"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <a
                      href="/warga"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      Warga
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      Warga
                    </span>
                  </a>
                </li>
                {/* )} */}
                {/* 
                {(role === "rw" ||
                  role === "rt" ||
                  role === "warga" ||
                  role === "admin") && ( */}
                <li>
                  <a
                    href="/soerat"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L2 8l10 6 10-6-10-6zM2 8l10 6 10-6M2 8v10l10 6 10-6V8"
                      />
                    </svg>

                    <a
                      href="/soerat"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      E Soerat
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      E Soerat
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="/approve-soerat"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L2 8l10 6 10-6-10-6zM2 8l10 6 10-6M2 8v10l10 6 10-6V8"
                      />
                    </svg>

                    <a
                      href="/approve-soerat"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      Approve Soerat
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      Approve Soerat
                    </span>
                  </a>
                </li>
                {/* )} */}

                {/* {(role === "rw" || role === "rt" || role === "admin") && ( */}
                <li>
                  <a
                    href="/e-kas"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>

                    <a
                      href="/e-kas"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      E Kas
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      E Kas
                    </span>
                  </a>
                </li>
                {/* )} */}
                {/* {(role === "rw" || role === "rt" || role === "admin") && ( */}
                <li>
                  <a
                    href="/organisasi"
                    className={`t group ${
                      isOpen
                        ? "px-3 py-2 gap-x-3"
                        : "relative justify-center py-2"
                    } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>

                    <a
                      href="/organisasi"
                      className={`${
                        isOpen ? "block" : "hidden"
                      } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                    >
                      Organisasi
                    </a>

                    <span
                      className={`${
                        isOpen ? "hidden" : "block"
                      } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                    >
                      Organisasi
                    </span>
                  </a>
                </li>
                {/* )} */}
              </ul>
            </div>
          </div>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
          <form action="#">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 opacity-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible">
                Logout
              </span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
