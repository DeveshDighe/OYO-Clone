import axios from "axios";
import { useEffect, useState } from "react";

const Filters = ({ price, setPrice, handlePrice, checkedList, setCheckedList }) => {
  const [list, setList] = useState([]);

  const fetchFacilities = async () => {
    try {
      const { data } = await axios.get(`/api/facilities`);
      if (data?.facilities) {
        setList(data.facilities);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheckList = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setCheckedList([...checkedList, value]);
    } else {
      setCheckedList(checkedList.filter(item => item !== value));
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return (
    <div className="rounded-md m-5 p-5 sticky top-1">
      <div className="mb-5">
        <p className=" text-3xl text-center font-bold mb-6">Filter Hotels</p>
        <label htmlFor="price" className="text-xl mr-3 font-bold">Price :</label>
        <input
          type="range"
          name="price"
          id="price"
          min={1000}
          max={3500}
          onChange={(e) => setPrice(e.target.value)}
          defaultValue={price || 0}
          className="w-full"
        />
        <span className="ml-3">&#8377; {price || ""}</span>
      </div>
      <button
        className="w-full h-10 bg-green-300 text-white font-semibold rounded-md mb-5"
        onClick={handlePrice}
      >
        Search
      </button>
      <div>
        <h3 className="text-xl font-bold mb-3">Filter by Facilities:</h3>
        {list?.map((facility) => (
          <label key={facility} className="block mb-2">
            <input
              type="checkbox"
              name="checkbox"
              value={facility}
              onChange={handleCheckList}
              className="mr-2 leading-tight"
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filters;
