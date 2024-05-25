import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
function Tambah() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const [nomorRt, setNomorRt] = useState("");
  const [nama, setNama] = useState([]);
  const [nomorRt, setNomorRt] = useState([]);

  const Add = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:2001/e-kampoeng/api/rt/tambah-kepala?wargaId=${getWarga}&wilayahRTId=${getWilRT}`,
        authConfig
      );
      setShow(false);
      Swal.fire({
        icon: "success",
        title: "Sukses Menambahkan",
        showConfirmButton: false,
        timer: 2500,
      });
      setTimeout(() => {
        navigate("/rt");
        window.location.reload();
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const getWarga = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/warga`,
        authConfig
      );
      setNama(response.data.data);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };
  const getWilRT = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/wilayah-rt`,
        authConfig
      );
      setNomorRt(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  useEffect(() => {
    getWarga(0);
    getWilRT(0);
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
                Tambah Data Rt
              </h1>

              <div>
                <form onSubmit={Add}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      No RT
                    </label>

                    <select
                      id="countries"
                      className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:float-right focus:ring-blue-500 focus:border-blue-500 block w-[100%] md:p-1.5 p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      onChange={(e) => setNomorRt(e.target.value)}
                      value={nomorRt}
                    >
                      <option disabled>Pilih no Rt</option>
                      {Array.isArray(nomorRt) ? (
                        nomorRt.map((nomor, idx) => (
                          <option key={idx} value={nomor.id}>
                            {nomor.nomorRt}
                          </option>
                        ))
                      ) : (
                        <option disabled>Pilihan tidak tersedia</option>
                      )}
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-4">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      Warga Id
                    </label>

                    <select
                      id="countries"
                      className="mt-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:float-right focus:ring-blue-500 focus:border-blue-500 block w-[100%] md:p-1.5 p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                      onChange={(e) => setNama(e.target.value)}
                      value={nama}
                    >
                      <option disabled>Pilih nama warga</option>
                      {Array.isArray(nama) ? (
                        nama.map((dusun, idx) => (
                          <option key={idx} value={dusun.id}>
                            {dusun.nama}
                          </option>
                        ))
                      ) : (
                        <option disabled>Pilihan tidak tersedia</option>
                      )}
                    </select>
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-16">
                    <button className="inline-block shrink-0 rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]">
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
