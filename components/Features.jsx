import FeaturesItem from "./FeaturesItem";

const Features = () => {
  return (
    <section id="features" className="bg-[#EEEEEE] py-8 mx-[2%] px-[10%]">
      <div className="pt-10">
        <p className="text-xl uppercase ">Features</p>
      </div>
      <p className="text-dm text-gray-600 py-4 italic">What we Offer:</p>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 w-[90%] mx-auto gap-8 pb-16">
        <FeaturesItem
          title="Feature 1"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
        <FeaturesItem
          title="Feature 2"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
        <FeaturesItem
          title="Feature 3"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
        <FeaturesItem
          title="Feature 4"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
        <FeaturesItem
          title="Feature 5"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
        <FeaturesItem
          title="Feature 6"
          des="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum dignissimos, veniam aliquam eveniet illo quo."
        />
      </div>
    </section>
  );
};

export default Features;
