import '../../../Resources/banner.jpeg'
const Banner = () => {
    return (
        <div className="">
            <div className="flex h-screen justify-center ">
    <div
        className="w-full h-[75vh] bg-[url('Resources/banner.jpeg')] bg-cover bg-center">
            
        <div className="w-full h-full flex justify-center items-center backdrop-brightness-50 flex-col">
        <div className="absolute inset-0 bg-white opacity-80"></div>
        <h1 className='text-[#0B0B0B] text-4xl font-semibold mb-3  relative'>I Grow By Helping People In Need</h1>
       <div className=' text-center flex justify-center items-center'>
        
       <input type="text" placeholder='Search here....' className="pl-2 pr-20 py-3 border border-solid border-slate-300 border-r-0  relative  rounded-l-lg" />
        <span className="text-white text-lg font-medium p-2.5 px-5 border border-[#FF444A] bg-[#FF444A] border-l-0 rounded-r-lg relative">Search</span>

       </div>
                
        </div>
    </div>
</div>
        </div>
    );
};

export default Banner;