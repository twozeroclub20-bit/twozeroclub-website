import React from "react";

export default function Loading() {
  return (
    <div className="max-w-[1800px] px-4 lg:px-16 w-full m-auto my-10">
      <div className="flex flex-col sm:flex-row gap-10 animate-pulse">
        {/* Image Skeleton */}
        <div className="w-1/2 gap-2 lg:w-4/6 hidden md:grid grid-cols-1 lg:grid-cols-2">
          <div className="h-72  bg-gray-200 rounded-md "></div>
          <div className="h-72  bg-gray-200 rounded-md "></div>
          <div className="h-72  bg-gray-200 rounded-md "></div>
          <div className="h-72  bg-gray-200 rounded-md "></div>
        </div>
        <div className="w-full block md:hidden">
          <div className="h-72 w-full bg-gray-200 rounded-md "></div>
        </div>
     
        <div className="flex-1 space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
          <div className="h-12 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
}
