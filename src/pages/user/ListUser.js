import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar";
import Sidebar from "../../component/Sidebar";
import Footer from "../../component/Footer";
import axios from "axios";

const authConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

function ListUser() {
  const [list, setList] = useState([]);

  const getAll = async () => {
    try {
      const response = await axios.get(`http://localhost:2001/api`, authConfig);
      setList(response.data);
    } catch (error) {
      alert("Terjadi Kesalahan: " + error);
    }
  };

  useEffect(() => {
    getAll(0);
  }, []);
  return (
    <div>
      {localStorage.getItem("role") === "admin" ? (
        <>
          <div className="flex">
            <Sidebar />
            <div className="block w-full">
              <div className="bg-gray-300 h-screen">
                <Navbar />

                <div className="bg-white m-5 p-5 rounded-xl space-y-5">
                  <span className="space-y-3">
                    <div className="flex md:flex-row md:justify-between flex-col items-center space-y-3 mx-5 page-header">
                      <h1 className="text-xl text-center font-semibold play">
                        Data User
                      </h1>
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

                  <div class="overflow-x-auto rounded-lg border border-gray-200">
                    <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                      <thead class="ltr:text-left rtl:text-right">
                        <tr>
                          <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                            Username
                          </th>
                          <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                            Email
                          </th>
                          <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                            Create At
                          </th>
                          <th class="whitespace-nowrap px-4 py-2 font-bold text-gray-800">
                            Update At
                          </th>
                        </tr>
                      </thead>

                      <tbody class="divide-y divide-gray-200">
                        {list.map((row, idx) => {
                          return (
                            <tr class="odd:bg-gray-50 text-center" key={idx}>
                              <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                {row.username}
                              </td>
                              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                {row.email}
                              </td>
                              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                {row.createdDate}
                              </td>
                              <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                {row.updatedDate}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ListUser;
