import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import FemaleAvatar from "../../assets/FemaleAvatar.png";
import MaleAvatar from "../../assets/MaleAvatar.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api_warga } from "../../utils/api";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

const DetailWarga = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [warga, setWarga] = useState({});

  const getDataWarga = async () => {
    try {
      const response = await axios.get(`${api_warga}/${param.id}`, authConfig);
      setWarga(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataWarga();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="block w-full">
        <div className="bg-gray-300 h-full pb-5">
          <Navbar />

          <div className="bg-white m-5 p-5 rounded-xl space-y-5">
            <span className="space-y-3">
              <div className="flex md:flex-row md:justify-between flex-col items-center space-y-3 mx-5 page-header">
                <h1 className="text-xl text-center font-semibold play">
                  Detail Warga
                </h1>
                <nav
                  aria-label="Breadcrumb"
                  className="flex items-center ubuntu">
                  <ol class="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                      <Link
                        to={"/"}
                        class="block transition hover:text-gray-700">
                        <span class="sr-only">Home</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </Link>
                    </li>

                    <li class="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </li>

                    <li>
                      <Link
                        to={"/warga"}
                        class="block transition hover:text-gray-700">
                        Warga
                      </Link>
                    </li>

                    <li class="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </li>

                    <li>
                      <Link
                        to={"/detail-warga/1"}
                        class="block transition hover:text-gray-700">
                        Detail Warga
                      </Link>
                    </li>
                  </ol>
                </nav>
              </div>
              <hr className="border border-black" />
            </span>
            <span className="flex flex-col justify-center items-center avatar">
              <img
                src={
                  warga.jenis_kelamin == "Laki-laki" ? MaleAvatar : FemaleAvatar
                }
                alt="user-avatar"
                className="h-64 w-64"
              />
              <div className="flex flex-col items-center mt-4">
                <b className="mb-1 text-xl play">NIK: {warga.nik}</b>
                <p className="text-xs text-gray-400 italic ubuntu">
                  <span className="font-semibold">Terdaftar pada:</span> 26
                  Januari 2024 20:46:18
                </p>
                <p className="text-xs text-gray-400 italic ubuntu">
                  <span className="font-semibold">Terakhir diubah:</span> 06
                  Februari 2024 23:33:44
                </p>
              </div>
            </span>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left border-collapse border border-red-500 rounded-full">
                <tbody class="divide-y divide-gray-200">
                  {/* Data Diri START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      DATA DIRI
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Dasar
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      HIDUP{/* {warga.status_dasar} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Lengkap
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.nama}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nomor Kartu Keluarga
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.no_kk}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Hubungan Dalam Keluarga
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.status_dalam_keluarga == "kepala_keluarga"
                        ? "KEPALA KELUARGA"
                        : "ANGGOTA"}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Jenis Kelamin
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.jenis_kelamin}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Agama
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.agama}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Kependudukan
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.status_kependudukan == "penduduk_tetap"
                        ? "TETAP"
                        : "PENDATANG"}
                    </td>
                  </tr>
                  {/* Data Diri END */}

                  {/* Data Kelahiran START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      DATA KELAHIRAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Tempat / Tanggal Lahir
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.tempat_lahir} / {warga.tanggal_lahir}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Berat Lahir
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      3500 Gram{/* {warga.berat_lahir} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Panjang Lahir
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      45 Cm{/* {warga.panjang_lahir} */}
                    </td>
                  </tr>
                  {/* Data Kelahiran END */}

                  {/* Data Pendidikan Dan Pekerjaan START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      PENDIDIKAN DAN PEKERJAAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Pendidikan Yang Sedang Ditempuh
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      - {/* {warga.pendidikan_ditempuh} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Pendidikan Terakhir
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      S2 {/* {warga.pendidikan_terakhir} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Pekerjaan
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.pekerjaan}
                    </td>
                  </tr>
                  {/* Data Pendidikan Dan Pekerjaan END */}

                  {/* Data Kewarganegaraan START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      DATA KEWARGANEGARAAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Warga Kewarganegaraan
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      WNI {/* {warga.kewarganegaraan} */}
                    </td>
                  </tr>
                  {/* Data Kewarganegaraan END */}

                  {/* Data Orang Tua START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      ORANG TUA
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      NIK Ayah
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      245753546789 {/* {warga.nik_ayah} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Ayah
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      Ahmad {/* {warga.nama_ayah} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      NIK Ibu
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      245753546788 {/* {warga.nik_ibu} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Ibu
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      Sulis {/* {warga.nama_ibu} */}
                    </td>
                  </tr>
                  {/* Data Orang Tua END */}

                  {/* Data Alamat START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      ALAMAT
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Alamat
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      Desa Ringinsari {/* {warga.alamat} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Alamat Sebelumnya
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      Desa Ringinwok {/* {warga.alamat_sebelumnya} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      RT / RW
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      01 / 16 {/* {warga.rt} / {warga.rw} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nomor Telepon
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      0895622189242 {/* {warga.no_telp} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Email
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      example@gmail.com {/* {warga.email} */}
                    </td>
                  </tr>
                  {/* Data Alamat END */}

                  {/* Data Perkawinan START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      STATUS PERKAWINAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Kawin
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      KAWIN TERCATAT {/* {warga.status_perkawinan} */}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Tanggal Perkawinan
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      23-08-1992 {/* {warga.tanggal_perkawinan} */}
                    </td>
                  </tr>
                  {/* Data Perkawinan END */}

                  {/* Data Kesehatan START */}
                  {/* SEPARATOR START */}
                  <tr class="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator">
                      DATA KESEHATAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Golongan Darah
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {warga.golongan_darah}
                    </td>
                  </tr>
                  <tr class="odd:bg-gray-50">
                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Akseptor KB
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td class="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      23-08-1992 {/* {warga.tanggal_perkawinan} */}
                    </td>
                  </tr>
                  {/* Data Kesehatan END */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DetailWarga;
