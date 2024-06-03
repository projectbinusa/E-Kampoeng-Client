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
                    className="size-5 opacity-50"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
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
                {role === "ROLE_ADMIN" && (
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
                      className="size-5 opacity-50"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                        clip-rule="evenodd"
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
                )}
              </div>

              <ul className="space-y-1 border-t border-gray-100 pt-4">
                {role === "ROLE_ADMIN" && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm4.125 3a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-3.873 8.703a4.126 4.126 0 0 1 7.746 0 .75.75 0 0 1-.351.92 7.47 7.47 0 0 1-3.522.877 7.47 7.47 0 0 1-3.522-.877.75.75 0 0 1-.351-.92ZM15 8.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15ZM14.25 12a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 0-1.5H15Z"
                          clip-rule="evenodd"
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
                )}

                {role === "ROLE_ADMIN" && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clip-rule="evenodd"
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
                )}

                {(role === "ROLE_WARGA" || role === "ROLE_RT") && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          clip-rule="evenodd"
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
                )}

                {(role === "ROLE_WARGA" || role === "ROLE_RT") && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                          clip-rule="evenodd"
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
                )}
                {role === "ROLE_RT" && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                          clip-rule="evenodd"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                          clip-rule="evenodd"
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
                )}

                {(role === "ROLE_RT" || role === "ROLE_WARGA") && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                          clip-rule="evenodd"
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
                )}
                {(role === "ROLE_WARGA" ||
                  role === "ROLE_RT" ||
                  role === "ROLE_ADMIN") && (
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
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clip-rule="evenodd"
                        />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
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
                )}
                {(role === "ROLE_WARGA" ||
                  role === "ROLE_RT" ||
                  role === "ROLE_ADMIN") && (
                  <li>
                    <a
                      href="/semua-berita"
                      className={`t group ${
                        isOpen
                          ? "px-3 py-2 gap-x-3"
                          : "relative justify-center py-2"
                      } flex items-center rounded border border-transparent text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition duration-300`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-50"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z"
                          clip-rule="evenodd"
                        />
                        <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 0 1-3 0V6.75Z" />
                      </svg>

                      <a
                        href="/semua-berita"
                        className={`${
                          isOpen ? "block" : "hidden"
                        } start-full bottom-0 rounded-lg font-medium text-left text-sm text-inherit transition duration-300`}
                      >
                        Berita
                      </a>

                      <span
                        className={`${
                          isOpen ? "hidden" : "block"
                        } invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible`}
                      >
                        Berita
                      </span>
                    </a>
                  </li>
                )}
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
                className="size-5 opacity-50"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm5.03 4.72a.75.75 0 0 1 0 1.06l-1.72 1.72h10.94a.75.75 0 0 1 0 1.5H10.81l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
                  clip-rule="evenodd"
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
