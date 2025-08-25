// Mock Data for the dashboard
const userData = {
  genderRatio: [
    { name: 'Male', value: 45, color: 'bg-blue-500' },
    { name: 'Female', value: 55, color: 'bg-pink-500' },
  ],
  ageRange: [
    { range: '18-24', value: 25, color: 'bg-teal-500' },
    { range: '25-34', value: 35, color: 'bg-indigo-500' },
    { range: '35-44', value: 20, color: 'bg-purple-500' },
    { range: '45+', value: 20, color: 'bg-orange-500' },
  ],
  location: [
    { city: 'Tokyo', value: 40 },
    { city: 'Osaka', value: 25 },
    { city: 'Nagoya', value: 15 },
    { city: 'Fukuoka', value: 10 },
    { city: 'Other', value: 10 },
  ],
};

// Helper function to calculate percentages for the bar chart
const totalAge = userData.ageRange.reduce((acc, curr) => acc + curr.value, 0);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">User Dashboard</h1>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Gender Ratio Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Gender Ratio</h2>
          <div className="flex-grow flex flex-col justify-center">
            <div className="w-full bg-gray-200 rounded-full h-8 dark:bg-gray-700 flex">
              {userData.genderRatio.map((gender) => (
                <div
                  key={gender.name}
                  className={`${gender.color} h-8 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-l-full rounded-r-full`}
                  style={{ width: `${gender.value}%` }}
                >
                  {`${gender.name} ${gender.value}%`}
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-4">
              {userData.genderRatio.map((gender) => (
                <div key={gender.name} className="flex items-center">
                  <span className={`w-4 h-4 rounded-full ${gender.color} mr-2`}></span>
                  <span>{gender.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Age Range Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Age Range</h2>
          <div className="flex-grow flex items-end justify-around space-x-2">
            {userData.ageRange.map((age) => (
              <div key={age.range} className="flex flex-col items-center">
                <div
                  className={`${age.color} w-12 rounded-t-lg`}
                  style={{ height: `${(age.value / totalAge) * 200}px` }}
                ></div>
                <span className="text-sm mt-2">{age.range}</span>
                <span className="text-xs font-bold">{age.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <ul className="space-y-4">
            {userData.location.map((loc) => (
              <li key={loc.city}>
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium">{loc.city}</span>
                  <span className="text-sm font-medium">{loc.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-green-500 h-2.5 rounded-full"
                    style={{ width: `${loc.value}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
