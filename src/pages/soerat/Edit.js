import React from "react";

function Edit() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
            <h1 className="text-xl text-center font-semibold mb-4">
              {" "}
              Edit E Soerat
            </h1>

            <div>
            <form>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Username"
                    className="block text-sm font-medium text-black"
                  >
                    Jenis Surat
                  </label>

                  <select
                    id="jenis"
                    name="jenis"
                    className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                  >
                    <option value="">Pilih Jenis Surat</option>
                    <option value="pengantar"> Pengantar</option>
                    <option value="nikah"> Nikah</option>
                    <option value="kematian"> Kematian</option>
                    <option value="pembuatan akte"> Pembuatan Akte</option>
                    <option value="pembuatan Ktp"> Pembuatan Ktp</option>
                    <option value="pembuatan KK baru"> Pembuatan KK baru</option>
                    <option value="bantuan">Bantuan</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <label
                    for="Username"
                    className="block text-sm font-medium text-black"
                  >
                    Jenis Bantuan
                  </label>

                  <select
                    id="jenis"
                    name="jenis"
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
    </div>
  );
}

export default Edit;
