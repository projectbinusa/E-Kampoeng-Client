import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Warga from "./pages/warga/Index";
import TambahWarga from "./pages/warga/Tambah";
import DetailWarga from "./pages/warga/DetailWarga";
import Organisasi from "./pages/organisasi/Organisasi";
import WargaPendatang from "./pages/wargaPendatang/WargaPendatang";
import EditWargaPendatang from "./pages/wargaPendatang/Edit";
import TambahWargaPendatang from "./pages/wargaPendatang/Tambah";
import Soerat from "./pages/soerat/Soerat";
import EditSoerat from "./pages/soerat/Edit";
import TambahSoerat from "./pages/soerat/Tambah";
import WargaOrganisasi from "./pages/wargaOrganisasi/WargaOrganisasi";
import RT from "./pages/rt/Rt";
import TambahRT from "./pages/rt/Tambah";
import EditRT from "./pages/rt/Edit";
import Kk from "./pages/kk/Kk";
import TambahKk from "./pages/kk/Tambah";
import EditKk from "./pages/kk/Edit";
import TagBerita from "./pages/tagBerita/Tag";
import TambahTagBerita from "./pages/tagBerita/Tambah";
import EditTagBerita from "./pages/tagBerita/Edit";
import CategoryBerita from "./pages/categoryBerita/CategoryBerita";
import TambahCategoryBerita from "./pages/categoryBerita/Tambah";
import EditCategoryBerita from "./pages/categoryBerita/Edit";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/warga" element={<Warga />} />
          <Route path="/tambah-warga" element={<TambahWarga />} />
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
          <Route path="/warga-organisasi" element={<WargaOrganisasi />} />
          <Route path="/rt" element={<RT />} />
          <Route path="/tambah-rt" element={<TambahRT />} />
          <Route path="/edit-rt" element={<EditRT />} />
          <Route path="/kk" element={<Kk />} />
          <Route path="/tambah-kk" element={<TambahKk />} />
          <Route path="/edit-kk" element={<EditKk />} />
          <Route path="/tag-berita" element={<TagBerita />} />
          <Route path="/tambah-tag-berita" element={<TambahTagBerita />} />
          <Route path="/edit-tag-berita/:id" element={<EditTagBerita />} />
          <Route path="/category-berita" element={<CategoryBerita />} />
          <Route path="/tambah-category-berita" element={<TambahCategoryBerita />} />
          <Route path="/edit-category-berita" element={<EditCategoryBerita />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
