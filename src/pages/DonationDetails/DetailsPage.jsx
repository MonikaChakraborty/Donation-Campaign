
const DetailsPage = ({donationDetail}) => {

    const {image, title, text_btn_color, description, price} = donationDetail || {}

    const btnBackgroundColor = {
        backgroundColor: text_btn_color,
    };

    return (
       <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center lg:w-[800px] mb-10">
        <div className="mb-5 relative">
            <img className=" h-[200px] md:h-[400px] lg:h-[500px] rounded-lg mb-8" src={image} alt="" />

            {/* <div className="absolute bottom-0 -top-3 left-0 w-full h-16 bg-gradient-to-t from-transparent to-black opacity-70 p-6"> */}
            <div className="absolute  bottom-8 left-0 w-full h-[25vh] md:h-[32vh] lg:h-[14vh] bg-gradient-to-t from-transparent to-black opacity-70 "> </div>
                <button className="absolute text-white px-6 py-2  left-5 bottom-11 md:bottom-14 text-xl font-semibold" style={btnBackgroundColor}>Donate ${price}</button>
            
        </div>
       
            <div className="w-[300px] md:w-[650px] lg:w-[800px] ">
            <h1 className="text-[#0B0B0B] text-4xl font-bold mb-6">{title}</h1>
            <p className="text-[#0B0B0BB2] text-xs leading-6 text-justify">{description}</p>
            </div>
       
       </div>
    );
};

export default DetailsPage;