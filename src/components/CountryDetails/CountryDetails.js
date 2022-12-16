import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetails = () => {
  const { countryName } = useParams();

  const [details, setDetails] = useState([]);
  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data[0]));
  }, []);

  return (
    <div>
      {details?.name?.common ? (
        <div>
          <h1 className=" text-center text-3xl my-10 font-semibold text-green-700">
            Details About {details?.name?.common}
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
        <h1 className="my-10 font-semibold text-center text-3xl text-red-600">
          Not Found | 404{" "}
        </h1>
      )}
    </div>
  );
};

export default CountryDetails;