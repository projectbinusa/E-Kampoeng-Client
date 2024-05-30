import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { authConfig } from "../../utils/authConfig";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

const DetailPemasukan = () => {
  const { id } = useParams();
  const [nama, setNama] = useState("");
  const [jumlahPemasukan, setJumlahPemasukan] = useState("");

  useEffect(() => {
    const getPemasukanById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/api/e-kas/pemasukan/${id}`,
          authConfig
        );
        setNama(response.data.nama);
        setJumlahPemasukan(response.data.jumlahPemasukan);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    getPemasukanById();
  }, [id]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <div className="bg-gray-300 h-full pb-5">
          <Navbar />

          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <span className="space-y-3">
              <div className="flex md:flex-row md:justify-between flex-col items-center space-y-3 mx-5 page-header">
                <h1 className="text-xl text-center font-semibold play">
                  Detail Pemasukan
                </h1>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center ubuntu"
                >
                  <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                      <Link
                        to={"/"}
                        className="block transition hover:text-gray-700"
                      >
                        <span className="sr-only">Home</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
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

                    <li className="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                        to={"/e-kas/pemasukan"}
                        className="block transition hover:text-gray-700"
                      >
                        Pemasukan
                      </Link>
                    </li>

                    <li className="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
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
                  </ol>
                </nav>
              </div>
              <hr className="border border-black" />
            </span>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2  bg-white text-sm text-left border-collapse border border-red-500 rounded-full">
                <tbody className="divide-y ">
                  <tr className="bg-[#D10363]">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-[#D10363] separator"
                    >
                      DATA PEMASUKAN
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Asal Pemasukan
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {nama}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Jumlah Pemasukan
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      Rp. {jumlahPemasukan}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailPemasukan;
