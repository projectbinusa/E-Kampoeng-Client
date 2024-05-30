import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";
import axios from "axios";
import { api_wilRt } from "../../utils/api";
import Swal from "sweetalert2";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
function Wilayah() {
  const [list, setWilRt] = useState([]);
  const [pages, setPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const size = 5;

  // const getAll = async () => {
  //   await axios
  //     .get("http://localhost:8000/e-kampoeng/api/wilayah-rt", authConfig)
  //     .then((res) => {
  //       setWilRt(res.data.data);
  //     })
  //     .catch((error) => {
  //       alert("terjadi kesalahan " + error);
  //     });
  // };

  const getAll = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/wilayah-rt?page=${pages}&size=${size}`,
        authConfig
      );
      setPages(response.data.totalPages);
      setWilRt(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 0 || newPage > pages) {
      return;
    }
    setCurrentPage(newPage);
    getAll(newPage);
  };

  const Delete = async (id) => {
    Swal.fire({
      title: "Menghapus?",
      text: "Anda mengklik tombol!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#5F8D4E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus ini!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(api_wilRt + id, authConfig);
          Swal.fire({
            title: "Terhapus!",
            text: "Data telah dihapus.",
            icon: "success",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } catch (error) {
          console.error("Terjadi kesalahan:", error);
          Swal.fire(
            "Gagal!",
            "Terjadi kesalahan saat menghapus data.",
            "error"
          );
        }
      }
    });
  };

  useEffect(() => {
    getAll(currentPage);
  }, [currentPage]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <div className="bg-gray-300 h-full min-h-screen pb-5">
          <Navbar />

          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <span className="space-y-3">
              <div className="flex flex-col justify-between sm:flex-row items-center">
                <button className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4">
                  <a href="tambah-wilayah-rt"> Tambah Wilayah RT</a>
                </button>
                <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
                  Table Wilayah RT
                </h1>
                <button className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4">
                  <a href="tambah-kepala-rt"> Tambah Kepala RT</a>
                </button>
              </div>
              <hr className="border border-black" />
              <div className="flex flex-col justify-between sm:flex-row items-center">
                <div className="flex items-center">
                  <p className="">Show</p>
                  <div className="relative inline-flex my-3 mx-2">
                    <select className="appearance-none bg-white border border-gray-300 text-gray-700 p-2 pr-8 text-sm rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal">
                      <option value="1">1</option>
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
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
                  <p className="mr-2">entries</p>
                </div>
                <div className="flex items-center">
                  <input
                    className="bg-gray-50 appearance-none border-2 border-[#D10363] rounded w-full py-2 px-4 text-[#D10363] leading-tight focus:outline-none focus:bg-white focus:border-[#D10363]"
                    id="inline-search"
                    type="text"
                    placeholder="Search"
                  />
                </div>
              </div>
            </span>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="text-left">
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      No RT
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Kepala RT
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {list.map((row, idx) => {
                    return (
                      <tr className="odd:bg-gray-50 text-left">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                          {idx + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {row.nomorRt}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                          {row.kepalaRtNama}
                        </td>
                        <td className="whitespace-nowrap flex justify-center gap-3 px-4 py-2 text-gray-700">
                          <Link
                            to={`/edit-wilayah-rt/` + row.id}
                            className="block rounded-md bg-blue-400 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-blue-400 hover:border-blue-400"
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
                              <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                            </svg>
                          </Link>
                          <Link
                            onClick={() => Delete(row.id)}
                            className="block rounded-md bg-red-500 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-red-500 hover:border-red-500"
                            title="Hapus"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="inherit"
                              className="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <ol className="flex justify-center gap-1 text-xs font-medium">
              <li>
                {/* Menangani halaman sebelumnya */}
                <a
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={`inline-flex size-8 items-center justify-center rounded border border-gray-500 bg-white text-gray-900 rtl:rotate-180 ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed bg-gray-200"
                      : ""
                  }`}
                >
                  <span className="sr-only">Prev Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              {/* Menampilkan nomor halaman */}
              {Array.from({ length: pages }, (_, i) => (
                <li key={i}>
                  <a
                    href="#"
                    onClick={() => handlePageChange(i)} // Tidak perlu menambahkan 1 karena kita sudah mulai dari 0
                    className={`block size-8 rounded border border-gray-500 bg-white text-center leading-8 text-gray-900 ${
                      i === currentPage ? "bg-gray-500 text-white" : ""
                    }`}
                  >
                    {i + 1}{" "}
                    {/* Tambahkan 1 untuk menampilkan nomor halaman yang dimulai dari 1 */}
                  </a>
                </li>
              ))}

              {/* Menangani halaman berikutnya */}
              <li>
                <a
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={`inline-flex size-8 items-center justify-center rounded border border-gray-500 bg-white text-gray-900 ${
                    currentPage >= pages
                      ? "opacity-50 cursor-not-allowed bg-gray-200"
                      : ""
                  }`}
                >
                  <span className="sr-only">Next Page</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Wilayah;
