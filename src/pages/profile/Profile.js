import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    Image: "",
    nama: "",
    email: "",
    alamat: "",
    noTelp: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2001/e-kampoeng/api/profile",
          authConfig
        );
        setProfile(response.data);
        setFormData({
          image: response.data.image,
          nama: response.data.nama,
          email: response.data.email,
          alamat: response.data.alamat,
          noTelp: response.data.no_telp,
        });
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfile();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const updateProfile = async () => {
    try {
      const response = await axios.put(
        "http://localhost:2001/e-kampoeng/api/update-profile",
        formData,
        authConfig
      );
      setProfile(response.data);
      closeModal();
      // Tampilkan SweetAlert
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Profile has been updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    // Periksa ukuran file
    if (file && file.size > 1024 * 1024) {
      // Jika ukuran file melebihi 1 MB, tampilkan pesan kesalahan
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "File size exceeds the maximum limit (1 MB).",
      });
      return; // Berhenti dan tidak melanjutkan pengunggahan
    }
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.put(
        "http://localhost:2001/e-kampoeng/api/foto-profile",
        formData,
        authConfig
      );
      // Jika pembaruan foto berhasil, perbarui foto profil
      setProfile((prevProfile) => ({
        ...prevProfile,
        image: response.data.data.image,
      }));
      // Tampilkan pesan sukses
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Photo updated successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Error updating profile photo:", error);
      // Tampilkan pesan kesalahan jika terjadi kesalahan saat mengunggah foto
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to update profile photo.",
      });
    }
  };

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
                  Profile
                </h1>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center ubuntu"
                >
                  <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <button
                      onClick={openModal}
                      className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:mr-4"
                    >
                      Edit Profile
                    </button>
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
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                    <li>
                      <Link
                        to={"/profile"}
                        className="block transition hover:text-gray-700"
                      >
                        Profile
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
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </li>
                  </ol>
                </nav>
              </div>
              <hr className="border border-black" />
            </span>
            <span className="flex flex-col justify-center items-center avatar">
              <div class="py-3 center mx-auto">
                <div class="rounded-lg text-center">
                  <div class="mb-4">
                    <img
                      class="size-32 rounded-full object-cover border-2 border-black h-30 w-30"
                      src={profile?.image}
                      alt="Avatar Upload"
                    />
                  </div>
                  <label htmlFor="upload-photo" className="cursor-pointer mt-6">
                    <span className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ">
                      Ubah Foto
                    </span>
                    <input
                      id="upload-photo"
                      type="file"
                      className="hidden"
                      onChange={handlePhotoUpload}
                    />
                  </label>
                  <div className="flex flex-col items-center mt-3">
                    <h1 className="text-3xl">
                      <b>{profile?.nama}</b>
                    </h1>
                  </div>
                </div>
              </div>
            </span>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 bg-white text-sm text-left border-collapse border border-red-500 rounded-full">
                <tbody className="divide-y ">
                  <tr className="bg-[#D10363]">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-[#D10363] separator"
                    >
                      DATA DIRI
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Email
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {profile?.email}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Alamat
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {profile?.alamat}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      No Telpon
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {profile?.no_telp}
                    </td>
                  </tr>
                  {/* Tambahkan data profil lainnya sesuai kebutuhan */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Modal edit profile */}
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
                      Edit Profile
                    </h1>
                    <hr className="border border-black" />
                  </span>
                  <div className="mt-4 mb-4 sm:w-full">
                    <label
                      htmlFor="nama"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="nama"
                        placeholder="nama"
                        autoComplete="off"
                        value={formData.nama}
                        onChange={handleInputChange}
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Nama
                      </span>
                    </label>
                    <label
                      htmlFor="email"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="email"
                        id="email"
                        placeholder="email"
                        autoComplete="off"
                        value={formData.email}
                        onChange={handleInputChange}
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Email
                      </span>
                    </label>
                    <label
                      htmlFor="alamat"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="text"
                        id="alamat"
                        placeholder="alamat"
                        autoComplete="off"
                        value={formData.alamat}
                        onChange={handleInputChange}
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        Alamat
                      </span>
                    </label>
                    <label
                      htmlFor="noTelp"
                      className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#D10363]"
                    >
                      <input
                        className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        type="number"
                        id="noTelp"
                        placeholder="No Telepon"
                        autoComplete="off"
                        value={formData.noTelp}
                        onChange={handleInputChange}
                      />

                      <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                        No Telepon
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
                  onClick={updateProfile}
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
};

export default Profile;
