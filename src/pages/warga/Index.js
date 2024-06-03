import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const Index = () => {
  const role = localStorage.getItem("role");
  const [wargas, setWargas] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getAllWarga = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/warga/rt/all?page=${page}&size=5`,
        authConfig
      );
      setWargas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:2001/e-kampoeng/api/warga/${id}`,
        authConfig
      );
      getAllWarga();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllWarga(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <section>
          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <span className="space-y-3">
              <div className="flex md:flex-row md:justify-between flex-col items-center space-y-3 mx-5 page-header">
                {role === "ROLE_RT" && (
                  <button className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4">
                    <a href="tambah-warga"> Tambah Warga</a>
                  </button>
                )}
                <h1 className="text-xl text-center font-semibold play">
                  Data Warga
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
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
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
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10l-3.293-3.293a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li>
                      <Link
                        to={"/warga"}
                        className="block transition hover:text-gray-700"
                      >
                        Warga
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              <hr className="border border-black" />
            </span>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Nama Lengkap
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Tempat dan Tanggal Lahir
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Jenis Kelamin
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Agama
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Status Kependudukan
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Alamat
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {wargas.content && wargas.content.length > 0 ? (
                    wargas.content.map((warga, idx) => (
                      <tr className="odd:bg-gray-50 text-center" key={warga.id}>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {currentPage * 5 + idx + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.nama}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.tempat_lahir}, {warga.tanggal_lahir}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.jenis_kelamin}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.agama}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.status_kependudukan}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {warga.alamat}
                        </td>
                        <td className="whitespace-nowrap flex justify-center gap-3 px-4 py-2 text-gray-700">
                          <Link
                            to={`/edit-warga/${warga.id}`}
                            className="block rounded-md bg-[#F3CA52] border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-[#F3CA52] hover:border-[#F3CA52]"
                            title="Edit"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              id="Outline"
                              viewBox="0 0 24 24"
                              width="18"
                              height="18"
                            >
                              <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
                              <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V4h-.5a1,1,0,0,1-1-1V2a1,1,0,0,1,1-1H6a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1h3.5a1,1,0,0,1,1,1zM4.118,4 4,4.059V13a1,1,0,0,0,1 1h6a1,1,0,0,0,1-1V4.059L11.882,4zM2.5 3h11V2h-11z" />
                            </svg>
                          </Link>
                          <Link
                            to={`/detail-warga/${warga.id}`}
                            className="block rounded-md bg-blue-400 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-blue-400 hover:border-blue-400"
                            title="Detail"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="inherit"
                              className="bi bi-info-circle"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                          </Link>
                          <button
                            className="block rounded-md bg-red-500 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-red-500 hover:border-red-500"
                            title="Hapus"
                            onClick={() => handleDelete(warga.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="bi bi-trash"
                              width="18"
                              height="18"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.5 6.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5V7h.5a1 1 0 0 1 0 2h-.5v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7H4a1 1 0 0 1 0-2h.5v-.5zM8 7v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7H8z"
                              />
                              <path
                                fillRule="evenodd"
                                d="M8.5 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V4h1a1 1 0 0 1 0 2h-1v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6H7a1 1 0 0 1 0-2h1V3.5zM6 4v10a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V4H6z"
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        className="whitespace-nowrap px-4 py-2 text-gray-700 text-center"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            {wargas.content && wargas.content.length > 0 && (
              <div className="mt-5 flex justify-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="mx-2 px-4 py-2 bg-[#D10363] text-white rounded-md hover:bg-[#AD0F5C] focus:outline-none"
                  disabled={currentPage === 0}
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="mx-2 px-4 py-2 bg-[#D10363] text-white rounded-md hover:bg-[#AD0F5C] focus:outline-none"
                  disabled={currentPage === wargas.totalPages - 1}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
