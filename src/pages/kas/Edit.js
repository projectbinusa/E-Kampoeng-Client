import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { api_kas } from "../../utils/api";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};
function Edit() {
  const param = useParams();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [pemasukan, setPemasukan] = useState("");
  const [pengeluaran, setPengeluaran] = useState("");
  const [sisa_kas_bulan_lalu, setSisaKasBulanLalu] = useState("");
  const [sisa_kas_bulan_ini, setSisaKasBulanIni] = useState("");
  const [ket_pemasukan, setKetPemasukan] = useState("");
  const [ket_pengeluaran, setKetPengeluaran] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:2001/e-kampoeng/api/e-kas/" + param.id, authConfig)
      .then((response) => {
        const data = response.data.data;
        setPemasukan(data.pemasukan);
        setPengeluaran(data.pengeluaran);
        setSisaKasBulanLalu(data.sisa_kas_bulan_lalu);
        setSisaKasBulanIni(data.sisa_kas_bulan_ini);
        setKetPemasukan(data.ket_pemasukan);
        setKetPengeluaran(data.ket_pengeluaran);
      })
      .catch((error) => {
        alert("Terjadi Kesalahan " + error);
      });
  }, [param.id]);

  const Put = async (e) => {
    try {
      e.preventDefault();

      const req = {
        pemasukan: pemasukan,
        pengeluaran: pengeluaran,
        sisa_kas_bulan_lalu: sisa_kas_bulan_lalu,
        sisa_kas_bulan_ini: sisa_kas_bulan_ini,
        ket_pemasukan: ket_pemasukan,
        ket_pengeluaran: ket_pengeluaran,
      };

      await axios.put(
        `http://localhost:2001/e-kampoeng/api/e-kas/put/` + param.id,
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
        navigate("/e-kas");
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
                Edit E-Kas
              </h1>

              <div>
                <form onSubmit={Put}>
                  <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                      <label
                        htmlFor="Pemasukkan"
                        className="block text-sm font-medium text-black"
                      >
                        Pemasukkan
                      </label>
                      <input
                        autoComplete="off"
                        type="number"
                        id="pemasukkan"
                        name="pemasukkan"
                        value={pemasukan}
                        onChange={(e) => setPemasukan(e.target.value)}
                        placeholder="pemasukkan"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="Pengeluaran"
                        className="block text-sm font-medium text-black"
                      >
                        Pengeluaran
                      </label>
                      <input
                        autoComplete="off"
                        type="number"
                        id="pengeluaran"
                        name="pengeluaran"
                        value={pengeluaran}
                        onChange={(e) => setPengeluaran(e.target.value)}
                        placeholder="pengeluaran"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 mt-3">
                    <div className="col-span-3">
                      <label
                        htmlFor="Kas"
                        className="block text-sm font-medium text-black"
                      >
                        Sisa kas bulan lalu
                      </label>
                      <input
                        autoComplete="off"
                        type="number"
                        id="sisa_kas_bulan_lalu"
                        name="sisa_kas_bulan_lalu"
                        value={sisa_kas_bulan_lalu}
                        onChange={(e) => setSisaKasBulanLalu(e.target.value)}
                        placeholder="sisa kas bulan lalu"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-3">
                      <label
                        htmlFor="Kas"
                        className="block text-sm font-medium text-black"
                      >
                        Sisa kas bulan ini
                      </label>
                      <input
                        autoComplete="off"
                        type="number"
                        id="sisa_kas_bulan_ini"
                        name="sisa_kas_bulan_ini"
                        value={sisa_kas_bulan_ini}
                        onChange={(e) => setSisaKasBulanIni(e.target.value)}
                        placeholder="sisa kas bulan ini"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-6 gap-4 mt-3">
                    <div className="col-span-6 sm:col-span-3 mt-3">
                      <label
                        for="Kas"
                        className="block text-sm font-medium text-black"
                      >
                        Keterangan pemasukan
                      </label>

                      <textarea
                        autoComplete="off"
                        type="text"
                        id="keterangan_pemasukan"
                        name="keterangan_pemasukan"
                        value={ket_pemasukan}
                        onChange={(e) => setKetPemasukan(e.target.value)}
                        placeholder="keterangan pemasukan"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-3">
                      <label
                        for="Kas"
                        className="block text-sm font-medium text-black"
                      >
                        Keterangan pengeluaran
                      </label>

                      <textarea
                        autoComplete="off"
                        type="textArea"
                        id="keterangan_pengeluaran"
                        name="keterangan_pengeluaran"
                        value={ket_pengeluaran}
                        onChange={(e) =>
                          setKetPengeluaran(e.target.value)
                        }
                        placeholder="keterangan pengeluaran"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
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
