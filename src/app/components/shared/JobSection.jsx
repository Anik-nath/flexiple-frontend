import {
  ChevronDownIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import JobCard from "./jobCard";
import BookConsultant from "./BookConsultant";
import { jobs } from "@/app/utils/jobdata";

const JobSection = async () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-t from-black to-purple-900 py-12 w-full max-w-screen px-16 mx-auto">
          <div className="flex flex-row items-center gap-4 text-slate-300 ">
            <HomeIcon className="w-8 h-8" />
            <ChevronRightIcon className="w-5 h-5" />
            <h6 className="text-2xl"> Hire.Next Developers</h6>
          </div>
          {/* filter */}
          <div className="flex flex-row items-center gap-8 w-full my-8">
            <h6 className="text-slate-300 text-xl">Filter By</h6>
            <button
              type="button"
              className="flex bg-white/10 w-[200px] flex-row justify-between items-center px-4 rounded-lg border border-gray-300 py-4 bg-white-50 text-xl text-gray-300  "
              id="dropdown-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Skills
              <ChevronDownIcon className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="flex bg-white/10 w-[200px] flex-row justify-between items-center px-4 rounded-lg border border-gray-300 py-4 bg-white-50 text-xl text-gray-300  "
              id="dropdown-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              Notice period
              <ChevronDownIcon className="w-6 h-6" />
            </button>
          </div>
          <div>
            <h6 className="text-slate-300 text-xl">
              5,189 .NET engineers to hire...
            </h6>
          </div>
          {/* jobs */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 my-8">
            <div className="col-span-8 md:col-span-8">
              {jobs.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
            <div className="col-span-4 md:col-span-4 text-white rounded-lg">
              <BookConsultant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSection;
