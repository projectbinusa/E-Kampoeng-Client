import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { base_api } from "../../utils/api";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function Tambah() {
  const [warga_id, setWargaId] = useState("");
  const [organisasi_id, setOrganisasiId] = useState("");
  const [warga, setWarga] = useState([]);
  const [organisasi, setOrganisasi] = useState([]);
  const navigate = useNavigate();
  const size = 5;
  const [pages, setPages] = useState(0);

  const addWargaOrganisasi = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${base_api}/organisasi-warga`,
        {
          warga_id: warga_id,
          organisasi_id: organisasi_id,
        },
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

  const getAllOrganisasi = async (page) => {
    try {
      const response = await axios.get(
        `${base_api}/organisasi?page=0&size=${size}`,
        authConfig
      );
      setPages(response.data.data.totalPages);
      setOrganisasi(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  const getAllWarga = async () => {
    try {
      const response = await axios.get(
        `http://localhost:2001/e-kampoeng/api/warga`,
        authConfig
      );
      setWarga(response.data.data.content);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  useEffect(() => {
    getAllOrganisasi();
    getAllWarga();
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
                {" "}
                Tambah Warga Organisasi
              </h1>

              <div>
                <form onSubmit={addWargaOrganisasi}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="nama"
                      className="block text-sm font-medium text-black">
                      Nama Warga
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        id="warga"
                        placeholder="warga"
                        required
                        list="warga-options"
                        onChange={(e) => setWargaId(e.target.value)}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      />
                      <datalist id="warga-options">
                        {warga.map((data, idx) => (
                          <option key={idx} value={data.id}>
                            {data.nama}
                          </option>
                        ))}
                      </datalist>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3 mt-4">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black">
                      Nama Organisasi
                    </label>

                    <div className="relative">
            <input
              type="text"
              id="organisasi"
              placeholder="organisasi"
              required
              list="organisasi-options"
              onChange={(e) => setOrganisasiId(e.target.value)}
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
            <datalist id="organisasi-options">
              {organisasi.map((data, idx) => (
                <option key={idx} value={data.id}>
                  {data.nama_organisasi}
                </option>
              ))}
            </datalist>
          </div>
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-7">
                    <button type="submit" className="inline-block shrink-0 rounded-md border border-[#776B5D] bg-[#776B5D] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#776B5D] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]">
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
