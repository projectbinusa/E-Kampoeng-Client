import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import FemaleAvatar from "../../assets/FemaleAvatar.png";
import MaleAvatar from "../../assets/MaleAvatar.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api_warga } from "../../utils/api";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";
import { authConfig } from "../../utils/authConfig";

const DetailWarga = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [nama, setNama] = useState("");
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [nik, setNik] = useState("");
  const [noKk, setNoKk] = useState("");
  const [statusDalamKeluarga, setStatusDalamKeluarga] = useState("");
  const [statusKependudukan, setStatusKependudukan] = useState("");
  const [noAnak, setNoAnak] = useState("");
  const [panjangLahir, setPanjangLahir] = useState("");
  const [beratLahir, setBeratLahir] = useState("");
  const [noPassport, setNoPassport] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [tanggalPerkawinan, setTanggalPerkawinan] = useState("");
  const [alamatSebelumnya, setAlamatSebelumnya] = useState("");
  const [noBpjs, setNoBpjs] = useState("");
  const [pendidikanTempuh, setPendidikanTempuh] = useState("");
  const [pendidikanTerakhir, setPendidikanTerakhir] = useState("");
  const [statusPerkawinan, setStatusPerkawinan] = useState("");
  const [golonganDarah, setGolonganDarah] = useState("");
  const [jenisAsuransi, setJenisAsuransi] = useState("");
  const [jenisKb, setJenisKb] = useState("");
  const [kesesuaianTempat, setKesesuaianTempat] = useState("");
  const [sumberAir, setSumberAir] = useState("");
  // const [warga, setWarga] = useState({});

  useEffect(() => {
    const fetchWarga = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/warga/${id}`,
          authConfig
        );
        setNama(response.data.nama);
        setTempatLahir(response.data.tempat_lahir);
        setTanggalLahir(response.data.tanggal_lahir);
        setJenisKelamin(response.data.jenis_kelamin);
        setAgama(response.data.agama);
        setNoKk(response.data.no_kk);
        setStatusDalamKeluarga(response.data.status_dalam_keluarga);
        setStatusKependudukan(response.data.status_kependudukan);
        setNoAnak(response.data.no_anak);
        setPanjangLahir(response.data.panjang_lahir);
        setBeratLahir(response.data.berat_lahir);
        setNoPassport(response.data.no_passport);
        setNamaAyah(response.data.nama_ayah);
        setNamaIbu(response.data.nama_ibu);
        setNoTelp(response.data.no_telp);
        setEmail(response.data.email);
        setAlamat(response.data.alamat);
        setTanggalPerkawinan(response.data.tanggal_perkawinan);
        setAlamatSebelumnya(response.data.alamat_sebelumnya);
        setNoBpjs(response.data.no_bpjs);
        setPendidikanTempuh(response.data.pendidikan_tempuh);
        setPendidikanTerakhir(response.data.pendidikan_terakhir);
        setStatusPerkawinan(response.data.status_perkawinan);
        setGolonganDarah(response.data.golongan_darah);
        setJenisAsuransi(response.data.jenis_asuransi);
        setJenisKb(response.data.jenis_kb);
        setKesesuaianTempat(response.data.kesesuaian_tempat);
        setSumberAir(response.data.sumber_air);
      } catch (error) {
        console.error("Terjadi kesalahan:", error);
      }
    };

    fetchWarga();
  }, [id]);
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
                  className="flex items-center ubuntu"
                >
                  <ol className="flex items-center gap-1 text-sm text-gray-600">
                    <li>
                      <Link
                        to={"/"}
                        className="block transition hover:text-gray-700"
                      >
                        <span className="sr-only">Home</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                      </Link>
                    </li>

                    <li className="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
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
                        className="block transition hover:text-gray-700"
                      >
                        Warga
                      </Link>
                    </li>

                    <li className="rtl:rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
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
                        className="block transition hover:text-gray-700"
                      >
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
                src={jenisKelamin == "Laki-laki" ? MaleAvatar : FemaleAvatar}
                alt="user-avatar"
                className="h-64 w-64"
              />
              <div className="flex flex-col items-center mt-4">
                <b className="mb-1 text-xl play"></b>
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
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm text-left border-collapse border border-red-500 rounded-full">
                <tbody className="divide-y divide-gray-200">
                  {/* Data Diri START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      DATA DIRI
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Dasar
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      HIDUP{/* {status_dasar} */}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Lengkap
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {nama}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nomor Kartu Keluarga
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {noKk}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Hubungan Dalam Keluarga
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {statusDalamKeluarga == "kepala_keluarga"
                        ? "KEPALA KELUARGA"
                        : "ANGGOTA"}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Jenis Kelamin
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {jenisKelamin}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Agama
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {agama}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Kependudukan
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {statusKependudukan == "penduduk_tetap"
                        ? "TETAP"
                        : "PENDATANG"}
                    </td>
                  </tr>
                  {/* Data Diri END */}

                  {/* Data Kelahiran START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      DATA KELAHIRAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Tempat / Tanggal Lahir
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {tempatLahir} / {tanggalLahir}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Berat Lahir
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {beratLahir}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Panjang Lahir
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {panjangLahir}
                    </td>
                  </tr>
                  {/* Data Kelahiran END */}

                  {/* Data Pendidikan Dan Pekerjaan START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      PENDIDIKAN DAN PEKERJAAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Pendidikan Yang Sedang Ditempuh
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {pendidikanTempuh}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Pendidikan Terakhir
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {pendidikanTerakhir}
                    </td>
                  </tr>

                  {/* Data Kewarganegaraan START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      DATA KEWARGANEGARAAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Warga Kewarganegaraan
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {kesesuaianTempat}
                    </td>
                  </tr>
                  {/* Data Kewarganegaraan END */}

                  {/* Data Orang Tua START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      ORANG TUA
                    </td>
                  </tr>
                  {/* SEPARATOR END */}

                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Ayah
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {namaAyah}
                    </td>
                  </tr>

                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nama Ibu
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {namaIbu}
                    </td>
                  </tr>
                  {/* Data Orang Tua END */}

                  {/* Data Alamat START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      ALAMAT
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Alamat
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {alamat}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Alamat Sebelumnya
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {alamatSebelumnya}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      RT / RW
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {/* {rt} / {rw} */}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Nomor Telepon
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {noTelp}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Email
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {email}
                    </td>
                  </tr>
                  {/* Data Alamat END */}

                  {/* Data Perkawinan START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      STATUS PERKAWINAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Status Kawin
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {statusPerkawinan}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Tanggal Perkawinan
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {tanggalPerkawinan}
                    </td>
                  </tr>
                  {/* Data Perkawinan END */}

                  {/* Data Kesehatan START */}
                  {/* SEPARATOR START */}
                  <tr className="odd:bg-gray-50">
                    <td
                      colSpan={3}
                      className="whitespace-nowrap px-4 py-2 font-medium text-white border border-gray-500 bg-gray-500/75 separator"
                    >
                      DATA KESEHATAN
                    </td>
                  </tr>
                  {/* SEPARATOR END */}
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Golongan Darah
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {golonganDarah}
                    </td>
                  </tr>
                  <tr className="odd:bg-gray-50">
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 w-[40%] border border-gray-500 prop">
                      Akseptor KB
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 w-[0.5%] border border-gray-500">
                      :
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-500">
                      {jenisKb}
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
