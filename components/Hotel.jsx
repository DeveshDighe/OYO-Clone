import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="border border-gray-400 rounded-lg mb-5 p-3">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/3 lg:mr-5 mb-5 lg:mb-0">
          <Image
            src={e?.banner}
            alt="hotel"
            width={300}
            height={200}
            className="object-cover w-full h-48 lg:h-60 rounded-lg mb-3 lg:mb-0"
          />
          <div className="flex justify-between w-full mt-3 overflow-hidden">
            {e?.gallery?.map((ele, index) => (
              <img
                key={index}
                src={ele}
                alt="hotel"
                className="object-cover photo w-20 h-20 rounded-lg mb-2 lg:mr-2"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between lg:w-2/3 pb-2">
          <div>
            <h2 className="font-bold text-3xl mb-3 line-clamp-1">{e?.name}</h2>
            <p className="text-justify text-lg line-clamp-3 mb-5">{e?.description}</p>
            <div className="text-lg mb-5">
              <span className="font-bold">Facilities:</span>
              <ul className="flex flex-wrap mt-2 ">
                {e?.facilities?.map((ele, index) => (
                  <li key={index} className="flex items-center  mr-5 mb-3">
                    <img
                      src={ele.img}
                      alt={ele.name}
                      width={40}
                      height={40}
                      className=" object-contain w-10 h-10 rounded-sm mr-2"
                    />
                    <span>{ele.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="items-center grid grid-cols-2 gap-x-2">
            <button className="w-full h-12 lg:h-14 rounded-lg bg-blue-400 text-lg mr-5">
              Price: &#8377; {e?.price}
            </button>
            <Link href={`/hotels/${e?._id}`} className="text-lg lg:h-14 h-12 font-bold text-center bg-green-400 rounded-lg items-center flex justify-center text-white">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
