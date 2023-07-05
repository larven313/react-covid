import React from "react";
import Navbar from "../../components/Navbar";
import AddCaseForm from "../../components/AddCaseForm";
import Hero from "../../components/Hero";
import Provinces from "../../components/Provinces";
import { useState, useEffect } from "react";
import axios from "axios";
import data from "../../utils/constants/provinces";
import Footer from "../../components/Footer";

const Provinsi = () => {
  const [provinces, setProvinces] = useState(data.provinces);

  return (
    <div>
      <Navbar />
      <Hero />
      <Provinces
        provinces={provinces}
        title="Provinsi"
        subtitle="Data Covid Berdasarkan Provinsi"
      />
      <AddCaseForm provinces={provinces} setProvinces={setProvinces} />
      <Footer />
    </div>
  );
};

export default Provinsi;
