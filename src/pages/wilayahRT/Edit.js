import React from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Edit() {
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
                      for="Username"
                      className="block text-sm font-medium text-black"
                    >
                      Wilayah RT
                    </label>

                    <select
                      id="tag"
                      name="tag"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Wilayah RT</option>
                      <option value="wilayah rt 1">wilayah rt 1</option>
                      <option value="wilayah rt 2">wilayah rt 2</option>
                      <option value="wilayah rt 3">wilayah rt 3</option>
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

export default Edit;
