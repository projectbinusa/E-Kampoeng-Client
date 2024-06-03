import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { Link } from "react-router-dom";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";

function Pemasukan() {
  const role = localStorage.getItem("role");
  const [isModalOpen, setModalOpen] = useState(false);
  const [pemasukan, setPemasukan] = useState([]);
  const [nama, setNama] = useState("");
  const [jumlahPemasukan, setJumlahPemasukan] = useState("");
  const [editData, setEditData] = useState(null);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 2;

  useEffect(() => {
    fetchPemasukan(currentPage, pageSize);
  }, [currentPage]);

  const fetchPemasukan = (page, size) => {
    axios
      .get(
        `http://localhost:2001/api/e-kas/pemasukan?page=${page}&size=${size}`,
        authConfig
      )
      .then((response) => {
        setPemasukan(response.data.content);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const fetchPemasukanById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:2001/api/e-kas/pemasukan/${id}`,
        authConfig
      );
      setEditData(response.data);
      setNama(response.data.nama);
      setJumlahPemasukan(response.data.jumlahPemasukan);
      setModalOpen(true);
    } catch (error) {
      console.error("Error fetching organisasi by ID:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal mengambil data organisasi. Silakan coba lagi.",
      });
    }
  };

  const putPemasukan = async () => {
    try {
      await axios.put(
        `http://localhost:2001/api/e-kas/pemasukan/${editData.id}`,
        { nama, jumlahPemasukan },
        authConfig
      );
      closeModal();
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Pemasukan berhasil diperbarui.",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/e-kas/pemasukan";
        }
      });
    } catch (error) {
      console.error("Error updating pemasukan:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal memperbarui pemasukan. Silakan coba lagi.",
      });
    }
  };

  const openModal = (id) => {
    fetchPemasukanById(id);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCancelSubmission = async (id) => {
    Swal.fire({
      title: "Anda yakin ingin membatalkan Pemasukan?",
      text: "Tindakan ini tidak dapat dibatalkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Hapus Pemasukan!",
      cancelButtonText: "Tidak, kembali",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:2001/api/e-kas/pemasukan/${id}`,
            authConfig
          );
          window.location.href = "/e-kas/pemasukan";
        } catch (error) {
          console.error("Error cancelling submission:", error);
          Swal.fire({
            title: "Error",
            text: "Terjadi kesalahan saat membatalkan pemasukan.",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="block w-full">
          <div className="bg-gray-300 h-full min-h-screen pb-5">
            <Navbar />

            <div className="bg-white m-5 p-5 rounded-xl space-y-5">
              <div className="flex flex-col justify-between sm:flex-row items-center">
                <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
                  List Pemasukan
                </h1>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="inline-block rounded bg-[#D10363] px-10 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      List +
                    </button>
                  </div>

                  {dropdownOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                    >
                      <div className="py-1" role="none">
                        <Link
                          to="/e-kas"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          saldo
                        </Link>
                        <Link
                          to="/e-kas/pengeluaran"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Pengeluaran
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <hr className="border border-black" />

              {error ? (
                <div className="text-red-500">{error}</div>
              ) : (
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr className="text-left">
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          No
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Asal Pemasukan
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Jumlah Pemasukan
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                          Aksi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {pemasukan.map((pemasukan, index) => (
                        <tr key={pemasukan.id}>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {index + 1 + currentPage * pageSize}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {pemasukan.nama}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            Rp. {pemasukan.jumlahPemasukan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800 text-center">
                            {role === "ROLE_RT" && (
                              <button
                                onClick={() =>
                                  handleCancelSubmission(pemasukan.id)
                                }
                                className="inline-block rounded bg-[#FF0000] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                              >
                                Hapus
                              </button>
                            )}
                            <Link
                              to={`/e-kas/detail-pemasukan/${pemasukan.id}`}
                              className="inline-block rounded bg-[#003285] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                            >
                              Detail
                            </Link>
                            {role === "ROLE_RT" && (
                              <button
                                onClick={() =>
                                  openModal(
                                    pemasukan.id,
                                    pemasukan.nama,
                                    pemasukan.jumlahPemasukan
                                  )
                                }
                                className="inline-block rounded bg-[#FFA62F] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                              >
                                Ubah
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="flex justify-between mt-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                  className={`bg-[#D10363] text-white font-bold py-2 px-4 rounded-lg ${
                    currentPage === 0 && "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`bg-[#D10363] text-white font-bold py-2 px-4 rounded-lg ${
                    currentPage === totalPages - 1 &&
                    "opacity-50 cursor-not-allowed"
                  }`}
                >
                  Next
                </button>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Pemasukan</h2>
            <div className="mb-4">
              <label className="block text-gray-700">Nama Pemasukan:</label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Jumlah Pemasukan:</label>
              <input
                type="text"
                value={jumlahPemasukan}
                onChange={(e) => setJumlahPemasukan(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white font-bold py-2 px-4 rounded-lg mr-2"
              >
                Batal
              </button>
              <button
                onClick={putPemasukan}
                className="bg-[#D10363] text-white font-bold py-2 px-4 rounded-lg"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pemasukan;
