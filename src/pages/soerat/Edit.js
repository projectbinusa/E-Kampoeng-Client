import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { api_soerat } from "../../utils/api";
import Swal from "sweetalert2";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    // 'Content-Type': 'multipart/form-data'
  },
};
function Edit() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [jenis_bantuan, setJenisBantuan] = useState("");
  const [jenis_surat, setJenisSurat] = useState("");

  useEffect(() => {
    axios
      .get(api_soerat + param.id, authConfig)
      .then((response) => {
        const soerat = response.data.data;
        setJenisBantuan(soerat.jenis_bantuan);
        setJenisSurat(soerat.jenis_surat);
      })
      .catch((error) => {
        alert("Terjadi Kesalahan " + error);
      });
  }, [param.id]);

  const Put = async (e) => {
    try {
      e.preventDefault();

      // Pastikan param.id, jenis_surat, dan jenis_bantuan telah didefinisikan dan valid
      if (!param.id || !jenis_surat || !jenis_bantuan) {
        console.error(
          "param.id, jenis_surat, atau jenis_bantuan tidak didefinisikan atau tidak valid."
        );
        return;
      }

      const req = {
        jenis_surat: jenis_surat,
        jenis_bantuan: jenis_bantuan,
      };

      await axios.put(
        `http://localhost:2001/e-kampoeng/api/e-soerat/` + param.id,
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
        navigate("/soerat");
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
                {" "}
                Edit E Soerat
              </h1>

              <div>
                <form onSubmit={Put}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Surat
                    </label>
                    <input
                      type="text"
                      id="surat"
                      name="surat"
                      value={jenis_surat}
                      onChange={(e) => setJenisSurat(e.target.value)}
                      placeholder="Masukkan Jenis Surat"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />

                    {/* <select
                      id="surat"
                      name="surat"
                      onChange={(e) => setJenisSurat(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Surat</option>
                      <option value="pengantar">Pengantar</option>
                      <option value="nikah">Nikah</option>
                      <option value="kematian">Kematian</option>
                      <option value="pembuatan_akte">Pembuatan Akte</option>
                      <option value="pembuatan_Ktp">Pembuatan Ktp</option>
                      <option value="pembuatan_KK_baru">
                        Pembuatan KK baru
                      </option>
                      <option value="bantuan">Bantuan</option>
                    </select> */}
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-4">
                    <label
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Bantuan
                    </label>

                    <input
                      type="text"
                      id="surat"
                      name="surat"
                      value={jenis_bantuan}
                      onChange={(e) => setJenisBantuan(e.target.value)}
                      placeholder="Masukkan Jenis Surat"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />

                    {/* <select
                      id="bantuan"
                      name="bantuan"
                      onChange={setJenisBantuan}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Bantuan</option>
                      <option value="KIP"> KIP</option>
                      <option value="Kis"> Kis</option>
                      <option value="Surat domisili"> Surat domisili</option>
                    </select> */}
                  </div>

                  <div className="sm:flex sm:items-center sm:gap-4 mt-7">
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

export default Edit;
