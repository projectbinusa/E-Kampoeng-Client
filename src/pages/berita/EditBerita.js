import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import axios from "axios";

function EditBerita() {
  const { id } = useParams();
  const [judulBerita, setJudulBerita] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [isiBerita, setIsiBerita] = useState("");
  const [categoryBerita, setCategoryBerita] = useState("");
  const [categories, setCategories] = useState([]);
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
        setCategoryBerita(data.categoryBerita.id); // Use category ID
        setCreatedDate(data.createdDate);
      } catch (error) {
        setError("There was an error fetching the data!");
        console.error("There was an error fetching the data!", error);
      }
    };

    const getCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:2001/e-kampoeng/api/category-berita-rt/all",
          authConfig
        );
        setCategories(response.data.content);
      } catch (error) {
        setError("There was an error fetching the categories!");
        console.error("There was an error fetching the categories!", error);
      }
    };

    getBeritaById();
    getCategories();
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
                Edit Berita
              </h1>
            </div>
            <hr className="border border-black" />

            {error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              <div>
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                  <div className="mx-auto max-w-lg text-center">
                    <h1 className="text-2xl font-bold sm:text-3xl">
                      Silahkan Edit Berita Anda!
                    </h1>
                  </div>

                  <form
                    action="#"
                    className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                  >
                    <div>
                      <label htmlFor="judul" className="sr-only">
                        Judul Berita
                      </label>

                      <div className="relative">
                        <input
                          value={judulBerita}
                          onChange={(e) => setJudulBerita(e.target.value)}
                          type="text"
                          style={{ borderColor: "#D10363" }}
                          className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Judul"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="author" className="sr-only">
                        Author
                      </label>

                      <div className="relative">
                        <input
                          value={author}
                          onChange={(e) => setAuthor(e.target.value)}
                          type="text"
                          style={{ borderColor: "#D10363" }}
                          className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Author"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="image" className="sr-only">
                        Image
                      </label>

                      <div className="relative">
                        <input
                          type="file"
                          style={{ borderColor: "#D10363" }}
                          className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Image"
                          onChange={(e) => setImage(e.target.files[0])}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="isiBerita" className="sr-only">
                        Isi Berita
                      </label>

                      <div className="relative">
                        <textarea
                          value={isiBerita}
                          onChange={(e) => setIsiBerita(e.target.value)}
                          style={{ borderColor: "#D10363" }}
                          className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                          placeholder="Enter Isi Berita"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="category" className="sr-only">
                        Category
                      </label>

                      <div className="relative">
                        <select
                          value={categoryBerita}
                          onChange={(e) => setCategoryBerita(e.target.value)}
                          style={{ borderColor: "#D10363" }}
                          className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                        >
                          <option value="">Select Category</option>
                          {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.category}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className="inline-block rounded bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                      >
                        Simpan
                      </button>
                    </div>
                  </form>
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

export default EditBerita;
