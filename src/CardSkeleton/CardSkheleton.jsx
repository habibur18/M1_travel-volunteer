import React from "react";
import Skeleton from "react-loading-skeleton";

const CardSkheleton = () => {
  return (
    <div className="relative">
      <Skeleton className="h-12" />
      <Skeleton className="absolute md:h-32 rounded-b-lg bottom-0 left-0 right-0 bg-[#FF7044] text-white flex  items-center justify-center">
        <Skeleton className="text-lg">{event.eventTitle}</Skeleton>
      </Skeleton>
      <Skeleton className="absolute top-1 right-1 px-4 py-2 bg-blue-600 text-white rounded-md">
        Apply Now
      </Skeleton>
    </div>
  );
};

export default CardSkheleton;
