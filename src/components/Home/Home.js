import React, { useEffect, useState } from "react";
import ShowCountry from "../ShowCountry/ShowCountry";

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleSearch =()=>{
   
  }
  return (
    <div className="my-10">
      <p className="text-3xl text-center font-semibold font-mono">
        There is information for {countries.length} countries.
      </p>

      <div className="text-center">
        <input
          className="py-2 px-3 my-3 text-xl border border-green-700 rounded-l-lg"
          type="text"
          placeholder="Country Name"
        ></input>
        <button onClick={handleSearch} className="border rounded-r-lg bg-green-700 text-white ml-2 py-2 px-3 my-3 text-xl">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {countries.map((country) => (
          <ShowCountry key={country.cca3} country={country}></ShowCountry>
        ))}
      </div>
    </div>
  );
};

export default Home;
