import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowCountry from "../ShowCountry/ShowCountry";
import Spinner from "../Spinner/Spinner";

const Home = () => {
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const [searchText, setSearchText]=useState('')
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);


  const handleSearch =()=>{
    setSearchText(inputRef.current.value)
    console.log(inputRef.current.value);
    const path = `/country-details/${inputRef.current.value}`
    navigate(path)
  }


  return (
<div>
{
  countries.length? (
    <div className="my-10">
      <p className="text-3xl text-center font-semibold font-mono">
        There is information for {countries?.length} countries.
      </p>

      <div className="text-center">
        <input
          className="py-2 px-3 my-3 text-xl border border-green-700 rounded-l-lg"
          type="text"
          placeholder="Country Name" 
          ref={inputRef}
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
    </div>):(<Spinner></Spinner>)
}
</div>
  );
};

export default Home;
