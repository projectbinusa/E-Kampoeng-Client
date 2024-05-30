import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useParams } from "react-router-dom";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";

function Edit() {
  const { id } = useParams();
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getCategoryBeritaById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/category-berita-rt/${id}`,
          authConfig
        );
        const data = response.data;
        setCategory(data.category);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    getCategoryBeritaById();
  }, [id]);

  const handleEditCategory = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:2001/e-kampoeng/api/category-berita-rt/${id}`,
        { category },
        authConfig
      );
      Swal.fire({
        title: "Success!",
        text: "Category has been updated successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        setTimeout(() => {
          window.location.href = "/category-berita";
        }, 1500);
      });
    } catch (error) {
      console.error("There was an error updating the category!", error);
      Swal.fire({
        title: "Error!",
        text: "There was an error updating the category.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <section className="bg-gray-300 h-screen w-full">
          <Navbar />
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <h1 className="text-xl text-center font-semibold mb-4">
                Edit Category Berita
              </h1>

              <div>
                <form onSubmit={handleEditCategory}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="Tag"
                      className="block text-sm font-medium text-black"
                    >
                      Category berita
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      id="tag"
                      name="tag"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="category berita"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-7">
                    <button
                      type="submit"
                      className="inline-block shrink-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default Edit;
