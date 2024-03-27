import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
function Edit() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [tags, setTags] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/e-kampoeng/api/category-berita/get/" + param.id, authConfig)
  //     .then((response) => {
  //       const data = response.data.data;
  //       setCategory(data.category);
  //     })
  //     .catch((error) => {
  //       alert("Terjadi Kesalahan " + error);
  //     });
  // }, [param.id]);

  const Put = async (e) => {
    try {
      e.preventDefault();

      // if (!param.id || !tags) {
      //   console.error(
      //     "param.id, tags, tidak didefinisikan atau tidak valid."
      //   );
      //   return;
      // }

      const req = {
        tags: tags,
      };

      await axios.put(
        `http://localhost:2001/e-kampoeng/api/tags-berita/put/` + param.id,
        req,
        authConfig
      );

      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Berhasil Mengedit",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        navigate("/tag-berita");
        window.location.reload();
      }, 1500);
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
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
                Edit Category Berita
              </h1>

              <div>
                <form onSubmit={Put}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Tag"
                      className="block text-sm font-medium text-black"
                    >
                      Category berita
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      id="tag"
                      name="tag"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="tags berita"
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

export default Edit;
