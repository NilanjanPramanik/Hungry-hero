import React from "react";
import { CDN_URL } from "../utils/constants";

const RestruarantCards = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    deliveryTime,
    cuisines,
    slaString,
    costForTwo,
    aggregatedDiscountInfo,
  } = resData?.data;
  return (
    <div className="md:w-60 shadow-md md:shadow-none py-4 px-4 md:py-2  hover:shadow-lg rounded flex flex-col gap-1 text-[0.7rem] text-[#535665] ">
      <img
        src={
          CDN_URL +
          (cloudinaryImageId === ""
            ? "s6fhwzl0tss0vgrqvcid"
            : cloudinaryImageId)
        }
        alt=""
        className=" rounded object-cover"
      />
      <div className="res-details px-2">
        <h4 className="font-medium text-base text-black">{name}</h4>
        <span className="">{cuisines.join(", ")}</span>
        <div className="flex justify-between items-center my-2 font-medium">
          <div className="flex items-center gap-1 px-1 text-white bg-green-500 font-semibold">
            <span className="text-[0.6rem]">&#9733;</span>
            <span className="text-[0.6rem]">
              {avgRating === "--" ? "4.2" : avgRating}
            </span>
          </div>
          <div className="w-[3px] h-[3px] rounded-full bg-black"></div>
          <span className="">{slaString}</span>
          {/* <div className="font-light text-xs">
            {resData.data.cuisines.join(", ")} - {deliveryTime} min
          </div> */}
          <div className="res-price">
            <span className="text-xs">
             ₹{costForTwo / 100} FOR TWO
            </span>
          </div>
        </div>
        <div className="flex border-t pt-4 gap-2  font-semibold"></div>
        <span className="text-[#a0522d] text-center">
          {!aggregatedDiscountInfo?.shortDescriptionList[0]?.meta
            ? "30% off | Use NEWFUD"
            : aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}
        </span>
      </div>
    </div>
  );
};

export default RestruarantCards;
