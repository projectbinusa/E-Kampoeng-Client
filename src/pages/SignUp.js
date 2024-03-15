import React, { useState } from "react";
import "../css/SignUp.css";
import { api_register } from "../utils/api";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passType, setPassType] = useState("password");
  const [confirmType, setConfirmType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    if (passType == "password") {
      setPassType("text");
    } else {
      setPassType("password");
    }
  };

  const toggleConfirm = () => {
    if (confirmType == "password") {
      setConfirmType("text");
    } else {
      setConfirmType("password");
    }
  };

  const register = async (e) => {
    e.preventDefault();
    const data = {
      username: username, 
      email: email,
      password: password,
      role: role,
    };

    try {
      const response = await axios.post(`${api_register}`, data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.userData.role);
      navigate("/");
      console.log("success register");

      Swal.fire({
        icon: "success",
        title: "Registrasi Berhasil",
        text: "Selamat datang!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="bg-gray-200">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-black lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://th.bing.com/th/id/OIG4.FHiN0rVurAEKtWYOP_oj?w=1024&h=1024&rs=1&pid=ImgDetMain"
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <a className="block w-fit text-white" href="#">
                <span className="sr-only logo">Home</span>
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="70"
                  height="70"
                  viewBox="0 0 184.000000 183.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
                    fill="#e5e7eb"
                    stroke="none"
                  >
                    <path
                      d="M477 1684 c-4 -4 -7 -16 -7 -26 0 -13 7 -18 26 -18 21 0 25 4 22 22
-3 23 -27 35 -41 22z"
                    />
                    <path
                      d="M780 1640 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
                    />
                    <path
                      d="M1010 1620 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
                    />
                    <path
                      d="M265 1577 c-4 -13 -5 -43 -3 -68 l3 -44 68 -6 68 -6 79 -78 79 -79 3
-70 3 -71 47 -3 c48 -3 71 -23 67 -55 -4 -32 3 -46 24 -49 19 -3 22 -10 25
-55 l3 -53 -55 0 c-53 0 -56 1 -56 24 0 25 0 25 -122 28 l-123 3 3 -87 3 -88
101 0 c118 0 161 -15 177 -62 15 -42 14 -64 -4 -97 -19 -39 -34 -44 -150 -50
l-100 -6 -3 -85 c-5 -131 -5 -130 83 -130 40 0 86 -5 100 -10 15 -6 59 -39 98
-75 74 -68 186 -132 272 -156 29 -8 95 -14 160 -14 180 1 305 53 430 179 57
58 135 173 135 200 0 9 -138 7 -202 -3 -41 -7 -75 -22 -119 -51 -84 -58 -138
-80 -212 -87 -149 -14 -310 82 -377 225 -85 179 0 387 197 484 61 30 76 33
153 33 71 -1 95 -5 145 -28 33 -16 77 -45 98 -65 42 -40 91 -127 82 -142 -4
-6 -118 -10 -286 -10 -262 0 -280 -1 -276 -17 3 -10 8 -35 12 -57 9 -55 47
-110 92 -132 35 -17 68 -19 392 -22 l354 -3 -6 93 c-12 184 -76 337 -188 449
-74 75 -164 124 -288 158 -85 24 -97 32 -106 72 -6 28 -8 29 -71 29 l-64 0 0
-35 c0 -46 -17 -80 -47 -94 -15 -7 -95 -11 -210 -11 l-185 0 -79 76 -78 77 -3
71 -3 71 -67 3 c-64 3 -68 2 -73 -21z m835 -312 c0 -39 -3 -45 -25 -51 -14 -3
-36 -3 -50 0 -21 5 -25 12 -25 45 0 21 3 41 7 44 3 4 26 7 50 7 l43 0 0 -45z
m-320 -60 l0 -55 -55 0 -55 0 0 55 0 55 55 0 55 0 0 -55z m70 -69 c6 -8 10
-25 8 -38 -2 -19 -9 -23 -38 -23 -29 0 -36 4 -38 23 -4 28 14 52 38 52 10 0
23 -7 30 -14z m-130 -594 c7 -70 -1 -82 -55 -82 -70 0 -75 5 -75 69 0 32 3 61
7 65 4 4 32 6 63 4 l55 -3 5 -53z"
                    />
                    <path d="M880 1530 l0 -40 40 0 40 0 0 40 0 40 -40 0 -40 0 0 -40z" />
                    <path
                      d="M595 1517 c-4 -13 -5 -48 -3 -78 l3 -54 78 -3 78 -3 -3 78 -3 78 -72
3 c-69 3 -73 2 -78 -21z"
                    />
                    <path
                      d="M1180 1490 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
                    />
                    <path
                      d="M102 1428 c2 -15 11 -24 26 -26 18 -3 22 1 22 22 0 21 -5 26 -26 26
-21 0 -25 -4 -22 -22z"
                    />
                    <path d="M380 1225 l0 -45 45 0 45 0 0 45 0 45 -45 0 -45 0 0 -45z" />
                    <path
                      d="M140 1220 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
                    />
                    <path d="M240 1081 l0 -49 53 -4 52 -3 -3 53 -4 52 -49 0 -49 0 0 -49z" />
                    <path d="M106 913 c-12 -12 -6 -33 9 -33 8 0 15 6 15 14 0 17 -14 28 -24 19z" />
                    <path
                      d="M172 813 c2 -22 9 -29 31 -31 24 -3 27 0 27 27 0 28 -3 31 -31 31
-27 0 -30 -3 -27 -27z"
                    />
                    <path d="M272 695 l3 -50 45 0 45 0 3 47 3 46 -51 4 -51 3 3 -50z" />
                    <path
                      d="M170 561 c0 -28 3 -31 31 -31 27 0 30 3 27 28 -2 21 -9 28 -30 30
-25 3 -28 0 -28 -27z"
                    />
                  </g>
                </svg>
              </a>

              <h2 className="mt-6 text-2xl font-semibold text-white sm:text-3xl md:text-4xl merriweather">
                Selamat Datang di E-Kampoeng
              </h2>

              <p className="mt-4 leading-relaxed text-white/90 montserrat">
                Website yang menyediakan banyak fitur untuk mengatur dan
                memantau perkembangan desa.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-0 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <a
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  href="#"
                >
                  <span className="sr-only logo">Home</span>
                  <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    viewBox="0 0 184.000000 183.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,183.000000) scale(0.100000,-0.100000)"
                      fill="#e5e7eb"
                      stroke="none"
                    >
                      <path
                        d="M477 1684 c-4 -4 -7 -16 -7 -26 0 -13 7 -18 26 -18 21 0 25 4 22 22
-3 23 -27 35 -41 22z"
                      />
                      <path
                        d="M780 1640 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
                      />
                      <path
                        d="M1010 1620 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
                      />
                      <path
                        d="M265 1577 c-4 -13 -5 -43 -3 -68 l3 -44 68 -6 68 -6 79 -78 79 -79 3
-70 3 -71 47 -3 c48 -3 71 -23 67 -55 -4 -32 3 -46 24 -49 19 -3 22 -10 25
-55 l3 -53 -55 0 c-53 0 -56 1 -56 24 0 25 0 25 -122 28 l-123 3 3 -87 3 -88
101 0 c118 0 161 -15 177 -62 15 -42 14 -64 -4 -97 -19 -39 -34 -44 -150 -50
l-100 -6 -3 -85 c-5 -131 -5 -130 83 -130 40 0 86 -5 100 -10 15 -6 59 -39 98
-75 74 -68 186 -132 272 -156 29 -8 95 -14 160 -14 180 1 305 53 430 179 57
58 135 173 135 200 0 9 -138 7 -202 -3 -41 -7 -75 -22 -119 -51 -84 -58 -138
-80 -212 -87 -149 -14 -310 82 -377 225 -85 179 0 387 197 484 61 30 76 33
153 33 71 -1 95 -5 145 -28 33 -16 77 -45 98 -65 42 -40 91 -127 82 -142 -4
-6 -118 -10 -286 -10 -262 0 -280 -1 -276 -17 3 -10 8 -35 12 -57 9 -55 47
-110 92 -132 35 -17 68 -19 392 -22 l354 -3 -6 93 c-12 184 -76 337 -188 449
-74 75 -164 124 -288 158 -85 24 -97 32 -106 72 -6 28 -8 29 -71 29 l-64 0 0
-35 c0 -46 -17 -80 -47 -94 -15 -7 -95 -11 -210 -11 l-185 0 -79 76 -78 77 -3
71 -3 71 -67 3 c-64 3 -68 2 -73 -21z m835 -312 c0 -39 -3 -45 -25 -51 -14 -3
-36 -3 -50 0 -21 5 -25 12 -25 45 0 21 3 41 7 44 3 4 26 7 50 7 l43 0 0 -45z
m-320 -60 l0 -55 -55 0 -55 0 0 55 0 55 55 0 55 0 0 -55z m70 -69 c6 -8 10
-25 8 -38 -2 -19 -9 -23 -38 -23 -29 0 -36 4 -38 23 -4 28 14 52 38 52 10 0
23 -7 30 -14z m-130 -594 c7 -70 -1 -82 -55 -82 -70 0 -75 5 -75 69 0 32 3 61
7 65 4 4 32 6 63 4 l55 -3 5 -53z"
                      />
                      <path d="M880 1530 l0 -40 40 0 40 0 0 40 0 40 -40 0 -40 0 0 -40z" />
                      <path
                        d="M595 1517 c-4 -13 -5 -48 -3 -78 l3 -54 78 -3 78 -3 -3 78 -3 78 -72
3 c-69 3 -73 2 -78 -21z"
                      />
                      <path
                        d="M1180 1490 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20
-13 0 -20 -7 -20 -20z"
                      />
                      <path
                        d="M102 1428 c2 -15 11 -24 26 -26 18 -3 22 1 22 22 0 21 -5 26 -26 26
-21 0 -25 -4 -22 -22z"
                      />
                      <path d="M380 1225 l0 -45 45 0 45 0 0 45 0 45 -45 0 -45 0 0 -45z" />
                      <path
                        d="M140 1220 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 -3 30 -30 30
-27 0 -30 -3 -30 -30z"
                      />
                      <path d="M240 1081 l0 -49 53 -4 52 -3 -3 53 -4 52 -49 0 -49 0 0 -49z" />
                      <path d="M106 913 c-12 -12 -6 -33 9 -33 8 0 15 6 15 14 0 17 -14 28 -24 19z" />
                      <path
                        d="M172 813 c2 -22 9 -29 31 -31 24 -3 27 0 27 27 0 28 -3 31 -31 31
-27 0 -30 -3 -27 -27z"
                      />
                      <path d="M272 695 l3 -50 45 0 45 0 3 47 3 46 -51 4 -51 3 3 -50z" />
                      <path
                        d="M170 561 c0 -28 3 -31 31 -31 27 0 30 3 27 28 -2 21 -9 28 -30 30
-25 3 -28 0 -28 -27z"
                      />
                    </g>
                  </svg>
                </a>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl merriweather">
                  Selamat Datang di E-Kampoeng
                </h1>

                <p className="mt-4 leading-relaxed text-gray-700 montserrat">
                  Website yang menyediakan banyak fitur untuk mengatur dan
                  memantau perkembangan desa.
                </p>
              </div>

              <div className="hidden lg:block text-center text-2xl font-bold merriweather mb-10 space-y-3">
                <h2>Sign Up</h2>
                <hr className="border border-black" />
              </div>
              <form action="#" className="mt-8 grid grid-cols-6 gap-5">
              

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Username"
                    className="block text-sm font-medium text-black"
                  >
                    Username
                  </label>

                  <input
                    autoComplete="off"
                    type="text"
                    id="Username"
                    name="username"
                    placeholder="Username"
                    className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 hidden">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-black"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      type="text"
                      id="Role"
                      name="role"
                      onChange={(e) => setRole(e.target.value)}
                      value="rw"
                      placeholder="Email"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                    <span className="absolute inset-y-0 end-0 top-3 grid place-content-center px-3 my-0.5 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#9ca3af"
                        className="size-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Email"
                    className="block text-sm font-medium text-black"
                  >
                    {" "}
                    Email{" "}
                  </label>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      type="email"
                      id="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="Email"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                    <span className="absolute inset-y-0 end-0 top-3 grid place-content-center px-3 my-0.5 h-fit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#9ca3af"
                        className="size-5"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="Password"
                    className="block text-sm font-medium text-black"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      type={passType}
                      id="Password"
                      name="password"
                      placeholder="Password"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                    <span
                      className="absolute inset-y-0 end-0.5 top-3.5 grid place-content-center px-3 my-0.5 h-fit hover:cursor-pointer"
                      onClick={togglePassword}
                    >
                      {passType == "password" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#9ca3af"
                          className="size-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#9ca3af"
                          className="size-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="PasswordConfirmation"
                    className="block text-sm font-medium text-black"
                  >
                    Password Confirmation
                  </label>

                  <div className="relative">
                    <input
                      autoComplete="off"
                      type={confirmType}
                      id="PasswordConfirmation"
                      name="password_confirmation"
                      placeholder="Password Confirmation"
                      className="mt-1 py-2 px-3 w-full rounded-md border border-gray-200 bg-white text-sm text-black shadow-md"
                    />
                    <span
                      className="absolute inset-y-0 end-0.5 top-3.5 grid place-content-center px-3 my-0.5 h-fit hover:cursor-pointer"
                      onClick={toggleConfirm}
                    >
                      {confirmType == "password" ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#9ca3af"
                          className="size-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                          <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                          <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#9ca3af"
                          className="size-4"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                          <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                        </svg>
                      )}
                    </span>
                  </div>
                </div>

                <div className="col-span-4 space-y-3 -mt-1">
                  <label
                    for="MarketingAccept"
                    className="flex gap-4 items-center"
                  >
                    <span className="text-sm text-black">
                      <span className="text-red-500">*</span>
                      <b>Password harus memiliki minimal 8 karakter</b>
                    </span>
                  </label>
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4 mt-2">
                  <button
                    onClick={register}
                    className="inline-block shrink-0 rounded-md border border-[#776B5D] bg-[#776B5D] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#776B5D] focus:outline-none active:text-white hover:rotate-2 hover:scale-110 active:bg-[#776d5b]"
                  >
                    Sign Up
                  </button>

                  <p className="mt-4 text-sm text-gray-700 sm:mt-0">
                    Already have an account?{" "}
                    <a href="/sign-in" className="text-[#776b5d] underline">
                      Sign In
                    </a>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default SignUp;
