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

  useEffect(() => {
    axios
      .get("http://localhost:2001/api/e-kas/pemasukan?page=0", authConfig)
      .then((response) => {
        setPemasukan(response.data.content);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

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
      // Show SweetAlert on error fetching data
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal mengambil data organisasi. Silakan coba lagi.",
      });
    }
  };

  const putPemasukan = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2001/api/e-kas/pemasukan/${editData.id}`,
        { nama, jumlahPemasukan },
        authConfig
      );
      closeModal(); // Close modal after successful update
      // Show SweetAlert on successful update
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Pemasukan berhasil diperbarui.",
      }).then((result) => {
        // Redirect to a specific page after successful update
        if (result.isConfirmed) {
          window.location.href = "/e-kas/pemasukan"; // Change "/dashboard" with the desired page URL
        }
      });
    } catch (error) {
      console.error("Error updating pemasukan:", error);
      // Show SweetAlert on error updating data
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal memperbarui pemasukan. Silakan coba lagi.",
      });
    }
  };

  // Function to open edit modal with data
  const openModal = (id) => {
    fetchPemasukanById(id); // Fetch organisasi data by ID before opening modal
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCancelSubmission = async (id) => {
    // Menampilkan konfirmasi SweetAlert sebelum melanjutkan pembatalan
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
          // Tambahkan logika lain jika diperlukan, seperti memperbarui data setelah pembatalan
          // Redirect ke halaman "/soerat"
          window.location.href = "/e-kas/pemasukan";
        } catch (error) {
          console.error("Error cancelling submission:", error);
          // Handle error, mungkin menampilkan pesan kesalahan kepada pengguna
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
                            {index + 1}
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
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <div className="sm:flex sm:items-center flex-col">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-full">
                  <span className="space-y-3">
                    <h1 className="text-xl text-left font-bold ubuntu my-auto">
                      Ubah Pemasukan
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="pemasukan"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="pemasukan"
                        placeholder="pemasukan"
                        autoComplete="off"
                        value={nama}
                        onChange={(e) => setNama(e.target.value)}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Asal Pemasukan
                      </span>
                    </label>
                    <label
                      htmlFor="jumlah"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="number"
                        id="jumlah"
                        placeholder="jumlah"
                        autoComplete="off"
                        value={jumlahPemasukan}
                        onChange={(e) => setJumlahPemasukan(e.target.value)}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Jumlah Pemasukan
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModal}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={putPemasukan}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pemasukan;
