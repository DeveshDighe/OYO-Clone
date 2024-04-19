import Link from "next/link";
import { useState } from "react";

const Header3 = () => {
  const [city, setCity] = useState("");

  return (
    <div className="relative bg-gray-900 h-72 cursor-default">
      <img
        src="https://assets.oyoroomscdn.com/cmsMedia/115d178d-ef59-4212-a6ed-953eb4ce8241.jpg"
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="p-5 text-center">
          <h2 className="text-4xl max-sm:text-lg text-white font-bold">
            Over 157,000 hotels and homes across 35 countries
          </h2>
          <div className="flex justify-center my-5 mx-4 sm:mx-20"> {/* Adjusted margin for small screens */}
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
              onChange={(e) => {
                setCity(e.target.value);
                console.log(e.target.value, 'e,tarhet');
              }}
            />
            <button
              type="submit"
              className="h-16 px-3 py-2 w-full sm:w-72 bg-green-400 hover:bg-green-600 text-white text-xl"
            >
              <Link href={`/hotels?city=${city}`}>Search</Link>
            </button>
          </div>
          <div className="flex flex-row sm:flex-row justify-center items-center mx-4 sm:mx-20 my-5 font-bold"> {/* Adjusted margin for small screens */}
            <button
              type="submit"
              className="h-16 max-sm:text-sm px-3 py-2 hover:cursor-pointer text-white mr-0 sm:mr-5 mb-5 sm:mb-0" // Adjusted margin for small screens
            >
              Continue your search
            </button>
            <button
              type="submit"
              className="h-16 px-3 py-2 max-sm:text-sm hover:cursor-pointer border-2 border-white text-white mr-0 sm:mr-5 hover:bg-gray-500 rounded-xl" // Adjusted margin for small screens
            >
              l
              Homestay in India hotels
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header3;
