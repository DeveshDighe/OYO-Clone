import axios from "axios";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Header4 = () => {
  const emailRef = useRef('');

  useEffect(() => {
    console.log(emailRef.current.value, 'email');
  }, [emailRef]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    const email = emailRef.current.value

    try {
      const res = await axios.post('/api/user/notify', {email} )
      if (res.data.success) {
        console.log(res.data , ' res.data');
        alert(res.data.msg)
      }
    } catch (error) {
      alert(error.response.data.msg)
      console.log(error, 'error');
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row max-md:py-2 justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center md:w-1/2 max-sm:w-full">
        <Image
          src={"/fire.jpg"}
          alt="Exclusive deals"
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5 max-sm:w-10 max-sm:h-10" // Adjusted image size for extra-small screens
        />
        <div className="text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="md:w-1/2 mt-4 md:mt-0 md:ml-5"> {/* Wrap input and button in a form */}
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            className="px-6 py-3 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-80 h-16 outline-none border border-gray-300"
            ref={emailRef}
            placeholder="e.g. john@gmail.com"
          />
          <button
            type="submit" 
            className="w-full md:w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer"
          >
            Notify
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header4;

