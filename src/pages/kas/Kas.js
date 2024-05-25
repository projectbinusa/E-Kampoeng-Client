import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import axios from "axios";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Kas() {
  const [isModalGunakanKas, setModalGunakanKas] = useState(false);
  const [ModalTambahKas, setModalTambahKas] = useState(false);
  const [saldo, setSaldo] = useState(null);
  const [namaKas, setNamaKas] = useState("");
  const [jumlahKas, setJumlahKas] = useState(0);
  const [kegiatan, setKegiatan] = useState("");
  const [anggaranKeluar, setAnggaranKeluar] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2001/api/e-kas/saldo",
          authConfig
        );
        setSaldo(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const openModalGunakanKas = () => {
    setModalGunakanKas(true);
  };
  const openTambahKas = () => {
    setModalTambahKas(true);
  };

  const closeModalGunakanKas = () => {
    setModalGunakanKas(false);
  };

  const closeModalTambahKas = () => {
    setModalTambahKas(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleTambahKas = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2001/api/e-kas/pemasukan",
        {
          jumlahPemasukan: jumlahKas,
          nama: namaKas,
        },
        authConfig
      );
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data kas berhasil ditambahkan!",
      }).then(() => {
        closeModalTambahKas();
        window.location.href = "/e-kas";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menambahkan data kas.",
      });
      console.error("Error adding data:", error);
    }
  };

  const handleGunakanKas = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2001/api/e-kas/pengeluaran",
        {
          anggaranKeluar: anggaranKeluar,
          kegiatan: kegiatan,
        },
        authConfig
      );
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data kas berhasil ditambahkan!",
      }).then(() => {
        closeModalGunakanKas();
        window.location.href = "/e-kas";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menambahkan data kas.",
      });
      console.error("Error adding data:", error);
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
                  Table Kas
                </h1>
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      onClick={openTambahKas}
                      className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                    >
                      Tambah Kas
                    </button>
                    <button
                      type="button"
                      className="inline-block rounded bg-[#D10363] px-10 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      List
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
                          to="/e-kas/pemasukan"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Pemasukan
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

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className="text-left">
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Saldo
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {saldo && (
                      <tr>
                        <td className="text-center text-bold">
                          Rp.{saldo.jumlahSaldo}
                        </td>
                        <td className="text-center">
                          <button
                            onClick={openModalGunakanKas}
                            className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363]"
                          >
                            Gunakan
                          </button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {isModalGunakanKas && (
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
                      Gunakan Kas
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="Kas"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="Kas"
                        placeholder="Kas"
                        autoComplete="off"
                        onChange={(e) => setKegiatan(e.target.value)}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Kegunaan
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="Kas"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="number"
                        id="Kas"
                        placeholder="Kas"
                        autoComplete="off"
                        onChange={(e) => setAnggaranKeluar(e.target.value)} // Update jumlahKas saat nilai input berubah
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Jumlah
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModalGunakanKas}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={handleGunakanKas} // Panggil fungsi handleTambahKas saat tombol Simpan ditekan
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {ModalTambahKas && (
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
                      Tambah Kas
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="Kas"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="Kas"
                        placeholder="Kas"
                        autoComplete="off"
                        onChange={(e) => setNamaKas(e.target.value)} // Update namaKas saat nilai input berubah
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Asal Kas
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="Kas"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="number"
                        id="Kas"
                        placeholder="Kas"
                        autoComplete="off"
                        onChange={(e) => setJumlahKas(e.target.value)} // Update jumlahKas saat nilai input berubah
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Jumlah Kas
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModalTambahKas}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={handleTambahKas} // Panggil fungsi handleTambahKas saat tombol Simpan ditekan
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

export default Kas;
