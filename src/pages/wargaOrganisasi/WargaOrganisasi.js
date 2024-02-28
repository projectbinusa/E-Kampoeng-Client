import React from "react";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";

function WargaOrganisasi() {
    const data = [
        {
          warga_id: "niken putri saparina",
          organisasi_id: "Bootcamp Forum",
          createAt: "03-05-2023",
        },
        {
          warga_id: "davina mutiara stani",
          organisasi_id: "Bootcamp Forum",
          createAt: "05-02-2024",
        },
      ];
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />

      <div className="bg-white m-5 p-5 rounded-xl space-y-5">
        <span className="space-y-3">
          <div className="flex md:flex-row md:justify-between flex-col items-center space-y-3 mx-5 page-header">
            <h1 className="text-xl text-center font-semibold play">
              Data Warga Organisasi
            </h1>
            <nav aria-label="Breadcrumb" className="flex items-center ubuntu">
              <ol class="flex items-center gap-1 text-sm text-gray-600">
                <li>
                  <Link to={"/"} class="block transition hover:text-gray-700">
                    <span class="sr-only">Home</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </Link>
                </li>

                <li class="rtl:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </li>

                <li>
                  <Link
                    to={"/warga-organisasi"}
                    class="block transition hover:text-gray-700"
                  >
                    Warga Organisasi
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
          <hr className="border border-black" />
        </span>

        <div class="overflow-x-auto rounded-lg border border-gray-200">
          <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
              <tr>
                <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  Nama Warga
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  Nama Organisasi
                </th>
                <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  CreateAt
                </th>
             
                <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
              {data.map((warga, idx) => {
                return (
                  <tr class="odd:bg-gray-50 text-center" key={idx}>
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {warga.warga_id}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {warga.organisasi_id}
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                      {warga.createAt}
                    </td>
                   
                  
                    <td class="whitespace-nowrap flex justify-center gap-3 px-4 py-2 text-gray-700">
                    
                      <button
                        className="block rounded-md bg-red-500 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-red-500 hover:border-red-500"
                        title="Hapus"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="inherit"
                          class="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WargaOrganisasi;
