import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Warga from "./pages/warga/Index";
import DetailWarga from "./pages/warga/DetailWarga";
import Organisasi from "./pages/organisasi/Organisasi";
import WargaPendatang from "./pages/wargaPendatang/WargaPendatang";
import EditWargaPendatang from "./pages/wargaPendatang/Edit";
import TambahWargaPendatang from "./pages/wargaPendatang/Tambah";
import Soerat from "./pages/soerat/Soerat";
import EditSoerat from "./pages/soerat/Edit";
import TambahSoerat from "./pages/soerat/Tambah";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/warga" element={<Warga />} />
          <Route path="/detail-warga/:id" element={<DetailWarga />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/warga-pendatang" element={<WargaPendatang />} />
          <Route
            path="/edit-warga-pendatang"
            element={<EditWargaPendatang />}
          />
          <Route
            path="/tambah-warga-pendatang"
            element={<TambahWargaPendatang />}
          />
          <Route path="/soerat" element={<Soerat />} />
          <Route path="/edit-soerat" element={<EditSoerat />} />
          <Route path="/tambah-soerat" element={<TambahSoerat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
