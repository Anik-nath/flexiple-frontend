import { ChevronRightIcon } from "@heroicons/react/24/solid";

const JobCard = () => {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/40 rounded-lg shadow-lg p-6">
      <div className="border border-t-0 border-l-0 border-r-0 border-white/40">
        <h2 className="text-5xl font-semibold text-white">Goarang Gupta</h2>
        <div className="flex flex-row items-center text-2xl gap-4 text-slate-300 py-4">
          <div>Experience: 1 years</div>
          <div>Notice: 16 To 30 Days</div>
          <div>Current CTC: ₹16LPA</div>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 py-8">
        <p className="text-slate-300 text-2xl"> Worked at:</p>
        <div className="bg-white text-black px-4 rounded-full py-2">
          Pitney Bowes
        </div>
        <div className="bg-white text-black px-4 rounded-full py-2">
          Pitney Bowess
        </div>
      </div>
      <p className="text-white/80 text-xl mb-6 leading-relax">
        As a Software Engineer at Pitney Bowes, Goarang made significant
        contributions in developing RESTful APIs using .NET Core Framework,
        improving frontend-backend communication by 40%. His expertise includes
        creating Graphics Management Systems,
      </p>
      <div className="flex justify-between flex-row items-center">
        <div className="flex gap-2">
          <div className="bg-white/10 text-white border px-4 rounded-full py-2">
            .NET Framework
          </div>
          <div className="bg-white/10 text-white border px-4 rounded-full py-2">
            MySQL
          </div>
          <div className="bg-white/10 text-white border px-4 rounded-full py-2">
            Amazon Web Services
          </div>
          <div className="bg-white/10 text-white border px-4 rounded-full py-2">
            Angular (Web Framework)
          </div>
        </div>
        <button className="px-4 py-2 text-white rounded-lg border flex flex-row gap-4 hover:bg-white/10">
          Get a Quote
          <ChevronRightIcon className="w-6 h-6"></ChevronRightIcon>
        </button>
      </div>
    </div>
  );
};

export default JobCard;