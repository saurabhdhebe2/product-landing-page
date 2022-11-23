import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section id="pricing" className="mx-[2%] bg-[#222831] text-white pb-8">
      <div className="w-[90%] mx-auto">
        <h1 className="text-xl p-8">Pricing Plans : </h1>
        <hr className="h-2 text-gray-500 mb-4" />
        <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center pb-8">
          <PricingCard
            price="$4.99"
            plan="Basic"
            des="Lorem, ipsum dolor sit amet consectetur "
          />
          <PricingCard
            price="$9.99"
            plan="Basic"
            des="Lorem, ipsum dolor sit amet consectetur "
          />
          <PricingCard
            price="$49"
            plan="Basic"
            des="Lorem, ipsum dolor sit amet consectetur "
          />
          <PricingCard
            price="$99"
            plan="Basic"
            des="Lorem, ipsum dolor sit amet consectetur "
          />
        </div>
        <hr className="h-2 text-gray-500 mb-4" />
      </div>
    </section>
  );
};

export default Pricing;
