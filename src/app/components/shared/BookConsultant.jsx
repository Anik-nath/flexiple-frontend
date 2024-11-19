import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";

const BookConsultant = () => {
  return (
    <div
      className="w-full p-12 border-2 border-transparent bg-white/5"
      style={{
        borderImage: "linear-gradient(to right, #6a0dad, #ff1493) 1",
      }}
    >
      <h1 className="text-4xl w-10/12">
        99% of Flexiple&apos;s clients hire talent after a risk-free trial.
      </h1>
      <p className="text-2xl text-slate-300 py-4 mt-4 text-justify">
        Flexiple&apos;s meticulous screening and matching process connects you
        with exceptional developers perfectly aligned to your specific needs.
      </p>
      <button className="flex mt-8 flex-row items-center gap-2 btn bg-white text-black border px-12 py-4 rounded-lg text-xl font-semibold">
        Book a consultation call
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};

export default BookConsultant;
