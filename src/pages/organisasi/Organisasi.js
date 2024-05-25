import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import { Link } from "react-router-dom";

function Organisasi() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpenAnggota, setModalAnggota] = useState(false);
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [nama_organisasi, setNama_organisasi] = useState("");
  const [organisasiList, setOrganisasiList] = useState([]);
  const [wargaList, setWargaList] = useState([]);
  const [selectedOrganisasi, setSelectedOrganisasi] = useState("");
  const [selectedWarga, setSelectedWarga] = useState("");
  const [selectedOrganisasiId, setSelectedOrganisasiId] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2001/e-kampoeng/api/organisasi-rt/all?page=0&size=1000",
          authConfig
        );
        setDatas(response.data.content);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch the list of organizations when the component mounts
    axios
      .get(
        "http://localhost:2001/e-kampoeng/api/organisasi-rt/all?page=0&size=1000",
        authConfig
      )
      .then((response) => {
        setOrganisasiList(response.data.content);
      })
      .catch((error) => {
        console.error("There was an error fetching the organizations!", error);
      });

    axios
      .get("http://localhost:2001/e-kampoeng/api/warga/rt/all", authConfig)
      .then((response) => {
        if (response.data && response.data.data) {
          setWargaList(response.data.data);
        } else {
          console.error("Unexpected response structure:", response);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the residents!", error);
        if (error.response) {
          console.error(
            "Server responded with status code:",
            error.response.status
          );
          console.error("Response data:", error.response.data);
        } else {
          console.error("Error message:", error.message);
        }
      });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalAnggota = () => {
    setModalAnggota(true);
  };

  const closeModalAnggota = () => {
    setModalAnggota(false);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  const addOrganisasi = async () => {
    try {
      const response = await axios.post(
        "http://localhost:2001/e-kampoeng/api/organisasi-rt/add",
        { nama_organisasi },
        authConfig
      );
      setNama_organisasi(""); // Clear input field
      closeModal(); // Close modal after successful addition
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Organisasi berhasil ditambahkan.",
      }).then((result) => {
        // Redirect to a specific page after successful addition
        if (result.isConfirmed) {
          window.location.href = "/organisasi"; // Change "/dashboard" with the desired page URL
        }
      });
    } catch (error) {
      console.error("Error adding organisasi:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal menambahkan organisasi. Silakan coba lagi.",
      });
    }
  };

  // Function to fetch data by ID and open modal
  const fetchOrganisasiByIdAndOpenModal = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/organisasi-rt/${id}`,
        authConfig
      );
      setEditData(response.data);
      setNama_organisasi(response.data.nama_organisasi); // Set the nama_organisasi state with the fetched data
      setModalEditOpen(true);
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

  // Function to open edit modal with data
  const openModalEdit = (id) => {
    fetchOrganisasiByIdAndOpenModal(id); // Fetch organisasi data by ID before opening modal
  };

  // Function to update organisasi
  const putOrganisasi = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2001/e-kampoeng/api/organisasi-rt/${editData.id}`,
        { nama_organisasi },
        authConfig
      );
      closeModalEdit(); // Close modal after successful update
      // Show SweetAlert on successful update
      Swal.fire({
        icon: "success",
        title: "Sukses!",
        text: "Organisasi berhasil diperbarui.",
      }).then((result) => {
        // Redirect to a specific page after successful update
        if (result.isConfirmed) {
          window.location.href = "/organisasi"; // Change "/dashboard" with the desired page URL
        }
      });
    } catch (error) {
      console.error("Error updating organisasi:", error);
      // Show SweetAlert on error updating data
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Gagal memperbarui organisasi. Silakan coba lagi.",
      });
    }
  };

  const addAnggotaOrganisasi = () => {
    // Add logic to send the request to add member to the organization
    axios
      .post(
        "http://localhost:2001/e-kampoeng/api/organisasi-warga/add",
        {
          organisasiId: selectedOrganisasi,
          wargaId: selectedWarga,
        },
        authConfig
      )
      .then((response) => {
        console.log("Response:", response.data);
        closeModalAnggota(); // Close modal after successful addition
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Anggota berhasil ditambahkan ke organisasi.",
        });
      })
      .catch((error) => {
        console.error("Error adding member to organization:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Terjadi kesalahan saat menambahkan anggota ke organisasi. Silakan coba lagi.",
        });
      });
  };

  // Function to delete organisasi
  const deleteOrganisasi = async (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan bisa mengembalikan data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:2001/e-kampoeng/api/organisasi-rt/${id}`,
            authConfig
          );
          // Remove the deleted item from state
          setDatas(datas.filter((data) => data.id !== id));
          // Show success SweetAlert
          Swal.fire({
            icon: "success",
            title: "Terhapus!",
            text: "Data organisasi berhasil dihapus.",
          });
        } catch (error) {
          console.error("Error deleting organisasi:", error);
          // Show error SweetAlert
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal menghapus organisasi. Silakan coba lagi.",
          });
        }
      }
    });
  };

  const handleSelectOrganisasi = (selectedId) => {
    setSelectedOrganisasiId(selectedId);
    window.location.href = `/anggota-organisasi/${selectedId}`; // Navigate to Anggota page with selected organisasiId
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
                  Table Organisasi
                </h1>
                <div className="flex flex-col justify-between sm:flex-row items-center">
                  <button
                    onClick={openModal}
                    className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                  >
                    Tambah Organisasi
                  </button>
                  <button
                    onClick={openModalAnggota}
                    className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                  >
                    Tambah Anggota
                  </button>
                </div>
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
                        Nama Organisasi
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Anggota
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {datas.map((data, index) => (
                      <tr key={data.id}>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                          {index + 1}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-800">
                          {data.nama_organisasi}
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-800 text-center">
                          <button
                            onClick={() => handleSelectOrganisasi(data.id)}
                            className="tinline-block rounded bg-[#4F6F52] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                          >
                            Lihat Anggota
                          </button>
                        </td>

                        <td className="whitespace-nowrap px-4 py-2 text-gray-800 text-center">
                          <button
                            onClick={() => openModalEdit(data.id)}
                            className="tinline-block rounded bg-[#2A629A] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteOrganisasi(data.id)}
                            className="tinline-block rounded bg-[#A91D3A] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Modal tambah organisasi */}
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
                      Tambah Organisasi
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="organisasi"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="organisasi"
                        placeholder="organisasi"
                        onChange={(e) => setNama_organisasi(e.target.value)}
                        value={nama_organisasi}
                        autoComplete="off"
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama Organisasi
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
                  onClick={addOrganisasi}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isOpenAnggota && (
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
                      Tambah Anggota Organisasi
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="organisasi"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <select
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        id="organisasi"
                        onChange={(e) => setSelectedOrganisasi(e.target.value)}
                        value={selectedOrganisasi}
                      >
                        <option value="" disabled>
                          Pilih Organisasi
                        </option>
                        {organisasiList.map((organisasi) => (
                          <option key={organisasi.id} value={organisasi.id}>
                            {organisasi.nama_organisasi}
                          </option>
                        ))}
                      </select>

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Organisasi
                      </span>
                    </label>
                  </div>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="warga"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <select
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        id="warga"
                        onChange={(e) => setSelectedWarga(e.target.value)}
                        value={selectedWarga}
                      >
                        <option value="" disabled>
                          Pilih Warga
                        </option>
                        {wargaList.map((warga) => (
                          <option key={warga.id} value={warga.id}>
                            {warga.nama}
                          </option>
                        ))}
                      </select>
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Warga
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between">
                <button
                  onClick={closeModalAnggota}
                  className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                >
                  Kembali
                </button>
                <button
                  onClick={addAnggotaOrganisasi}
                  className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white active:bg-[#776d5b]"
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {ModalEditOpen && editData && (
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
                      Edit Organisasi
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="organisasi"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="organisasi"
                        placeholder="organisasi"
                        onChange={(e) => setNama_organisasi(e.target.value)}
                        value={nama_organisasi}
                        autoComplete="off"
                      />
                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama Organisasi
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
                  onClick={putOrganisasi}
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

export default Organisasi;
