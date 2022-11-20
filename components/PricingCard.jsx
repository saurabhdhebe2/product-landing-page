const PricingCard = ({ price, plan, des }) => {
  return (
    <div className="mx-auto">
      <div className="bg-[#EEEEEE] text-black w-[180px] p-6 rounded-xl hover:bg-[#eee8e8] ">
        <h1 className="text-center font-light text-3xl ">{price}</h1>
        <h3 className="text-center font-semibold text-2xl  tracking-wider">
          {plan}
        </h3>
        <p className="text-center text-xs tracking-thin m-2">{des}</p>
        <div className="flex justify-center m-4">
          <button className="rounded-md py-2 px-5 bg-gradient-to-tr from-blue-900 to-pink-800 text-white text-sm hover:from-blue-700 hover:to-pink-700">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
