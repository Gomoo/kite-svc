const data = [
  {
    bigText: "100+",
    smallText: "Supported platforms",
  },
  {
    bigText: "24/7",
    smallText: "Customer support",
  },
  {
    bigText: "$15M",
    smallText: "Completed transactions",
  },
];

function Stats() {
  return (
    <div className="h-[59px] md:h-[198px] bg-[#001430] w-full mt-12 px-4 md:px-10 lg:px-20 flex justify-between items-center">
      {data.map((item, index) => (
        <div key={index} className="text-white">
          <h3 className="stats__big__text">{item.bigText}</h3>
          <p className="stats__small__text">{item.smallText}</p>
        </div>
      ))}
    </div>
  );
}

export default Stats;
