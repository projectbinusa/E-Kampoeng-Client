import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api_organisasi } from "../../utils/api";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function Organisasi() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [ModalEditOpen, setModalEditOpen] = useState(false);
  const [datas, setDatas] = useState([]);
  const [nama_organisasi, setNama_organisasi] = useState("");
  const [id, setId] = useState(0);
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModalEdit = (id) => {
    setId(id);
    getOrganisasiById(id);
    setModalEditOpen(true);
  };

  const closeModalEdit = () => {
    setModalEditOpen(false);
  };

  const getOrganisasi = async () => {
    try {
      const response = await axios.get(`${api_organisasi}/all`, authConfig);
      setDatas(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrganisasiById = async (id) => {
    try {
      const response = await axios.get(`${api_organisasi}/${id}`, authConfig);
      setNama_organisasi(response.data.data.nama_organisasi);
    } catch (error) {
      console.log(error);
    }
  };

  const addOrganisasi = async (e) => {
    e.preventDefault();
    const req = {
      nama_organisasi: nama_organisasi,
    };
    try {
      await axios.post(`${api_organisasi}/add`, req, authConfig);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const putOrganisasi = async (e) => {
    e.preventDefault();
    const req = {
      nama_organisasi: nama_organisasi,
    };
    try {
      await axios.put(`${api_organisasi}/${id}`, req, authConfig);
      setModalEditOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteOrganisasi = async (ID) => {
    try {
      await axios.delete(`${api_organisasi}/${ID}`, authConfig);
      setModalEditOpen(false);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrganisasi();
  }, []);

  return (
    <div className="bg-gray-300 h-full pb-5">
      <Navbar />

      <div className="bg-white m-5 p-5 rounded-xl space-y-5">
        <span className="space-y-3">
          <div className="flex flex-col justify-between sm:flex-row items-center">
            <h1 className="text-xl text-center font-bold ubuntu my-auto mb-2 sm:mb-0">
              Table Organisasi
            </h1>
            <button
              onClick={openModal}
              className="inline-block rounded bg-[#776b5d] px-4 py-2 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-[#776b5d] ml-0 sm:ml-4"
            >
              Tambah
            </button>
          </div>
          <hr className="border border-black" />
          <div className="flex flex-col justify-between sm:flex-row items-center">
            <div className="relative inline-flex my-3">
              <select className="appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-3 text-sm rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 font-normal">
                <option value="1">Show 1 Entry</option>
                <option value="10">Show 10 Entries</option>
                <option value="100">Show 100 Entries</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 11l3-3 3 3m-3 3v-6" />
                </svg>
              </div>
            </div>
            <div className="flex items-center">
              <input
                className="bg-gray-50 appearance-none border-2 border-[#776b5d] rounded w-full py-2 px-4 text-[#776b5d] leading-tight focus:outline-none focus:bg-white focus:border-[#776b5d]"
                id="inline-search"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </span>

        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  No
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  Nama Organisasi
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {datas.map((organisasi, idx) => {
                return (
                  <tr className="odd:bg-gray-50 text-center" key={idx}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {idx + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {organisasi.nama_organisasi}
                    </td>
                    <td className="whitespace-nowrap flex justify-center gap-3 px-4 py-2 text-gray-700">
                      <Link
                        onClick={() => openModalEdit(organisasi.id)}
                        className="block rounded-md bg-blue-400 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-blue-400 hover:border-blue-400"
                        title="Edit"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          id="Outline"
                          viewBox="0 0 24 24"
                          width="18"
                          height="18"
                        >
                          <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
                          <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
                        </svg>
                      </Link>
                      <Link
                        onClick={() => deleteOrganisasi(organisasi.id)}
                        className="block rounded-md bg-red-500 border border-transparent fill-white p-2 text-sm font-medium text-white transition-all duration-200 hover:shadow-md hover:bg-transparent hover:fill-red-500 hover:border-red-500"
                        title="Hapus"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          fill="inherit"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <ol className="flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-500 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-500 bg-white text-center leading-8 text-gray-900"
            >
              1
            </a>
          </li>

          <li className="block size-8 rounded border border-gray-500 bg-white text-center leading-8 text-gray-900">
            2
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-500 bg-white text-center leading-8 text-gray-900"
            >
              3
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block size-8 rounded border border-gray-500 bg-white text-center leading-8 text-gray-900"
            >
              4
            </a>
          </li>

          <li>
            <a
              href="#"
              className="inline-flex size-8 items-center justify-center rounded border border-gray-500 bg-white text-gray-900 rtl:rotate-180"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>

        {/* Modal edit organisasi */}
        {ModalEditOpen && (
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
                <div className="sm:flex sm:items-center flex-col">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-full">
                    <span className="space-y-3">
                      <h1 className="text-xl text-left font-bold ubuntu my-auto">
                        Edit Organisasi
                      </h1>
                      <hr className="border border-black" />
                    </span>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="organisasi"
                        className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                      >
                        <input
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          type="text"
                          id="organisasi"
                          placeholder="organisasi"
                          onChange={(e) => setNama_organisasi(e.target.value)}
                          value={nama_organisasi}
                          autoComplete="off"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                          Nama Organisasi
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <button
                    onClick={closeModalEdit}
                    className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={putOrganisasi}
                    className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#776B5D] bg-[#776B5D] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#776B5D] focus:outline-none active:text-white active:bg-[#776d5b]"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal tambah organisasi */}
        {isModalOpen && (
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6">
                <div className="sm:flex sm:items-center flex-col">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left sm:w-full">
                    <span className="space-y-3">
                      <h1 className="text-xl text-left font-bold ubuntu my-auto">
                        Tambah Organisasi
                      </h1>
                      <hr className="border border-black" />
                    </span>
                    <div className="mt-4 mb-4 sm:w-full">
                      <label
                        htmlFor="organisasi"
                        className="relative block overflow-hidden border-b border-gray-400 bg-transparent pt-3 focus-within:border-[#776b5d]"
                      >
                        <input
                          className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                          type="text"
                          id="organisasi"
                          placeholder="organisasi"
                          onChange={(e) => setNama_organisasi(e.target.value)}
                          value={nama_organisasi}
                          autoComplete="off"
                        />

                        <span className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                          Nama Organisasi
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between">
                  <button
                    onClick={closeModal}
                    className="w-full sm:w-auto rounded-md border border-red-500 bg-red-500 px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-red-500 focus:outline-none active:text-white active:bg-red-400"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={addOrganisasi}
                    className="w-full sm:w-auto mt-4 sm:mt-0 rounded-md border border-[#776B5D] bg-[#776B5D] px-6 py-2 text-xs font-medium text-white transition hover:bg-transparent hover:text-[#776B5D] focus:outline-none active:text-white active:bg-[#776d5b]"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Organisasi;
