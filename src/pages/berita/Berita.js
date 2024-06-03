import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Berita() {
  const role = localStorage.getItem("role");
  const [isModalOpen, setModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [beritaList, setBeritaList] = useState([]);
  const [judulBerita, setJudulBerita] = useState("");
  const [author, setAuthor] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(
          "http://localhost:2001/e-kampoeng/api/berita-rt/terbaru",
          authConfig
        );
        const data = await response.json();
        setBeritaList(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "http://localhost:2001/e-kampoeng/api/category-berita-rt/terbaru",
          authConfig
        );
        const data = await response.json();
        setCategories(data.content);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchBerita();
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("author", author);
    formData.append("judulBerita", judulBerita);
    formData.append("isiBerita", isiBerita);
    formData.append("categoryId", categoryId);

    try {
      await axios.post(
        "http://localhost:2001/e-kampoeng/api/berita-rt/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${
              authConfig.headers.Authorization.split(" ")[1]
            }`,
          },
        }
      );
      setModalOpen(false);
      Swal.fire({
        title: "Berhasil!",
        text: "Berita berhasil ditambahkan.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        window.location.reload();
      });
    } catch (error) {
      setError("There was an error adding the news!");
      console.error("There was an error adding the news!", error);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:2001/e-kampoeng/api/berita-rt/${id}`,
            {
              headers: {
                Authorization: `Bearer ${
                  authConfig.headers.Authorization.split(" ")[1]
                }`,
              },
            }
          );
          Swal.fire({
            title: "Deleted!",
            text: "Berita berhasil dihapus.",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            window.location.reload();
          });
        } catch (error) {
          console.error("There was an error deleting the news!", error);
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
                  Berita Terbaru
                </h1>
                <div className="m-30">
                  {role === "ROLE_RT" && (
                    <button
                      onClick={openModal}
                      className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                    >
                      Tambah
                    </button>
                  )}
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
                        Jenis Berita
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
                            to="/berita-terbaru"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                            role="menuitem"
                          >
                            Berita Terbaru
                          </Link>
                          <Link
                            to="/semua-berita"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                            role="menuitem"
                          >
                            Semua Berita
                          </Link>
                          <Link
                            to="/category-berita"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#D10363] hover:text-white"
                            role="menuitem"
                          >
                            Kategori Berita
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <hr className="border border-black" />

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {beritaList.map((berita) => (
                    <article
                      key={berita.id}
                      className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                      <img
                        alt=""
                        src={berita.image}
                        className="h-56 w-full object-cover"
                      />

                      <div className="p-4 sm:p-6">
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            Swal.fire({
                              title: "Detail Berita",
                              text: `Judul: ${berita.judulBerita}`,
                              icon: "info",
                              confirmButtonText: "OK",
                            });
                          }}
                          className="text-lg font-medium text-gray-900"
                        >
                          {berita.judulBerita}
                        </a>

                        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                          {berita.isiBerita}
                        </p>

                        <div className="flex mt-8 space-x-4">
                          {role === "ROLE_RT" && (
                            <Link
                              to={`/edit-berita/${berita.id}`}
                              className="text-gray-500 hover:text-yellow-500"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="size-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                />
                              </svg>
                            </Link>
                          )}
                          <Link
                            to={`/detail-berita/${berita.id}`}
                            className="text-gray-500 hover:text-indigo-600"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </Link>
                          {role === "ROLE_RT" && (
                            <button
                              onClick={() => handleDelete(berita.id)}
                              className="text-gray-500 hover:text-red-600"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M1 7h22"
                                />
                              </svg>
                            </button>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>

      {/* Modal tambah Berita */}
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
                    Tambah Berita
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mt-2 sm:w-full">
                      <label
                        htmlFor="judulBerita"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <input
                          type="text"
                          id="judulBerita"
                          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                          placeholder="Judul Berita"
                          autoComplete="off"
                          value={judulBerita}
                          onChange={(e) => setJudulBerita(e.target.value)}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Judul Berita
                        </span>
                      </label>
                    </div>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="author"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <input
                          type="text"
                          id="author"
                          className="peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0"
                          placeholder="Author"
                          autoComplete="off"
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Author
                        </span>
                      </label>
                    </div>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="isiBerita"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <textarea
                          className="peer h-40 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          id="isiBerita"
                          placeholder="Isi Berita"
                          autoComplete="off"
                          value={isiBerita}
                          onChange={(e) => setIsiBerita(e.target.value)}
                        ></textarea>
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Isi Berita
                        </span>
                      </label>
                    </div>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="categoryId"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <select
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          id="categoryId"
                          value={categoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                        >
                          <option value="" disabled selected>
                            Pilih Kategori
                          </option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.category}
                            </option>
                          ))}
                        </select>
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Kategori
                        </span>
                      </label>
                    </div>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="file"
                        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                      >
                        <input
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          type="file"
                          id="file"
                          placeholder="Upload file"
                          autoComplete="off"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                          Upload File
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
                    {error && <p className="mt-4 text-red-500">{error}</p>}
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

export default Berita;
