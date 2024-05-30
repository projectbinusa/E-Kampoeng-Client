import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { authConfig } from "../../utils/authConfig";

function CategoryBerita() {
  const [categories, setCategories] = useState([]);
  const role = localStorage.getItem("role");
  const [isModalOpen, setModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setNewCategory("");
  };

  const getAll = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/category-berita/all`,
        authConfig
      );
      setCategories(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  const handleDelete = async (id) => {
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
          await axios.delete(
            `http://localhost:2001/e-kampoeng/api/category-berita-rt/${id}`,
            authConfig
          );
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
    getAll();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:2001/e-kampoeng/api/category-berita-rt",
        { category: newCategory },
        authConfig
      );
      closeModal();
      Swal.fire({
        title: "Berhasil!",
        text: "Berita berhasil ditambahkan.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      console.error("There was an error adding the news!", error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <div className="bg-gray-300 h-full min-h-screen pb-5">
          <Navbar />

          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <span className="space-y-3">
              <div className="flex flex-col justify-between sm:flex-row items-center">
                <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
                  Table Category Berita
                </h1>
                {role === "ROLE_RT" && (
                  <button
                    onClick={openModal}
                    className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                  >
                    Tambah
                  </button>
                )}
              </div>
              <hr className="border border-black" />
              {/* <div className="flex flex-col justify-between sm:flex-row items-center">
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
              </div> */}
            </span>

            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                  <tr className="text-left">
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                      Category Berita
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {categories.map((row, idx) => (
                    <tr key={row.id} className="odd:bg-gray-50 text-left">
                      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {row.category}
                      </td>
                      <td className="whitespace-nowrap flex justify-center gap-3 px-4 py-2 text-gray-700">
                        <Link
                          to={`/category-berita/berita/` + row.id}
                          className="inline-block rounded bg-[#FFBF00] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                          title="BeritaBycategory"
                        >
                          Berita
                        </Link>
                        {role === "ROLE_RT" && (
                          <Link
                            to={`/edit-category-berita/` + row.id}
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
                        )}
                        {role === "ROLE_RT" && (
                          <button
                            onClick={() => handleDelete(row.id)}
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
                          </button>
                        )}
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
      {/* Modal tambah Category Berita */}
      {isModalOpen && (
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 ubuntu">
                    Tambah Category Berita
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-2 sm:w-full">
                      <label
                        htmlFor="category"
                        className="relative block rounded-md border border-black-200 shadow-sm mt-10"
                      >
                        <input
                          type="text"
                          id="category"
                          className="mt-2 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                          placeholder="category"
                          autoComplete="off"
                          value={newCategory}
                          onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Judul Berita
                        </span>
                      </label>
                    </div>

                    <div className="mt-8 flex flex-row-reverse">
                      <button
                        type="submit"
                        className="ml-3 inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363]"
                      >
                        Tambah
                      </button>
                      <button
                        type="button"
                        className="inline-block rounded bg-gray-300 px-4 py-2 text-sm font-medium text-black transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363]"
                        onClick={closeModal}
                      >
                        Batal
                      </button>
                    </div>
                    {/* {error && <p className="mt-4 text-red-500">{error}</p>} */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryBerita;
