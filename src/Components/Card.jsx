import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1512446816042-444d641267d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFtYXpvbnxlbnwwfHwwfHx8MA%3D%3D",
      name: "Amazon Basics.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus",
      stock: true,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664970900401-0756aa4d8459?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhaWx5JTIwb2JqZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
      name: "Daily Objects",
      description: "Lorem ipsum dolor sit amet consectet",
      stock: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1663926032043-7908766f5c52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlfGVufDB8fDB8fHww",
      name: "APPLE",
      description: "Lorem ipsum dolor sit amet consectet",
      stock: true,
    },
  ];


  const handleClick = (stock , name) => {
    if(stock){
      alert(`${name} is now available`)
    } else {
      alert(`${name} is currently out of stock`)
    }
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-4">
      {data.map((e, index) => (
        <div
          key={index}
          className="w-52 bg-zinc-100  rounded-md overflow-hidden"
        >
          <div className="w-full h-32 bg-zinc-300 ">
            <img
              className="object-cover w-full h-full rounded-t-sm"
              src={e.image}
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{e.name}</h2>
            <p className="text-xs mt-5">{e.description}</p>
            <button onMouseOver={()=>handleClick(e.stock , e.name )} className={`mt-3 px-4 py-1 text-white text-sm ${e.stock ? "bg-blue-400" : "bg-red-400"} rounded font-normal`}>
              {e.stock ? `In Stock` : `Out of Stock`}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
