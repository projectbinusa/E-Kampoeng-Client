import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import { Link } from "react-router-dom";

function ApproveSoerat() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [soeratList, setSoeratList] = useState([]);
  const [error, setError] = useState(null);
  const [selectedSoerat, setSelectedSoerat] = useState(null);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    axios
      .get(
        "http://localhost:2001/e-kampoeng/api/e-soerat-rt/unapproved",
        authConfig
      )
      .then((response) => {
        setSoeratList(response.data.data.content);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const approveSoerat = (id, status, message) => {
    axios
      .put(
        `http://localhost:2001/e-kampoeng/api/e-soerat-rt/approve/${id}`,
        { status, message },
        authConfig
      )
      .then((response) => {
        // Update the soerat list to reflect the change
        setSoeratList((prevList) =>
          prevList.map((soerat) =>
            soerat.id === id ? { ...soerat, status, message } : soerat
          )
        );
        setModalEditOpen(false); // Close the modal after approval
        Swal.fire({
          title: "Success",
          text: "Surat berhasil diapprove!",
          icon: "success",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  const handleResponseClick = (soerat) => {
    setSelectedSoerat(soerat);
    setStatus(soerat.status);
    setMessage(soerat.message);
    setModalEditOpen(true);
  };

  const handleSave = () => {
    if (selectedSoerat) {
      approveSoerat(selectedSoerat.id, status, message);
    }
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
                  Table Persetujuan Soerat
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
                          to="/all-soerat"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                          role="menuitem"
                        >
                          Semua Soerat
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
                        <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                          Aksi
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
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800 text-center">
                            <button
                              className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                              onClick={() => handleResponseClick(soerat)}
                            >
                              Response
                            </button>
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

      {modalEditOpen && (
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
                      Edit ApproveSoerat
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="status"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <select
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="" disabled>
                          Pilih Status
                        </option>
                        <option value="Di Setujui">Di Setujui</option>
                        <option value="Di Tolak">Di Tolak</option>
                      </select>
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Status
                      </span>
                    </label>
                    <label
                      htmlFor="message"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="message"
                        placeholder="Message"
                        autoComplete="off"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Message
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModalEdit}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={handleSave}
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

export default ApproveSoerat;
