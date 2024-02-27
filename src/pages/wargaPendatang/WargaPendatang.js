import React from "react";
import Navbar from "../../component/Navbar";

function WargaPendatang() {
  const data = [
    {
      nama_warga: "niken putri saparina",
      status_penduduk: "Kontrak Keluarga",
    },
    {
      nama_warga: "davina mutiara stani",
      status_penduduk: "Kos",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="w-full h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-col">
            <div className="-my-2 py-2 mt-8 px-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              <div className=" align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b border-gray-200 bg-white leading-4 tracking-wider text-base text-gray-700">
                      {/* <th className="text-xl">Data Kepala Keluarg</th> */}

                      <th className="px-5 py-2 text-left" colspan="2">
                        <div className="relative inline-flex">
                          <select className=" appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-3 text-sm rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal">
                            <option value="1">Show 1 Entries</option>
                            <option value="10">Show 10 Entries</option>
                            <option value="100">Show 100 Entries</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9 11l3-3 3 3m-3 3v-6" />
                            </svg>
                          </div>
                        </div>
                      </th>

                      <th className="px-5 py-2 text-left" colspan="3">
                        <div className=" py-0 gap-2  flex float-right flex-wrap flex-grow justify-between">
                          <div className="flex items-center py-2">
                            <input
                              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                              id="inline-searcg"
                              type="text"
                              placeholder="Search"
                            />
                          </div>

                          <div className="flex items-center py-2">
                            <a
                              href="/tambahWargaPendatang"
                              className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline"
                            >
                              Tambah
                            </a>
                          </div>
                        </div>
                      </th>
                    </tr>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs leading-4 text-gray-500 uppercase tracking-wider">
                      <th className="px-6 py-3 text-center font-medium">No </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Nama Warga
                      </th>
                      <th className="px-6 py-3 text-center font-medium">
                        Status Penduduk
                      </th>

                      <th className="px-6 py-3 text-center font-medium">
                        Aksi
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white">
                    {data.map((warga_pendatang, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-center whitespace-no-wrap border-b border-gray-200">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 text-center whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm justify-center leading-5 text-gray-900">
                            {warga_pendatang.nama_warga}
                          </div>
                        </td>

                        <td className="px-6 py-4 text-center whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm justify-center leading-5 text-gray-900">
                            {warga_pendatang.status_penduduk}
                          </div>
                        </td>

                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                          <div className="text-sm leading-5 justify-center flex gap-3 text-gray-900">
                            <a
                              href="/editWargaPendatang"
                              className="inline-block  px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-400 hover:bg-blue-300 focus:outline-none focus:shadow-outline"
                            >
                              <i
                                style={{ color: "white" }}
                                className="fa-solid fa-pen-to-square"
                              ></i>
                            </a>

                            <button className="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-400 focus:outline-none focus:shadow-outline">
                              <i
                                style={{ color: "white" }}
                                className="fa-solid fa-trash"
                              ></i>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="flex justify-center float-right mt-8">
                <nav className="relative z-0 inline-flex shadow-sm">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span>Previous</span>
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    3
                  </a>
                  <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                    ...
                  </span>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    8
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    9
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <span>Next</span>
                  </a>
                </nav>
              </div>

              {/* End of Pagination */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WargaPendatang;
