import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
function Edit() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [nomorRt, setNomorRt] = useState("");
  const [namaDusun, setWilayahRt] = useState("");
  const [nama_dusun, setNamaDusun] = useState([]);


  const getWilRW = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/wilayah-rw`,
        authConfig
      );
      setNamaDusun(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  useEffect(() => {
    getWilRW(0);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <section className="bg-gray-300 h-screen w-full">
          <Navbar />
          <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <h1 className="text-xl text-center font-semibold mb-4">
                 Edit Wilayah RT
              </h1>

              <div>
                <form>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Nomor"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor RT
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      id="nomor_rt"
                      name="nomor_rt"
                      placeholder="nomor rt"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-3">
                    <label
                      for="Wilayah"
                      className="block text-sm font-medium text-black"
                    >
                      Wilayah RW
                    </label>

                    <select
                      id="countries"
                      className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:float-right focus:ring-blue-500 focus:border-blue-500 block w-[100%] md:p-1.5 p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      onChange={(e) => setWilayahRt(e.target.value)} // Menggunakan setWilayahRt untuk menyimpan nilai yang dipilih
                    >
                      <option disabled selected>
                        Pilih Wilayah RW
                      </option>
                      {Array.isArray(nama_dusun) ? (
                        nama_dusun.map((dusun, idx) => (
                          <option key={idx} value={dusun.id}>
                            {dusun.namaDusun}
                          </option>
                        ))
                      ) : (
                        <option disabled>Pilihan tidak tersedia</option>
                      )}
                    </select>
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-16">
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
