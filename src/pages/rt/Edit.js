import React from "react";

function Edit() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className=" mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className=" rounded-lg bg-white p-8 shadow-xl lg:col-span-3 lg:p-7">
            <h1 className="text-xl text-center font-semibold mb-4">
              {" "}
              Edit Data RT
            </h1>

            <div>
              <form>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Username"
                    className="block text-sm font-medium text-black"
                  >
                   nama RT
                  </label>

                  <input
                    autoComplete="off"
                    type="text"
                    id="rt"
                    name="rt"
                    placeholder="nama rt"
                    className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 mt-4">
                  <label
                    for="Username"
                    className="block text-sm font-medium text-black"
                  >
                    Warga Id
                  </label>

                  <input
                    autoComplete="off"
                    type="text"
                    id="warga"
                    name="warga"
                    placeholder="nama warga"
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
    </div>
  );
}

export default Edit;
