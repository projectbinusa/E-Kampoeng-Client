import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { authConfig } from "../../utils/authConfig";

const EditWarga = () => {
  const { id } = useParams();
  const [tempatLahir, setTempatLahir] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [agama, setAgama] = useState("");
  const [noKk, setNoKk] = useState("");
  const [statusDalamKeluarga, setStatusDalamKeluarga] = useState("");
  const [statusKependudukan, setStatusKependudukan] = useState("");
  const [noAnak, setNoAnak] = useState("");
  const [panjangLahir, setPanjangLahir] = useState("");
  const [beratLahir, setBeratLahir] = useState("");
  const [noPassport, setNoPassport] = useState("");
  const [namaAyah, setNamaAyah] = useState("");
  const [namaIbu, setNamaIbu] = useState("");
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
  const navigate = useNavigate();

  const convertToISODate = (dateString) => {
    const parts = dateString.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  // Fungsi untuk mengonversi format tanggal dari yyyy-mm-dd ke dd-mm-yyyy
  const convertToDisplayDate = (isoDateString) => {
    const isoDate = new Date(isoDateString);
    const day = isoDate.getDate().toString().padStart(2, "0");
    const month = (isoDate.getMonth() + 1).toString().padStart(2, "0");
    const year = isoDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  useEffect(() => {
    const fetchWarga = async () => {
      try {
        const response = await axios.get(
          `http://localhost:2001/e-kampoeng/api/warga/${id}`,
          authConfig
        );
        setTempatLahir(response.data.tempat_lahir);
        setTanggalLahir(convertToDisplayDate(response.data.tanggal_lahir));
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(
        `http://localhost:2001/e-kampoeng/api/warga/edit/${id}`,
        {
          tempatLahir,
          tanggalLahir,
          jenisKelamin,
          agama,
          noKk,
          statusDalamKeluarga,
          statusKependudukan,
          noAnak,
          panjangLahir,
          beratLahir,
          noPassport,
          namaAyah,
          namaIbu,
          tanggalPerkawinan,
          alamatSebelumnya,
          noBpjs,
          pendidikanTempuh,
          pendidikanTerakhir,
          statusPerkawinan,
          golonganDarah,
          jenisAsuransi,
          jenisKb,
          kesesuaianTempat,
          sumberAir,
        },
        authConfig
      );

      Swal.fire({
        title: "Sukses!",
        text: "Wilayah RT berhasil diperbarui.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/warga");
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      Swal.fire("Gagal!", "Terjadi kesalahan saat memperbarui data.", "error");
    }
  };

  return (
    <div className="flex">
      <div className="block w-full">
        <section className="bg-gray-300  w-full">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <nav className="text-xl text-center font-semibold mb-8 sticky top-0 z-10 m-30 bg-[#D10363] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4">
              Edit Warga
            </nav>
            <div className="rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {/* Input untuk tempat lahir */}
                  <div className="mb-4">
                    <label
                      htmlFor="tempatLahir"
                      className="block text-sm font-medium text-black"
                    >
                      Tempat Lahir
                    </label>
                    <input
                      type="text"
                      id="tempatLahir"
                      value={tempatLahir}
                      onChange={(e) => setTempatLahir(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk tanggal lahir */}
                  <div className="mb-4">
                    <label
                      htmlFor="tanggalLahir"
                      className="block text-sm font-medium text-black"
                    >
                      Tanggal Lahir
                    </label>
                    <input
                      type="date"
                      id="tanggalLahir"
                      value={tanggalLahir}
                      onChange={(e) => setTanggalLahir(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk jenis kelamin */}
                  <div className="mb-4">
                    <label
                      htmlFor="jenisKelamin"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Kelamin
                    </label>
                    <select
                      id="jenisKelamin"
                      value={jenisKelamin}
                      onChange={(e) => setJenisKelamin(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Laki-Laki">Laki-Laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  {/* Input untuk agama */}
                  <div className="mb-4">
                    <label
                      htmlFor="agama"
                      className="block text-sm font-medium text-black"
                    >
                      Agama
                    </label>
                    <select
                      id="agama"
                      value={agama}
                      onChange={(e) => setAgama(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Agama</option>
                      <option value="Islam">Islam</option>
                      <option value="Kristen">Kristen</option>
                      <option value="Katolik">Katolik</option>
                      <option value="Hindu">Hindu</option>
                      <option value="Buddha">Buddha</option>
                      <option value="Konghucu">Konghucu</option>
                    </select>
                  </div>

                  {/* Input untuk Nomor KK */}
                  <div className="mb-4">
                    <label
                      htmlFor="noKk"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor KK
                    </label>
                    <input
                      type="text"
                      id="noKk"
                      value={noKk}
                      onChange={(e) => setNoKk(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Status Dalam Keluarga */}
                  <div className="mb-4">
                    <label
                      htmlFor="statusDalamKeluarga"
                      className="block text-sm font-medium text-black"
                    >
                      Status dalam Keluarga
                    </label>
                    <select
                      id="statusDalamKeluarga"
                      value={statusDalamKeluarga}
                      onChange={(e) => setStatusDalamKeluarga(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Status dalam Keluarga</option>
                      <option value="Kepala Keluarga">Kepala Keluarga</option>
                      <option value="Istri">Istri</option>
                      <option value="Anak">Anak</option>
                      <option value="Famili Lain">Famili Lain</option>
                    </select>
                  </div>

                  {/* Input untuk Status Kependudukan */}
                  <div className="mb-4">
                    <label
                      htmlFor="statusKependudukan"
                      className="block text-sm font-medium text-black"
                    >
                      Status Kependudukan
                    </label>
                    <select
                      id="statusKependudukan"
                      value={statusKependudukan}
                      onChange={(e) => setStatusKependudukan(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Status Kependudukan</option>
                      <option value="Tetap">Tetap</option>
                      <option value="Tidak Tetap">Tidak Tetap</option>
                    </select>
                  </div>

                  {/* Input untuk Nomor Anak */}
                  <div className="mb-4">
                    <label
                      htmlFor="noAnak"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor Anak
                    </label>
                    <input
                      type="number"
                      id="noAnak"
                      value={noAnak}
                      onChange={(e) => setNoAnak(parseInt(e.target.value))}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Panjang Lahir */}
                  <div className="mb-4">
                    <label
                      htmlFor="panjangLahir"
                      className="block text-sm font-medium text-black"
                    >
                      Panjang Lahir (cm)
                    </label>
                    <input
                      type="number"
                      id="panjangLahir"
                      value={panjangLahir}
                      onChange={(e) =>
                        setPanjangLahir(parseFloat(e.target.value))
                      }
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Berat Lahir */}
                  <div className="mb-4">
                    <label
                      htmlFor="beratLahir"
                      className="block text-sm font-medium text-black"
                    >
                      Berat Lahir (kg)
                    </label>
                    <input
                      type="number"
                      id="beratLahir"
                      value={beratLahir}
                      onChange={(e) =>
                        setBeratLahir(parseFloat(e.target.value))
                      }
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Nomor Passport */}
                  <div className="mb-4">
                    <label
                      htmlFor="noPassport"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor Passport
                    </label>
                    <input
                      type="text"
                      id="noPassport"
                      value={noPassport}
                      onChange={(e) => setNoPassport(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Nama Ayah */}
                  <div className="mb-4">
                    <label
                      htmlFor="namaAyah"
                      className="block text-sm font-medium text-black"
                    >
                      Nama Ayah
                    </label>
                    <input
                      type="text"
                      id="namaAyah"
                      value={namaAyah}
                      onChange={(e) => setNamaAyah(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Nama Ibu */}
                  <div className="mb-4">
                    <label
                      htmlFor="namaIbu"
                      className="block text-sm font-medium text-black"
                    >
                      Nama Ibu
                    </label>
                    <input
                      type="text"
                      id="namaIbu"
                      value={namaIbu}
                      onChange={(e) => setNamaIbu(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Tanggal Perkawinan */}
                  <div className="mb-4">
                    <label
                      htmlFor="tanggalPerkawinan"
                      className="block text-sm font-medium text-black"
                    >
                      Tanggal Perkawinan
                    </label>
                    <input
                      type="date"
                      id="tanggalPerkawinan"
                      value={tanggalPerkawinan}
                      onChange={(e) => setTanggalPerkawinan(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Alamat Sebelumnya */}
                  <div className="mb-4">
                    <label
                      htmlFor="alamatSebelumnya"
                      className="block text-sm font-medium text-black"
                    >
                      Alamat Sebelumnya
                    </label>
                    <input
                      type="text"
                      id="alamatSebelumnya"
                      value={alamatSebelumnya}
                      onChange={(e) => setAlamatSebelumnya(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Nomor BPJS */}
                  <div className="mb-4">
                    <label
                      htmlFor="noBpjs"
                      className="block text-sm font-medium text-black"
                    >
                      Nomor BPJS
                    </label>
                    <input
                      type="text"
                      id="noBpjs"
                      value={noBpjs}
                      onChange={(e) => setNoBpjs(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                  </div>

                  {/* Input untuk Pendidikan Tempuh */}
                  <div className="mb-4">
                    <label
                      htmlFor="pendidikanTempuh"
                      className="block text-sm font-medium text-black"
                    >
                      Pendidikan Tempuh
                    </label>
                    <select
                      id="pendidikanTempuh"
                      value={pendidikanTempuh}
                      onChange={(e) => setPendidikanTempuh(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Pendidikan Tempuh</option>
                      <option value="SD">SD</option>
                      <option value="SMP">SMP</option>
                      <option value="SMA">SMA</option>
                      <option value="D1">D1</option>
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                    </select>
                  </div>

                  {/* Input untuk Pendidikan Terakhir */}
                  <div className="mb-4">
                    <label
                      htmlFor="pendidikanTerakhir"
                      className="block text-sm font-medium text-black"
                    >
                      Pendidikan Terakhir
                    </label>
                    <select
                      id="pendidikanTerakhir"
                      value={pendidikanTerakhir}
                      onChange={(e) => setPendidikanTerakhir(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Pendidikan Akhir</option>
                      <option value="SD">SD</option>
                      <option value="SMP">SMP</option>
                      <option value="SMA">SMA</option>
                      <option value="D1">D1</option>
                      <option value="D2">D2</option>
                      <option value="D3">D3</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                      <option value="S3">S3</option>
                    </select>
                  </div>

                  {/* Input untuk Status Perkawinan */}
                  <div className="mb-4">
                    <label
                      htmlFor="statusPerkawinan"
                      className="block text-sm font-medium text-black"
                    >
                      Status Perkawinan
                    </label>
                    <select
                      id="statusPerkawinan"
                      value={statusPerkawinan}
                      onChange={(e) => setStatusPerkawinan(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Status Perkawinan</option>
                      <option value="Belum Kawin">Belum Kawin</option>
                      <option value="Kawin">Kawin</option>
                      <option value="Cerai Hidup">Cerai Hidup</option>
                      <option value="Cerai Mati">Cerai Mati</option>
                    </select>
                  </div>

                  {/* Input untuk Golongan Darah */}
                  <div className="mb-4">
                    <label
                      htmlFor="golonganDarah"
                      className="block text-sm font-medium text-black"
                    >
                      Golongan Darah
                    </label>
                    <select
                      id="golonganDarah"
                      value={golonganDarah}
                      onChange={(e) => setGolonganDarah(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Golongan Darah</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="AB">AB</option>
                      <option value="O">O</option>
                    </select>
                  </div>

                  {/* Input untuk Jenis Asuransi */}
                  <div className="mb-4">
                    <label
                      htmlFor="jenisAsuransi"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis Asuransi
                    </label>
                    <select
                      id="golonganDarah"
                      value={jenisAsuransi}
                      onChange={(e) => setJenisAsuransi(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis Asuransi</option>
                      <option value="A">BPJS</option>
                      <option value="B">Lainnya</option>
                    </select>
                  </div>

                  {/* Input untuk Jenis KB */}
                  <div className="mb-4">
                    <label
                      htmlFor="jenisKB"
                      className="block text-sm font-medium text-black"
                    >
                      Jenis KB
                    </label>
                    <select
                      id="jenisKB"
                      value={jenisKb}
                      onChange={(e) => setJenisKb(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Jenis KB</option>
                      <option value="IUD">IUD (Intra Uterine Device)</option>
                      <option value="Suntik">Suntik</option>
                      <option value="Implan">Implan</option>
                      <option value="Pil">Pil</option>
                      <option value="Kondom">Kondom</option>
                      <option value="Vasectomy">Vasectomy</option>
                      <option value="Tubectomy">Tubectomy</option>
                      <option value="MOW">MOW (Metode Operasi Wanita)</option>
                      <option value="Natural">
                        Natural (Rhythm, Laktasi, Coitus Interruptus)
                      </option>
                    </select>
                  </div>

                  {/* Input untuk Kesesuaian Tempat */}
                  <div className="mb-4">
                    <label
                      htmlFor="kesesuaianTempat"
                      className="block text-sm font-medium text-black"
                    >
                      Kesesuaian Tempat
                    </label>
                    <select
                      id="kesesuaianTempat"
                      value={kesesuaianTempat}
                      onChange={(e) => setKesesuaianTempat(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Kesesuaian Tempat</option>
                      <option value="Rumah">Rumah</option>
                      <option value="Apartemen">Apartemen</option>
                      <option value="Kos">Kos</option>
                      <option value="Pondok">Pondok</option>
                      <option value="Asrama">Asrama</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>

                  {/* Input untuk Sumber Air */}
                  <div className="mb-4">
                    <label
                      htmlFor="sumberAir"
                      className="block text-sm font-medium text-black"
                    >
                      Sumber Air
                    </label>
                    <select
                      id="sumberAir"
                      value={sumberAir}
                      onChange={(e) => setSumberAir(e.target.value)}
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    >
                      <option value="">Pilih Sumber Air</option>
                      <option value="PAM">PAM (Perusahaan Air Minum)</option>
                      <option value="Sumur Bor">Sumur Bor</option>
                      <option value="Sumur Gali">Sumur Gali</option>
                      <option value="Mata Air">Mata Air</option>
                      <option value="Sungai">Sungai</option>
                      <option value="Danau">Danau</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-1 sm:col-span-2 flex justify-end mt-4">
                  <button
                    type="submit"
                    className="inline-block rounded-md border border-[#D10363] bg-[#D10363] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#D10363] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]"
                  >
                    Simpan
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EditWarga;
