import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-16">
      <div className="bg-[#00ADB5] flex flex-col items-center  mx-[2%] gap-2 lg:flex-row mx-[2%]">
        {/* right */}
        <div className=" flex flex-col items-center lg:flex  gap-2 py-[15%]">
          <h1 className="text-white text-3xl text-center pb-4 px-8">
            Together We Can Change The World
          </h1>
          <p className="w-[80%] text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            dignissimos, veniam aliquam eveniet illo quo. Quod dolorum dolor
            aliquam ipsum rerum
          </p>
          <Link href="/#features">
            <button className="px-4 py-2 mt-7 rounded-lg bg-gray-100 hover:underline">
              Know More
            </button>
          </Link>
        </div>
        {/* left */}
        <div className="lg:mr-8 pb-5 lg:pb-0">
          <Image
            src={
              "https://static01.nyt.com/images/2021/07/30/arts/28galleries-1/28galleries-1-jumbo.jpg?quality=75&auto=webp"
            }
            width={393}
            height={40}
            alt="Art"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
