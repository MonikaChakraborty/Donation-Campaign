import { Link } from "react-router-dom";

const CategoriesCard = ({category}) => {


    const {image, category_name, title, card_bg_color, category_bg_color, text_btn_color} = category || {}

    const cardBackgroundColor = {
        backgroundColor: card_bg_color,
    };


    const categoryBackgroundColor = {
        backgroundColor: category_bg_color,
        padding: "0.2rem",
        maxWidth: "100px",
        borderRadius: "0.25rem",
    };

    const cardTextColor = {
      color: text_btn_color,
    }

  return (
    <div>
      <Link to={`/categories/${title}`}>
      <div className="card card-compact bg-base-100 shadow-xl" style={cardBackgroundColor}>
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 style={{...categoryBackgroundColor, ...cardTextColor} }className="flex justify-center text-[14px] font-medium">{category_name}</h2>
          <p className="text-xl font-semibold" style={cardTextColor}>{title}</p>

          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}

        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;
