import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { Link } from "react-router-dom";
import { authConfig } from "../../utils/authConfig";

function SoeratAll() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [soeratList, setSoeratList] = useState([]);
  const [error, setError] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:2001/e-kampoeng/api/e-soerat-rt/all", authConfig)
      .then((response) => {
        setSoeratList(response.data.data.content);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
                  Table Semua Soerat
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
                      Pengajuan +
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
                          to="/rejected-soerat"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Soerat Di Tolak
                        </Link>
                        <Link
                          to="/soerat-approved"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Soerat Di Setujui
                        </Link>
                        <Link
                          to="/approve-soerat"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Soerat Belum Di Respon
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
                          Nama Soerat
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Waktu Pengajuan
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Waktu Di Terima
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Status
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Pesan
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                          Pemohon
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {soeratList.map((soerat, index) => (
                        <tr key={soerat.id}>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.jenisSurat}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.waktuPengajuan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.waktuDiSetujui || "-"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.status}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.message || "-"}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                            {soerat.warga.nama}
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
    </div>
  );
}

export default SoeratAll;
