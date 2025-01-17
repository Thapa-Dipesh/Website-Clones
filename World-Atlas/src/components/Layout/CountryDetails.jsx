import { useEffect, useState, useTransition } from "react";
import { useParams } from "react-router-dom";
import { getCountryData } from "../../api/postApi";
import { CountryCard } from "./CountryCard";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section container">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
};
