import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import Swal from "sweetalert2";
import { authConfig } from "../../utils/authConfig";

function Soerat() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newSoerat, setNewSoerat] = useState("");
  const [editedSoerat, setEditedSoerat] = useState("");
  const [editedSoeratId, setEditedSoeratId] = useState(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2001/e-kampoeng/api/e-soerat-rt/my-submissions",
          authConfig
        );
        setData(response.data.data.content);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTambahSoerat = async () => {
    try {
      await axios.post(
        "http://localhost:2001/e-kampoeng/api/e-soerat-rt/ajukan",
        { jenisSurat: newSoerat },
        authConfig
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Soerat berhasil ditambahkan",
      }).then(() => {
        window.location.href = "/soerat";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat menambahkan soerat",
      });
    }
  };

  const handleEditSubmission = async () => {
    try {
      await axios.put(
        `http://localhost:2001/e-kampoeng/api/e-soerat-rt/edit/${editedSoeratId}`,
        { jenisSurat: editedSoerat },
        authConfig
      );

      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Soerat berhasil diedit",
      }).then(() => {
        window.location.href = "/soerat";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Terjadi kesalahan saat mengedit soerat",
      });
    }
  };

  const handleCancelSubmission = async (id) => {
    // Menampilkan konfirmasi SweetAlert sebelum melanjutkan pembatalan
    Swal.fire({
      title: "Anda yakin ingin membatalkan pengajuan?",
      text: "Tindakan ini tidak dapat dibatalkan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, batalkan!",
      cancelButtonText: "Tidak, kembali",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:2001/e-kampoeng/api/e-soerat-rt/batalkan/${id}`,
            authConfig
          );
          // Tambahkan logika lain jika diperlukan, seperti memperbarui data setelah pembatalan
          // Redirect ke halaman "/soerat"
          window.location.href = "/soerat";
        } catch (error) {
          console.error("Error cancelling submission:", error);
          // Handle error, mungkin menampilkan pesan kesalahan kepada pengguna
          Swal.fire({
            title: "Error",
            text: "Terjadi kesalahan saat membatalkan pengajuan.",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "OK",
          });
        }
      }
    });
  };

  const openModalEdit = (soeratId, jenisSurat) => {
    setEditedSoerat(jenisSurat);
    setEditedSoeratId(soeratId);
    setModalEditOpen(true);
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
                  Table soerat
                </h1>
                <button
                  onClick={openModal}
                  className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                >
                  Tambah
                </button>
              </div>
              <hr className="border border-black" />

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className="text-left">
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        No
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Nama soerat
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Waktu Pengajuan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Waktu DiSetujui
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Status
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Pesan
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {loading ? (
                      <tr>
                        <td colSpan="6" className="text-center py-4">
                          Loading...
                        </td>
                      </tr>
                    ) : error ? (
                      <tr>
                        <td
                          colSpan="6"
                          className="text-center py-4 text-red-500"
                        >
                          {error}
                        </td>
                      </tr>
                    ) : (
                      data.map((soerat, index) => (
                        <tr key={soerat.id}>
                          <td className="whitespace-nowrap px-4 py-2">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {soerat.jenisSurat}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {soerat.waktuPengajuan}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {soerat.waktuDiSetujui}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {soerat.status}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2">
                            {soerat.message}
                          </td>
                          <td className="whitespace-nowrap px-4 py-2 text-center">
                            <button
                              onClick={() =>
                                openModalEdit(soerat.id, soerat.jenisSurat)
                              }
                              className="inline-block rounded bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-blue-700"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleCancelSubmission(soerat.id)}
                              className="inline-block rounded bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-red-700 ml-2"
                            >
                              Batalkan
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Modal tambah soerat */}
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
                      Tambah Soerat
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="jenisSurat"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <select
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        id="jenisSurat"
                        value={newSoerat}
                        onChange={(e) => setNewSoerat(e.target.value)}
                      >
                        <option value="">Pilih Nama Soerat</option>
                        <option value="KTP">Kartu Tanda Penduduk (KTP)</option>
                        <option value="KIA">Kartu Identitas Anak (KIA)</option>
                        <option value="KIS">Kartu Indonesia Sehat (KIS)</option>
                        <option value="KIP">
                          Kartu Indonesia Pintar (KIP)
                        </option>
                        <option value="Akta Kelahiran">Akta Kelahiran</option>
                        <option value="Kartu Keluarga">Kartu Keluarga</option>
                        <option value="BPJS">BPJS</option>
                        <option value="Surat Nikah">Surat Nikah</option>
                        <option value="Surat Kematian">Surat Kematian</option>
                        <option value="Surat Pindah">Surat Pindah</option>
                        <option value="Surat Izin Mengemudi (SIM)">
                          Surat Izin Mengemudi (SIM)
                        </option>
                      </select>
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama soerat
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
                  onClick={handleTambahSoerat}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                      Edit Soerat
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="editedSoerat"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <select
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        id="editedSoerat"
                        value={editedSoerat}
                        onChange={(e) => setEditedSoerat(e.target.value)}
                      >
                        <option value="">Pilih Nama Soerat</option>
                        <option value="KTP">Kartu Tanda Penduduk (KTP)</option>
                        <option value="KIA">Kartu Identitas Anak (KIA)</option>
                        <option value="KIS">Kartu Indonesia Sehat (KIS)</option>
                        <option value="KIP">
                          Kartu Indonesia Pintar (KIP)
                        </option>
                        <option value="Akta Kelahiran">Akta Kelahiran</option>
                        <option value="Kartu Keluarga">Kartu Keluarga</option>
                        <option value="BPJS">BPJS</option>
                        <option value="Surat Nikah">Surat Nikah</option>
                        <option value="Surat Kematian">Surat Kematian</option>
                        <option value="Surat Pindah">Surat Pindah</option>
                        <option value="Surat Izin Mengemudi (SIM)">
                          Surat Izin Mengemudi (SIM)
                        </option>
                      </select>
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama soerat
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
                  onClick={handleEditSubmission}
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

export default Soerat;
