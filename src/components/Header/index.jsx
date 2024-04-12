import React from "react";
import { Text, Img, Heading } from "./..";
import {Link} from 'react-router-dom';

export default function Header({ ...props }) {
  return (
    <header {...props}>
          <div className="flex flex-row sm:flex-col justify-between items-center w-[55%] md:w-full ml-[139px] md:ml-5 sm:gap-10">
            <Img src="images/img_group_150.svg" alt="image" className="h-[24px]" />
            <div className="flex flex-row justify-between items-center w-[53%] sm:w-full">
              <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
                <Heading as="h6" className="!text-indigo-900_01 tracking-[0.12px] text-center">
                <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
                  Home
                </Link> 
                </Heading>
                <div className="h-px w-full bg-indigo-900_01" />
              </div>
              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
              <Link to="/Blogs" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Blogs
              </Link>
              </Heading>
              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
              <Link to="/blogger" style={{ color: "#87CEFA", textDecoration: "none" }}>
                Podcast
              </Link>
              </Heading>
              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
              <Link to="/AboutUs" style={{ color: "#87CEFA", textDecoration: "none" }}>
                About us
              </Link> 
              </Heading>
              <Heading as="h6" className="!text-indigo-200_01 tracking-[0.12px] text-center">
              <Link to="/ContactUs" style={{ color: "#87CEFA", textDecoration: "none" }}>
                contact us 
              </Link>
              </Heading>
            </div>
          </div>
          <div>
            <input placeholder="search"
            type="search"></input>
            <button alt="search_one" className="h-[30px] w-[30px] mr-[139px] md:mr-5">          
              <Img src="images/img_search.svg"  />
            </button>
          </div>
          {/* <Img src="images/img_search.svg"  /> */}
    </header> 
  )
}