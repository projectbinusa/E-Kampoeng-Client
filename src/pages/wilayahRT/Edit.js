import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function Edit() {
  const [nomorRt, setNomorRt] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWilayah = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/wilayah-rt/${id}`,
          authConfig
        );
        setNomorRt(response.data.data.nomorRt);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchWilayah();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `http://localhost:2001/e-kampoeng/api/wilayah-rt/${id}`,
        { nomorRt },
        authConfig
      );
      Swal.fire({
        title: "Sukses!",
        text: "Wilayah RT berhasil diperbarui.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/wilayah-rt");
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Gagal!", "Terjadi kesalahan saat memperbarui data.", "error");
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
                Edit Wilayah RT
              </h1>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="nomor_rt"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor RT
                    </label>
                    <input
                      autoComplete="off"
                      type="text"
                      id="nomor_rt"
                      name="nomor_rt"
                      value={nomorRt}
                      onChange={(e) => setNomorRt(e.target.value)}
                      placeholder="Nomor RT"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-16">
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
