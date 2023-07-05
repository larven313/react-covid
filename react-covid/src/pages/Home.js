import Footer from "../components/Footer";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import data2 from "./../utils/constants/provinces";
import axios from "axios";
import RegionCards from "../components/RegionCards";

function Home() {
  const [cases, setCase] = useState([]);
  const [provinces, setProvinces] = useState(data2.provinces);
  const [regionsCases, SetRegionCases] = useState([]);

  const fetchTotalCase = async () => {
    const response = await axios(`
    https://covid-fe-2023.vercel.app/api/global.json
    `);
    setCase(response.data.global);
  };

  const fetchTotalRegionsCases = async () => {
    const response = await axios(`
    https://covid-fe-2023.vercel.app/api/global.json
    `);
    SetRegionCases(response.data.regions);
  };

  useEffect(() => {
    fetchTotalCase();
    fetchTotalRegionsCases();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Cards
        title="Global Situation"
        subtitle="Data Covid Berdasarkan Global"
        cards={cases}
      />
      <RegionCards cases={regionsCases} />
      <Footer />
    </div>
  );
}

export default Home;
