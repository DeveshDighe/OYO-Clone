import Filters from "@/components/Filters";
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Hotel from "@/components/Hotel";
import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";

const Hotels = ({ hotels }) => {
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);

  const handleCheckList = async () => {
    const { data } = await axios.get(`/api/facilities/search?val=${checkedList}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  useEffect(() => {
    if (checkedList) {
      handleCheckList();
    }
  }, [checkedList]);

  const handlePrice = async () => {
    const { data } = await axios.get(`/api/facilities/range?price=${price}`);
    if (data?.hotels) {
      setList(data.hotels);
    }
  };

  return (
    <>
    <Head>
        <title>OYO - Hotels</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header1 />
      <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-3 min-w-[200px] lg:min-w-[250px] ">
          {/* Adjusted width using responsive classes */}
          <Filters
            price={price}
            setPrice={setPrice}
            handlePrice={handlePrice}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        </div>
        <div className="col-span-12 lg:col-span-9">
          {list.length > 0
            ? list.map((e) => (
                <div className="m-5" key={e._id}>
                  <Hotel e={e} />
                </div>
              ))
            : hotels
            ? hotels.map((e) => (
                <div className="m-5" key={e._id}>
                  <Hotel e={e} />
                </div>
              ))
            : ""}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export async function getServerSideProps(ctx) {
  let data = null;

  try {
    const res = await axios.get(`${process.env.Host_URl}/api/hotels?city=${ctx.query.city}`);
    data = res.data.hotels;
  } catch (error) {
    console.error('Error fetching hotels:', error.response.data.msg);
  }

  return {
    props: {
      hotels: data || [], // Ensure hotels is always an array
    },
  };
}

export default Hotels;
