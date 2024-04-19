import Link from "next/link";

const Header2 = () => {
  const List = [
    {
      name: "All",
    },
    {
      name: "Bangalore",
    },

    {
      name: "Mumbai",
    },
    {
      name: "Delhi",
    },
    {
      name: "Hyderabad",
    },
  ];
  return (
    <div>
      <div className="flex px-10 max-sm:px-2 max-sm:text-sm py-3 bg-gray-100 justify-between">
        {
            List.map((e)=>{
                return(
                    <Link key={e.name} href={`/hotels?city=${e.name}`}>{e.name}</Link>
                    // <Link >Search</Link>
                    
                )
            })
        }
      </div>
    </div>
  );
};

export default Header2;