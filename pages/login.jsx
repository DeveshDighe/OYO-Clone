import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    if (res?.data.success) {
      // Cookies.set("user", res.data.token, { expires: 7 });
      toast.success(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res?.data.success) {
        Cookies.set("user", res.data.token, { expires: 7 });
        toast.success(res.data.msg);
        router.back();
      }
    } catch (error) {
      toast.error(error.response.data.msg);
      console.log(error, "errorr aya");
    }
  };

  return (
    <div>
      <Head>
        <title>OYO - Login!</title>
      </Head>
      <div className="flex h-[990px] justify-center items-center relative bg-login-background bg-no-repeat  bg-cover opacity-85">
        <div className="absolute inset-0 bg-black opacity-40 flex"></div>
        <div className="absolute w-full top-10 px-20 flex max-md:flex-col items-center text-white h-auto">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl max-sm:hidden">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>
        <div className="flex justify-center items-center h-[600px] w-full md:w-9/12 z-10">
          <div className="text-white w-full over max-w-[30rem] max-sm:max-w-72 border bg-slate-50">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-500 to bg-red-700 text-lg font-bold max-sm:text-sm max-sm:px-2 text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10 pb-8 md:pb-40 text-red-500">
              <h3 className="text-5xl font-bold my-5">Login / Signup</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your email and password to continue
              </p>
              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="outline-none border my-3 border-black px-3 py-1 w-full h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className="outline-none border my-3 border-black px-3 py-1 w-full h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password..."
                className="outline-none border my-3 border-black px-3 py-1 w-full h-10"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login" : "Sign Up"}
              </button>
              <p className="my-1 text-xl">
                <span>
                  {login
                    ? "Don't have an account?"
                    : "Already have an account?"}
                </span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={handleToggle}
                >
                  {" "}
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-2">
                By continuing, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
