import CustomCarousel from "@/components/customCarousel1";
import CustomSlider from "@/components/customCarousel2";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-center py-14">
      <CustomCarousel />
      <CustomSlider />
    </div>
  );
};

export default page;
