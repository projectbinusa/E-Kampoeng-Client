import React, { useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";

function Tambah() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <div className="block w-full">
        <section className="bg-gray-100 h-screen w-full">
          {/* <Navbar /> */}
          <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <h1 className="text-xl text-center font-semibold mb-4">
                Tambah Warga
              </h1>

              <div>
                <form
                  style={{
                    maxHeight: "22rem",
                    overflowY: "auto",
                    padding: "5px",
                  }}
                >
                  <div class="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        htmlFor="nama"
                        className="block text-sm font-medium text-black"
                      >
                        Nama
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="nama"
                        name="nama"
                        placeholder="nama"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-black"
                      >
                        Email
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="email"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        htmlFor="nama_ayah"
                        className="block text-sm font-medium text-black"
                      >
                        Nama Ayah
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="nama_ayah"
                        name="nama_ayah"
                        placeholder="nama ayah"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        htmlFor="nama_ibu"
                        className="block text-sm font-medium text-black"
                      >
                        Nama Ibu
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="nama_ibu"
                        name="nama_ibu"
                        placeholder="nama ibu"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        NIK
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="nik"
                        name="nik"
                        placeholder="nik"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        No KK
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="no_kk"
                        name="no_kk"
                        placeholder="no kk"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        Agama
                      </label>

                      <div>
                        <label
                          for="HeadlineAct"
                          class="block text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Headliner{" "}
                        </label>

                        <select
                          name="HeadlineAct"
                          id="HeadlineAct"
                          class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                        >
                          <option value="">Please select</option>
                          <option value="JM">John Mayer</option>
                          <option value="SRV">Stevie Ray Vaughn</option>
                          <option value="JH">Jimi Hendrix</option>
                          <option value="BBK">B.B King</option>
                          <option value="AK">Albert King</option>
                          <option value="BG">Buddy Guy</option>
                          <option value="EC">Eric Clapton</option>
                        </select>
                      </div>

                      <select
                        id="agama"
                        name="agama"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Agama</option>
                        <option value="Islam">Islam</option>
                        <option value="Kristen">Kristen</option>
                        <option value="Katolik">Katolik</option>
                        <option value="Hindu">Hindu</option>
                        <option value="Budha">Budha</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        No Anak
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="no_anak"
                        name="no_anak"
                        placeholder="no anak"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        No BPJS
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="no_bpjs"
                        name="no_bpjs"
                        placeholder="no bpjs"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        No Passport
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="no_passport"
                        name="no_passport"
                        placeholder="no passport"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        No Telepon
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="no_telepon"
                        name="no_telepon"
                        placeholder="no telepon"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>

                    <div class="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        class="block text-sm font-medium text-black"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        id="tanggal_lahir"
                        name="tanggal_lahir"
                        placeholder="tanggal lahir"
                        class="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Tempat Lahir
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="tempat_lahir"
                        name="tempat_lahir"
                        placeholder="tempat lahir"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Panjang Lahir
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="panjang_lahir"
                        name="panjang_lahir"
                        placeholder="panjang lahir"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Berat Lahir
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="berat_lahir"
                        name="berat_lahir"
                        placeholder="berat lahir"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Jenis Kelamin
                      </label>

                      <select
                        id="jenis_kelamin"
                        name="jenis_kelamin"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Pendidikan Tempuh
                      </label>

                      <select
                        id="pendidikan_tempuh"
                        name="endidikan_tempuh"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Pendidikan Tempuh</option>
                        <option value="TK / Paud">TK / Paud</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SLTA">SLTA</option>
                        <option value="PT">PT</option>
                      </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Tanggal Perkawinan
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="tanggal_perkawinan"
                        name="tanggal_perkawinan"
                        placeholder="tanggal perkawinan"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Status Perkawinan
                      </label>

                      <select
                        id="agama"
                        name="agama"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Status Perkawinan</option>
                        <option value="Belum Kawin">Belum Kawin</option>
                        <option value="Kawin">Kawin</option>
                        <option value="Cerai">Cerai</option>
                        <option value="Cerai Mati">Cerai Mati</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Jenis KB
                      </label>

                      <select
                        id="jenis_kb"
                        name="jenis_kb"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Jenis KB</option>
                        <option value="Pil">Pil</option>
                        <option value="Suntik">Suntik</option>
                        <option value="IUD">IUD</option>
                        <option value="Kondom">Kondom</option>
                        <option value="MOW/P Steril">MOW/P Steril</option>
                        <option value="Susuk KB">Susuk KB</option>
                        <option value="Sterilisasi Wanita">
                          Sterilisasi Wanita
                        </option>
                        <option value="Sterilisasi Pria">
                          Sterilisasi Pria
                        </option>
                        <option value="Tidak Menggunakan">
                          Tidak Menggunakan
                        </option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Status Dalam Keluarga
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="status_dalam_keluarga"
                        name="status_dalam_keluarga"
                        placeholder="status dalam keluarga"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Status Kependudukan
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="status_kependudukan"
                        name="status_kependudukan"
                        placeholder="status kependudukan"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Alamat
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="alamat"
                        name="alamat"
                        placeholder="alamat"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Alamat Sebelumnya
                      </label>

                      <input
                        autoComplete="off"
                        type="text"
                        id="alamat_sebelumnya"
                        name="alamat_sebelumnya"
                        placeholder="alamat sebelumnya"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      />
                    </div>
                  </div>

                  <div class="grid grid-cols-6 gap-4">
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Golongan Darah
                      </label>

                      <select
                        id="agama"
                        name="agama"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Golongan Darah</option>
                        <option value="A +">A +</option>
                        <option value="A -">A -</option>
                        <option value="B +">B +</option>
                        <option value="B -">B -</option>
                        <option value="O + ">O + </option>
                        <option value="O - ">O - </option>
                        <option value="AB + ">AB + </option>
                        <option value="AB - ">AB - </option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Jenis Asuransi
                      </label>

                      <select
                        id="jenis_asuransi"
                        name="jenis_asuransi"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Jenis Asuransi</option>
                        <option value="Tidak / Belum Punya">
                          Tidak / Belum Punya
                        </option>
                        <option value="BPJS Bantuan Iuran">
                          BPJS Bantuan Iuran
                        </option>
                        <option value="BPJS Non Bantuan Iuran">
                          BPJS Non Bantuan Iuran
                        </option>
                        <option value="BPJS Bantuan Daerah">
                          BPJS Bantuan Daerah
                        </option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Kesesuaian Tempat
                      </label>

                      <select
                        id="kesesuaian_tempat"
                        name="kesesuaian_tempat"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Kesesuaian Tempat</option>
                        <option value="Layak">Layak</option>
                        <option value="Tidak Layak">Tidak Layak</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Sumber Air
                      </label>

                      <select
                        id="sumber_air"
                        name="sumber_air"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Sumber Air</option>
                        <option value="PDAM">PDAM</option>
                        <option value="Sumur">Sumur</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>
                    <div className="col-span-6 sm:col-span-3 mt-4">
                      <label
                        for="Username"
                        className="block text-sm font-medium text-black"
                      >
                        Cacat
                      </label>

                      <select
                        id="cacat"
                        name="cacat"
                        className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                      >
                        <option value="">Pilih Cacat</option>
                        <option value="Cacat Fisik">Cacat Fisik</option>
                        <option value="Cacat Netra / Buta">
                          Cacat Netra / Buta
                        </option>
                        <option value="Cacat Rungu / Wicara">
                          Cacat Rungu / Wicara
                        </option>
                        <option value="Cacat Mental / Jiwa">
                          Cacat Mental / Jiwa
                        </option>
                        <option value="Cacat Mental dan Jiwa">
                          Cacat Mental dan Jiwa
                        </option>
                        <option value="Tidak Cacat">Tidak Cacat</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
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
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Tambah;
