import { useEffect, useState } from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';


const Statistics = () => {
  const [yourDonation, setYourDonation] = useState([]);


  const [totalDonation, setTotalDonation] = useState(0);



  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem('donations'));

    if (donateItems) {
      setYourDonation(donateItems);
    }

  }, []);

//   console.log(totalDonation.length);

  useEffect(() => {
    
    fetch('../../../public/categories.json')
    .then(res => res.json())
    .then(data => setTotalDonation(data))
     
    //   console.log(totalDonation.length);

  }, [totalDonation.length]);


//   const data = [
    
//     { name: 'Your Donation', value: yourDonation.length },
//   ];

const totalDonationValue = totalDonation.length - yourDonation.length;
const yourDonationValue = yourDonation.length;

// console.log(totalDonationValue, yourDonationValue);


const data = [
    { name: 'Total Donation', value: totalDonationValue},
    { name: 'Your Donation', value: yourDonationValue },
  ];
  

  const COLORS = ['#FF444A', '#00C49F'];

const RADIAN = Math.PI/180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text className='font-bold text-xl' x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

    return (
      <div>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='flex justify-center items-center gap-16 mt-5 text-[#0B0B0B] text-lg font-medium'>
        <div className='flex justify-center items-center'>
        <p>Your Donation: </p>
        <div className=' h-4 px-12 bg-[#00C49F] ml-3'></div>
        </div>

        <div className='flex justify-center items-center'>
        <p>Total Donation: </p>
        <div className=' h-4 px-12 bg-[#FF444A] ml-3'></div>
        </div>
        
        </div>
      </div>
    );
  };
  
  export default Statistics;
  