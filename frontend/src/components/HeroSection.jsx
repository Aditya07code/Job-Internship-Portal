import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="relative text-white py-20 px-5 bg-[#BFDBFE]"
>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 text-center">
        <div className="flex flex-col gap-5 md:w-1/2">
          <span className="mx-auto px-4 py-2 rounded-full bg-white text-[#3B00DB] font-medium">
            Interactive Job Quest Website
          </span>
          <h1 className="text-5xl font-bold text-black">
            Discover,
            <br /> Apply &amp;
            <span className="text-[#F2003C]"> Achieve Your Career Goals</span>
          </h1>
          <p className="text-black">
            "JobVault connects job seekers with their perfect opportunities,
            streamlining the search for a rewarding career."
          </p>
          <div className="flex md:w-[80%] w-full shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white">
            <input
              type="text"
              placeholder="Find your dream jobs"
              aria-label="Job search input"
              onChange={(e) => setQuery(e.target.value)}
              className="outline-none border-none w-full text-gray-700"
            />
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full bg-[#F2003C]"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Side Image */}
        <div className="w-1/3">
          <img
            src="https://aditya07code.github.io/portfolio/bg.png"
            alt="Job search illustration"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
