"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);
  const [Book, setBook] = useState('Book');

  const router = useRouter()

  const handlePayment = () => {
    setBook('Booking')
    setTimeout(() => {
      setBook('Booked')
    }, 1000);
    setTimeout(() => {
      router.push('/')
    }, 1500);
  }

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className=" w-3/4 mx-auto my-10 border p-3 max-md:w-full max-md:mx-3 rounded-md">
        <img
          src={hotel?.banner}
          alt="hotel"
          width={4000}
          height={4000}
          className=" w-full h-[500px] my-5 object-cover"
        />
        <div className="flex justify-between mb-7 flex-wrap max-md:justify-center gap-3">
          {hotel
            ? hotel.gallery?.map((ele) => {
              return (
                <img
                  key={ele}
                  src={ele}
                  alt="hotel"
                  width={200}
                  height={200}
                  className=" w-64 h-28 object-cover  "
                />
              );
            })
            : ""}
        </div>
        <div className=" ">
          <h3 className=" text-3xl font-bold">{hotel?.name}</h3>
          <p className=" text-xl my-5 text-justify">{hotel?.description}</p>
          <p className=" text-3xl font-bold my-5">Facilities : </p>
          <ul className=" flex text-xl  flex-wrap">
            {hotel
              ? hotel.facilities?.map((ele) => {
                return (
                  <li
                    key={ele.name}
                    className=" mr-10 mb-3 flex items-center"
                  >
                    <span>
                      <img
                        src={ele.img}
                        width={200}
                        height={200}
                        className="w-8 h-8 rounded-full"
                      />
                    </span>
                    <span className="ml-5">{ele.name}</span>
                  </li>
                );
              })
              : ""}
          </ul>
          {auth ? (
            // <Link href={`/payment/${hotel?._id}`}>
            <div className=" grid grid-cols-2 mt-12 gap-x-6">
              <button className=" w-full h-14 rounded-lg bg-blue-400 text-lg ">
                Price : &#8377; {hotel?.price}
                </button>
                <button onClick={handlePayment} className=" w-full h-14 rounded-lg bg-red-400  text-lg">
                  {Book}
                </button>

            </div>

            // </Link>
          ) : (
            <span className=" text-2xl">
              Please{" "}
              <Link href={"/login"} className=" text-blue-500">
                Log in
              </Link>{" "}
              to get new Offers !
            </span>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};
export async function getServerSideProps(ctx) {
  console.log(ctx.query.id, 'IDIDIDIDI');
  let singleHotelData = null;

  try {
    const res = await axios.get(`${process.env.Host_URl}/api/hotels/${ctx.query.id}`)
    singleHotelData = res.data.hotel
    console.log(res.data, 'reserererererererereerer');
  } catch (error) {
    console.log('FAFAFAF');
    console.error('Error in fetching hotel Data', error)
  }

  return {
    props: {
      hotel: singleHotelData
    }
  }
}

export default SingleHotel