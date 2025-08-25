"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const genderData = [
  { name: "男性", value: 400 },
  { name: "女性", value: 600 },
];

const ageData = [
  { name: "10代", value: 100 },
  { name: "20代", value: 300 },
  { name: "30代", value: 250 },
  { name: "40代", value: 200 },
  { name: "50代", value: 150 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">さいたま市ダッシュボード</h1>
      <div className="flex flex-wrap justify-center">
        <div className="m-4">
          <h2 className="text-2xl font-semibold text-center mb-4">男女比</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={genderData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="m-4">
          <h2 className="text-2xl font-semibold text-center mb-4">年齢比</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={ageData}
              cx={200}
              cy={200}
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {ageData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </main>
  );
}
