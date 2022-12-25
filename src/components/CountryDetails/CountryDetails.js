import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Spinner from "../Spinner/Spinner";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [details, setDetails] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    setLoading(true)
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
     setLoading(false)
  }, []);

  return (

    <div>
      {details?.name?.common ? (
        <div>
          <h1 className=" text-center text-3xl my-10 font-semibold text-black">
            Details About <span className="text-center text-4xl my-10 font-semibold text-green-700">{details?.name?.common}</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-10 my-10 bg-slate-100 py-5 px-1 rounded-lg">
            <div className=" md:order-2 my-auto">
              <img
                className="w-4/5 mx-auto"
                src={details?.flags?.png}
                alt="flag"
              />
            </div>
            <div className="p-1 md:p-2 md:order-1">
              <div className=" items-center grid grid-cols-2 mx-3 md:mx-10">
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  Name
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  {details?.name?.common}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  Official Name
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  {details?.name?.official}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  Region
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-xl font-semibold">
                  {details?.region}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  Sub-region
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  {details?.subregion}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  Area
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  {details?.area} KM<sup>2</sup>
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  Population
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  {details?.population}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  Capital
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  {details?.capital}
                </div>

                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  Independent
                </div>
                <div className=" p-1 md:p-2 my-1 border border-green-700 text-sm md:text-base font-semibold">
                  {details?.independent ? "Yes" : "No"}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </div>
  );
};

export default CountryDetails;
