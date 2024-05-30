import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import axios from "axios";

function DetailBerita() {
  const { id } = useParams();
  const [judulBerita, setJudulBerita] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [categoryBerita, setCategoryBerita] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBeritaById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/berita-rt/get/${id}`,
          authConfig
        );
        const data = response.data.data;
        setJudulBerita(data.judulBerita);
        setAuthor(data.author);
        setImage(data.image);
        setIsiBerita(data.isiBerita);
        setCategoryBerita(data.categoryBerita.category);
        setCreatedDate(data.createdDate);
      } catch (error) {
        setError("There was an error fetching the data!");
        console.error("There was an error fetching the data!", error);
      }
    };

    getBeritaById();
  }, [id]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <div className="bg-gray-300 h-full min-h-screen pb-5">
          <Navbar />
          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <div className="flex flex-col justify-between sm:flex-row items-center">
              <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
                Detail Berita
              </h1>
            </div>
            <hr className="border border-black" />

            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <div className="p-4 sm:p-6">
                  <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full mb-4">
                    <img
                      alt=""
                      src={image}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:py-24">
                    <h3 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-2">
                      {judulBerita}
                    </h3>
                    <p className="mt-4 text-gray-600 text-base mb-2">
                      {isiBerita}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">{createdDate}</p>
                    <p className="text-gray-500 text-sm mb-4">By {author}</p>
                    <p className="text-gray-500 text-sm mb-4">
                      Category: {categoryBerita}
                    </p>
                    <button
                      onClick={() => window.history.back()} // Menangani klik tombol untuk kembali
                      className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default DetailBerita;
