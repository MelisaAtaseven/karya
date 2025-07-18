// src/admin/layouts/AdminLayout.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Home from "../../pages/Home/Home";
import AsilNunX from "../../pages/AsilNunX/AsilNunX";
import AboutUs from "../../pages/AboutUs/AboutUs";
import KimyasalAnkraj from "../../pages/KimyasalAnkraj/KimyasalAnkraj";
import TelBeton from "../../pages/TelBeton/TelBeton";
import ContactPage from "../../pages/ContactPage/ContactPage";
import Poliuretan from "../../pages/PoliuretanEnjeksiyon/PoliuretanEnjeksiyon";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <div className="content-area">
        <Routes>
          <Route path="home" element={<Home />} />
          {/* Diğer admin rotalarını ekle */}
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="asilnunx" element={<AsilNunX />} />
          <Route path="kimyasalankraj" element={<KimyasalAnkraj />} />
          <Route path="telbeton" element={<TelBeton />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="Poliuretan" element={<Poliuretan />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminLayout;
