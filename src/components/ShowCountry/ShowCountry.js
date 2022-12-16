import React from "react";
import { useNavigate } from "react-router-dom";

const ShowCountry = (props) => {
  const { name, flags } = props.country;
  const navigate = useNavigate()
  const countryDetails=()=>{
    const path = `/country-details/${name.common}`
    navigate(path)

  }
  return (
    <div className="grid grid-cols-3 border border-green-700 rounded-lg">
      <div className="col-span-2 ml-2 flex align-middle justify-center items-center">
      
          <div className="ml-2 text-center my-1">
          <p className="text-2xl font-semibold mb-1">
            {name.common}
          </p>

          <button onClick={countryDetails} className="mt-1 text-xl font-semibold border border-green-500 px-8 py-1 rounded-lg hover:bg-green-700 hover:text-white">
            See Details
          </button>
          </div>
        
      </div>
      <div className="flex align-middle p-1">
        <img className="rounded-lg" src={flags.png} alt="" />
      </div>
    </div>
  );
};

export default ShowCountry;
