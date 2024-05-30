import React, { useState, useEffect } from "react";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";

function BeritaByCategory() {
  const role = localStorage.getItem("role");
  const { id } = useParams();
  const [beritaList, setBeritaList] = useState([]);

  useEffect(() => {
    const getBeritaByCategory = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/berita-rt/by-category?categoryId=${id}`,
          authConfig
        );
        setBeritaList(response.data.data.content);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };
    getBeritaByCategory();
  }, [id]);

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
            authConfig
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
                  Category Berita
                  {beritaList.length > 0
                    ? `(${beritaList[0].categoryBerita.category})`
                    : `(Tidak Ada)`}
                </h1>
              </div>
              <hr className="border border-black" />

              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {beritaList.length > 0 ? (
                    beritaList.map((berita) => (
                      <article
                        key={berita.id}
                        className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                      >
                        <img
                          alt={berita.judulBerita}
                          src={berita.image}
                          className="h-56 w-full object-cover"
                        />

                        <div className="p-4 sm:p-6">
                          <a
                            href="#"
                            className="text-lg font-medium text-gray-900"
                          >
                            {berita.judulBerita}
                          </a>

                          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            {berita.isiBerita}
                          </p>

                          <div className="flex mt-8 space-x-4">
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
                    ))
                  ) : (
                    <p className="text-center text-gray-500">
                      Tidak Ada Berita Di Category Ini!!
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default BeritaByCategory;
