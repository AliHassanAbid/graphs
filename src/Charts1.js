import React from "react";
import {
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area
} from "recharts";

// data for the chart
const data = [
  {
    name: "Ahmed ali",
    total: 590,
    prospects: 800,
    warm: 100,
    cold: 490,
    hired: 490,
    rejected: 390,
  },
  {
    name: "Ali",
    total: 790,
    prospects: 800,
    warm: 50,
    cold: 490,
    hired: 590,
    rejected: 190,
  },
  {
    name: "Waseem",
    total: 490,
    prospects: 800,
    warm: 200,
    cold: 400,
    hired: 290,
    rejected:190,
  },
  {
    name: "Ahsan",
    total: 700,
    prospects: 800,
    warm: 150,
    cold: 490,
    hired: 490,
    rejected: 590,
  },
  {
    name: "usama",
    total: 300,
    prospects: 800,
    warm: 100,
    cold: 490,
    hired: 90,
    rejected: 190,
  },
  {
    name: "Faizan",
    total: 990,
    prospects: 800,
    warm: 500,
    cold: 490,
    hired: 90,
    rejected: 490,
  },
  {
    name: "Faizan2",
    total: 990,
    prospects: 800,
    warm: 500,
    cold: 490,
    hired: 90,
    rejected: 490,
  },
  {
    name: "Faizan3",
    total: 990,
    prospects: 800,
    warm: 500,
    cold: 490,
    hired: 90,
    rejected: 490,
  },
];
// chart component





export default function Chart1() {
  return (
      <ComposedChart
        width={500}
        height={350}
        data={data}
        margin={{
          top: 50,
          right: 0,
          bottom: 40,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#037571" strokeDasharray="3 3" vertical={false}/>
        <XAxis
          dataKey="name"
          label={{ position: "insideBottomRight", offset: 0 }}
          angle={-45}
          stroke="#037571"
          interval={0}
          textAnchor={"end"}
          axisLine={false}
          allowDuplicatedCategory={false}
          padding={{ right:20 }}
          />
        <YAxis label={{ angle: -90, position: "insideLeft" }} stroke="#037571" type="number"   domain={[0, 'auto']}/>
        <Tooltip />
        <Legend
       verticalAlign="top"
       layout="vertical"
       align="right"
       wrapperStyle={{
           paddingLeft: "10px"
       }}
         />
        <Area type="monotone" dataKey="total" stroke="#037571" fill="#037571" />
        <Line type="monotone" dataKey="rejected" stroke="#ff7300" strokeWidth="2" />
        <Line type="monotone" dataKey="warm" stroke="#33ECFF" strokeWidth="2" />
        <Line type="monotone" dataKey="hired" stroke="#33FF58" strokeWidth="2" activeDot={{r: 3}}/>
      </ComposedChart>
  );
}
