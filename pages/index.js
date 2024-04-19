import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OYO</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-4 md:mx-20">
        <div className="my-8 md:my-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            layout="responsive"
            width={200}
            height={200}
            className="h-80 w-full object-cover"
          />
        </div>
        <div className="mb-8">
          <Image
            src={"/banner2.avif"}
            alt="banner1"
            layout="responsive"
            width={200}
            height={200}
            className="h-44 w-full object-cover"
          />
        </div>
        <Header4 />
        <div className="mb-8">
          <p className=" text-center text-3xl font-bold text-green-400">We Are Available All Over <span className=" text-blue-400">World</span></p>
          <Image
            src={"https://assets.oyoroomscdn.com/cmsMedia/b44cad94-daf3-4989-b4d6-8b22487c589a.png"}
            alt="banner1"
            layout="responsive"
            width={5000}
            height={5000}
            className="w-full h-full  object-contain"
          />
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
