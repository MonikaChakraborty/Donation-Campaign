// import { useEffect } from "react";
// import { useState } from "react";
// // import DonationCard from "./DonationCard";
// import CategoriesCard from "../../components/Header/Categories/CategoriesCard";

// const Donation = ({categories}) => {

  

//     const [donations, setDonations] = useState([]);

//     const [notFound, setNotFound] = useState(false);


//     useEffect(() => {

        


//         const donateItems = JSON.parse(localStorage.getItem('donations'));


//         if(donateItems){
//             setDonations(donateItems);
//         }

//         else{
//             setNotFound('No Donation Found');
//         }

//     }, [])


//     return (
//         <div>
//             { notFound ? ( <p className="flex justify-center items-center h-[70vh] text-4xl font-semibold">{notFound}</p> 
//             ) : 
            
//             (
//                 <div>
//                   <div>
//                     {donations.map((donation, index) => (
//                       <div key={index}>
                        

//                         <CategoriesCard
//                           category={donation}
//                           price={donation.price}
//                           textBtnColor={donation.text_btn_color}
//                         />
//                       hey
                      
//                       </div>

                    
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         };
        
//         export default Donation;
        
        
        
import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const [seeDonations, setSeeDonations] = useState(4);

  useEffect(() => {
    const donateItems = JSON.parse(localStorage.getItem("donations"));

    if (donateItems) {
      setDonations(donateItems);
    } else {
      setNotFound("No Donation Found");
    }
  }, []);

  return (
    <div>
      {notFound ? (
        <p className="flex justify-center items-center text-4xl font-semibold">{notFound}</p>
      ) : (
        <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center pb-14">
          <div className="pb-8 grid grid-cols-2 gap-5">
            {donations.slice(0, seeDonations).map((donation, index) => (
              <div key={index}>
                <DonationCard
                  category={donation}
                  price={donation.price}
                  textBtnColor={donation.text_btn_color}
                />
              </div>
            ))}
          </div>

          
         {
            donations.length > 4 && <div className={seeDonations === donations.length ? 'hidden' : ''}>
            <button onClick={() => setSeeDonations(donations.length)} className="px-4 py-2 text-lg font-medium rounded-lg bg-teal-600 hover:bg-teal-800 text-white">See All</button>
            </div>
         }
          
        </div>
      )}
    </div>
  );
};

export default Donation;
