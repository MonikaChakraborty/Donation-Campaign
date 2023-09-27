/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";

const DonationCard = ({ category, price, textBtnColor }) => {
  const { image, category_name, title } = category || {};

  const cardBackgroundColor = {
    backgroundColor: category.card_bg_color,
  };

  const categoryBackgroundColor = {
    backgroundColor: category.category_bg_color, 
    padding: "0.2rem",
    maxWidth: "100px",
    borderRadius: "0.25rem",
    color: category.text_btn_color,
  };

  const priceColor = {
    color: category.text_btn_color,
  }

  const textBtnStyle = {
    backgroundColor: textBtnColor, 
  };

  return (
    <div className="">
     
        {/* <div className="card card-compact bg-base-100 shadow-xl" style={cardStyle}>
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body">
            <h2 style={{ ...categoryStyle }} className="flex justify-center text-[14px] font-medium">
              {category_name}
            </h2>
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-xl font-semibold">${price}</p>
            
            
              <div className="card-actions justify-end">
              <Link to={`/categories/${title}`}>
                <button className="btn btn-primary" style={textBtnStyle}>
                  View Details
                </button>
                </Link>
              </div>
            
          </div>
        </div> */}

        <div style={cardBackgroundColor} className="rounded-lg">
            <div className="flex pr-20">
            <img className="object-cover w-1/2 rounded-lg" src={image} alt="" />
            <div className="mt-8 ml-6 space-y-2">
                <h2 className="flex justify-center items-center text-[14px] font-medium"  style={categoryBackgroundColor}>{category_name}</h2>
                <p className="text-xl font-semibold text-[#0B0B0B]">{title}</p>
                
                <p style={priceColor} className="text-base font-semibold">${price}</p>
            
            <Link to={`/categories/${title}`}>
                <button className="p-2 rounded border-none text-white text-lg font-medium my-5" style={textBtnStyle}>View Details</button>
                
            </Link>
            </div>
            </div>
           
        </div>

    </div>
  );
};

export default DonationCard;
