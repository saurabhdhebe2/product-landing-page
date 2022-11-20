const FeaturesItem = ({ title, des }) => {
  return (
    <>
      <div className="w-[80%]">
        <h1 className=" text-2xl text-black tracking-wider">{title}</h1>
        <p className="w-[90%] mx-auto text-sm pb-4 pt-2 text-gray-700 italic  -tracking-wide">
          {des}
        </p>
      </div>
    </>
  );
};

export default FeaturesItem;
