import React from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Tambah() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <section className="bg-gray-300 h-screen w-full">
          <Navbar />
          <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <h1 className="text-xl text-center font-semibold mb-4">
                Tambah Wilayah RW
              </h1>

              <div>
                <form>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      for="Nama"
                      className="block text-sm font-medium text-black"
                    >
                      Nama Dusun
                    </label>

                    <input
                      autoComplete="off"
                      type="text"
                      id="nama_dusun"
                      name="nama_dusun"
                      placeholder="nama dusun"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 mt-3">
                    <label
                      for="Nomor"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor RW
                    </label>

                    <input
                      autoComplete="off"
                      type="number"
                      id="nomor_rw"
                      name="nomor_rw"
                      placeholder="nomor rw"
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