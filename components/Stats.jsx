"use client";

import CountUp from "react-countup";

const statsData = [
  {
    value: "1.2",
    type: "Hotels",
    unit: "k",
  },
  {
    value: "4.8",
    type: "Rooms",
    unit: "k",
  },
  {
    value: "186",
    type: "Countries",
    unit: "null",
  },
];
const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-y-4 my-10 ">
      {statsData.map((item, index) => {
        return (
          <div key={index} className="flex ml-4 gap-x-5">
            <div className="flex items-baseline gap-x-4 ">
              <h3 className="h3 text-soft_green">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={6}
                  separator=""
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                />
              </h3>

              <div className=" text-black font-semibold">{item.type}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
