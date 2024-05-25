import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import Sidebar from "../../component/Sidebar";
import { authConfig } from "../../utils/authConfig";
import Swal from "sweetalert2";

function Anggota() {
  const { organisasiId } = useParams();
  const [wargaList, setWargaList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:2001/e-kampoeng/api/organisasi-warga/${organisasiId}/warga`,
        authConfig
      )
      .then((response) => {
        setWargaList(response.data.data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [organisasiId]);

  const kickWarga = async (id) => {
    Swal.fire({
      title: "Apakah Anda yakin mengeluarkan warga dari organisasi ini?",
      text: "Anda tidak akan bisa mengembalikan data ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Keluarkan!",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `http://localhost:2001/e-kampoeng/api/organisasi-warga/${id}`,
            authConfig
          );
          // Remove the deleted item from state
          setWargaList(wargaList.filter((data) => data.id !== id));
          // Show success SweetAlert
          Swal.fire({
            icon: "success",
            title: "Sudah Keluar!",
            text: "Warga Berhasil Di Keluarkan.",
          });
        } catch (error) {
          console.error("Error deleting organisasi:", error);
          // Show error SweetAlert
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Gagal menghapus organisasi. Silakan coba lagi.",
          });
        }
      }
    });
  };

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="block w-full">
          <div className="bg-gray-300 h-full min-h-screen pb-5">
            <Navbar />
            <div className="bg-white m-5 p-5 rounded-xl space-y-5">
              <div className="flex flex-col justify-between sm:flex-row items-center">
                <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
                  Table Anggota Organisasi
                </h1>
              </div>
              <hr className="border border-black" />
              <div className="overflow-x-auto rounded-lg border border-gray-200">
                <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                  <thead className="ltr:text-left rtl:text-right">
                    <tr className="text-left">
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        No
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Nama Anggota
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Alamat
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Email
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                        Nomor Telpon
                      </th>
                      <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800 text-center">
                        Aksi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {wargaList.map((warga, index) => (
                      <tr key={warga.id}>
                        <td className="px-4 py-2">{index + 1}</td>
                        <td className="px-4 py-2">{warga.warga.nama}</td>
                        <td className="px-4 py-2">{warga.warga.alamat}</td>
                        <td className="px-4 py-2">{warga.warga.email}</td>
                        <td className="px-4 py-2">{warga.warga.no_telp}</td>
                        <td className="px-4 py-2 text-center">
                          <td className="whitespace-nowrap px-4 py-2 text-gray-800 text-center">
                            <button
                              onClick={() => kickWarga(warga.id)}
                              className="tinline-block rounded bg-[#A91D3A] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#D10363] ml-0 sm:ml-4"
                            >
                              Keluarkan grup
                            </button>
                          </td>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Anggota;
