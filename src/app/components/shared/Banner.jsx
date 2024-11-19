import { ArrowRightIcon, StarIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-blue-800 to-purple-900 h-screen">
      <div className="flex flex-col items-center w-10/12 sm:w-8/12 mx-auto text-center h-screen justify-center">
        <h1 className="text-4xl sm:text-6xl text-white font-semibold">
          Hire .NET Developers: Affordable, Dedicated .NET Experts in 72 hours
        </h1>
        <h2 className="text-xl sm:text-2xl py-10 text-slate-300 ">
          Hire .NET developers to enhance your projects efficiency and
          productivity. Build dynamic web applications using ASP.NET, C#, Entity
          Framework, and MVC.
        </h2>

        <h2 className="text-xl sm:text-2xl text-slate-300">
          Access 100+ expert .NET developers, engineers, and architects from
          Flexiple, handpicked through a 5-hour evaluation process.
        </h2>
        <button className="flex mt-8 flex-row items-center gap-2 btn bg-white text-dark border px-8 sm:px-12 py-4 rounded-lg text-lg sm:text-xl font-semibold">
          Hire dream developers
          <ArrowRightIcon className="w-5 h-5" />
        </button>
        <div className="flex flex-row gap-2 py-8 mt-4">
          <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          <StarIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
        </div>
        <p className="text-lg sm:text-2xl text-slate-300">
          Clients rate Flexiple .NET developers 4.8 / 5 on average based on
          10,482 reviews.
        </p>
      </div>
    </div>
  );
};

export default Banner;
