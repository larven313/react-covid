import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import Navbar from "../../components/Navbar";
import Provinces from "../../components/Provinces";
import AddCaseForm from "../../components/AddCaseForm";
import Hero from "../../components/Hero";
import { useEffect, useState } from "react";
import data from "./../../utils/constants/indonesia";
import data2 from "./../../utils/constants/provinces";
import axios from "axios";

const Indonesia = () => {
  const [cards, setCards] = useState([]);
  const [provinces, setProvinces] = useState([]);

  const fetchTotalCase = async () => {
    const response = await axios(`
    https://covid-fe-2023.vercel.app/api/indonesia.json
    `);

    setCards(response.data.indonesia);
  };

  const fetchCaseProvinces = async () => {
    const response = await axios(`
    https://covid-fe-2023.vercel.app/api/indonesia.json
    `);
    setProvinces(response.data.regions);
  };

  useEffect(() => {
    fetchTotalCase();
    fetchCaseProvinces();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Cards
        cards={cards}
        title="Indonesia Situatuion"
        subtitle="Data Covid Berdasarkan Indonesia"
      />
      <Provinces
        provinces={provinces}
        title="Situation by Provinces"
        subtitle="Data Covid Berdasarkan Provinsi"
      />
      <Footer />
    </>
  );
};
export default Indonesia;
