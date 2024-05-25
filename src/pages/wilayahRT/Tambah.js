import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { authConfig } from "../../utils/authConfig";

function Tambah() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [nomorRt, setNomorRt] = useState("");

  const Add = async (e) => {
    e.preventDefault();
    const req = {
      nomorRt: nomorRt,
    };
    try {
      await axios.post(
        "http://localhost:2001/e-kampoeng/api/wilayah-rt/add",
        req,
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
        navigate("/wilayah-rt");
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
                Tambah Wilayah RT
              </h1>

              <div>
                <form onSubmit={Add}>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Nomor"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor RT
                    </label>

                    <input
                      onChange={(e) => setNomorRt(e.target.value)}
                      value={nomorRt}
                      autoComplete="off"
                      type="number"
                      id="nomor_rt"
                      name="nomor_rt"
                      placeholder="nomor rt"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
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
