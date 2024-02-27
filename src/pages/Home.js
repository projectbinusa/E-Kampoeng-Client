import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "../component/Sidebar";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div>
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div
                className="relative h-64 sm:h-80 lg:h-full"
                data-aos="fade-right"
              >
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className="relative flex items-center bg-gray-300"
              data-aos="fade-left"
            >
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-300"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-2xl font-bold sm:text-3xl">
                  Bersama E-Kampoeng Menuju Desa Digital Yang Canggih.
                </h2>

                <p className="mt-4 text-gray-600">
                  E-Kampoeng adalah sebuah sistem yang dirancang untuk
                  memudahkan para kepala desa untuk memenejemen data desa baik
                  itu data warga, RT dan RW.
                </p>

                <a
                  href="#"
                  className="mt-8 inline-block rounded border border-[#776b5d] bg-[#776b5d] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-[#776b5d] focus:outline-none focus:ring active:text-[#776b5d]-500"
                >
                  Lihat Lainnya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    </div>
  );
};

export default Home;
