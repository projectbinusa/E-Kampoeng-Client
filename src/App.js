import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Warga from "./pages/warga/Index";
import TambahWarga from "./pages/warga/TambahWarga";
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
import CategoryBerita from "./pages/categoryBerita/CategoryBerita";
import TambahCategoryBerita from "./pages/categoryBerita/Tambah";
import EditCategoryBerita from "./pages/categoryBerita/Edit";
import Kas from "./pages/kas/Kas";
import TambahKas from "./pages/kas/Tambah";
import EditKas from "./pages/kas/Edit";
import WilRT from "./pages/wilayahRT/Wilayah";
import TambahWilRT from "./pages/wilayahRT/Tambah";
import EditWilRT from "./pages/wilayahRT/Edit";
import ListUser from "./pages/user/ListUser";
import TambahWargaOrganisasi from "./pages/wargaOrganisasi/Tambah";
import TambahKepalaRT from "./pages/wilayahRT/TambahKepalaRT";
import ApproveSoerat from "./pages/soerat/ApproveSoerat";
import SoeratRejected from "./pages/soerat/SoeratRejected";
import SoeratDiSetujui from "./pages/soerat/SoeratDiSetujui";
import SoeratAll from "./pages/soerat/SoeratAll";
import Anggota from "./pages/organisasi/Anggota";
import Pemasukan from "./pages/kas/Pemasukan";
import Pengeluaran from "./pages/kas/Pengeluaran";
import DetailPemasukan from "./pages/kas/DetailPemasukan";
import DetailPengeluaran from "./pages/kas/DetailPengeluaran";
import Profile from "./pages/profile/Profile";
import Berita from "./pages/berita/Berita";
import DetailBerita from "./pages/berita/DetailBerita";
import BeritaByCategory from "./pages/categoryBerita/BeritaByCategory";
import SemuaBerita from "./pages/berita/SemuaBerita";
import EditBerita from "./pages/berita/EditBerita";
import EditWarga from "./pages/warga/EditWarga";

function App() {
  const role = localStorage.getItem("role");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/berita-terbaru" element={<Berita />} />
          <Route path="/edit-berita/:id" element={<EditBerita />} />
          <Route path="/warga" element={<Warga />} />
          <Route path="/edit-warga/:id" element={<EditWarga />} />
          <Route path="/tambah-warga" element={<TambahWarga />} />
          <Route path="/detail-warga/:id" element={<DetailWarga />} />
          <Route path="/organisasi" element={<Organisasi />} />
          <Route path="/e-kas" element={<Kas />} />
          <Route path="/e-kas/pemasukan" element={<Pemasukan />} />
          <Route path="/e-kas/pengeluaran" element={<Pengeluaran />} />
          <Route
            path="/e-kas/detail-pemasukan/:id"
            element={<DetailPemasukan />}
          />
          <Route path="/detail-berita/:id" element={<DetailBerita />} />
          <Route
            path="/e-kas/detail-pengeluaran/:id"
            element={<DetailPengeluaran />}
          />
          <Route
            path="/anggota-organisasi/:organisasiId"
            element={<Anggota />}
          />
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
          <Route path="/approve-soerat" element={<ApproveSoerat />} />
          <Route path="/soerat-approved" element={<SoeratDiSetujui />} />
          <Route path="/rejected-soerat" element={<SoeratRejected />} />
          <Route path="/all-soerat" element={<SoeratAll />} />
          <Route path="/edit-soerat/:id" element={<EditSoerat />} />
          <Route path="/tambah-soerat" element={<TambahSoerat />} />
          <Route path="/warga-organisasi" element={<WargaOrganisasi />} />
          <Route
            path="/tambah-warga-organisasi"
            element={<TambahWargaOrganisasi />}
          />
          <Route path="/rt" element={<RT />} />
          <Route path="/tambah-rt" element={<TambahRT />} />
          <Route path="/edit-rt" element={<EditRT />} />
          <Route path="/kk" element={<Kk />} />
          <Route path="/tambah-kk" element={<TambahKk />} />
          <Route path="/edit-kk" element={<EditKk />} />
          <Route path="/category-berita" element={<CategoryBerita />} />
          <Route path="/semua-berita" element={<SemuaBerita />} />
          <Route
            path="/category-berita/berita/:id"
            element={<BeritaByCategory />}
          />
          <Route
            path="/tambah-category-berita"
            element={<TambahCategoryBerita />}
          />
          <Route
            path="/edit-category-berita/:id"
            element={<EditCategoryBerita />}
          />
          <Route path="/e-kas" element={<Kas />} />
          <Route path="/tambah-kas" element={<TambahKas />} />
          <Route path="/edit-kas/:id" element={<EditKas />} />
          <Route path="/wilayah-rt" element={<WilRT />} />
          <Route path="/tambah-wilayah-rt" element={<TambahWilRT />} />
          <Route path="/edit-wilayah-rt/:id" element={<EditWilRT />} />
          <Route path="/tambah-kepala-rt" element={<TambahKepalaRT />} />
          <Route path="/list-user" element={<ListUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
