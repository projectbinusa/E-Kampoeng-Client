import React, { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function Tambah() {
  const [jenis_surat, setJenis_surat] = useState("");
  const [jenis_bantuan, setJenis_bantuan] = useState("");
  const navigate = useNavigate();

  const addSurat = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:8000/e-kampoeng/api/e-soerat?jenis_bantuan=${jenis_bantuan}&jenis_surat=${jenis_surat}`,
        null,
        authConfig
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Sukses Menambahkan",
          showConfirmButton: false,
          timer: 2500,
        });

        navigate("/soerat");
      } else {
        console.error("Gagal menambahkan surat.");
      }
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
                {" "}
                Tambah E Soerat
              </h1>

              <div>
                <form onSubmit={addSurat}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="jenis_surat"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Surat
                    </label>

                    <select
                      id="jenis_surat"
                      name="jenis_surat"
                      // value={jenis_surat}
                      onChange={(e) => setJenis_surat(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Surat</option>
                      <option value="pengantar"> Pengantar</option>
                      <option value="nikah"> Nikah</option>
                      <option value="kematian"> Kematian</option>
                      <option value="pembuatan_akte"> Pembuatan Akte</option>
                      <option value="pembuatan_Ktp"> Pembuatan Ktp</option>
                      <option value="pembuatan_KK_baru">
                        {" "}
                        Pembuatan KK baru
                      </option>
                      <option value="bantuan">Bantuan</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-4">
                    <label
                      htmlFor="jenis_bantuan"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Bantuan
                    </label>

                    <select
                      id="jenis_bantuan"
                      name="jenis_bantuan"
                      // value={jenis_bantuan}
                      onChange={(e) => setJenis_bantuan(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Bantuan</option>
                      <option value="KIP"> KIP</option>
                      <option value="Kis"> Kis</option>
                      <option value="Surat domisili"> Surat domisili</option>
                    </select>
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
