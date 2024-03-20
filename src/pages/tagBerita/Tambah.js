import React, { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { api_tag } from "../../utils/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function Tambah() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [tags, setTags] = useState("");

  const Add = async (e) => {
    e.preventDefault();
    e.persist();

    const req = {
      tags: tags,
    };
    try {
      await axios.post(api_tag + "add", req, authConfig);
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Sukses Menambahkan",
        showConfirmButton: false,
        timer: 2500,
      });
      setTimeout(() => {
        navigate("/tag-berita");
        window.location.reload();
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <section className="bg-gray-300 h-screen w-full">
          <Navbar />
          <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <h1 className="text-xl text-center font-semibold mb-4">
                Tambah Tag Berita
              </h1>

              <div>
                <form onSubmit={Add}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      Tag Berita
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      id="tag"
                      name="tags"
                      onChange={(e) => setTags(e.target.value)}
                      value={tags}
                      placeholder="tag berita"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-7">
                    <button className="inline-block shrink-0 rounded-md border border-[#776B5D] bg-[#776B5D] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#776B5D] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]">
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

export default Tambah;
