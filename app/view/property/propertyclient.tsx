"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import ListingsMedia from "./listingsmedia";
import ListingsInqiryCard from "./listingsinquirycard";
import Nearby from "./nearby";
import AgentProfile from "./profilecard";

interface Property {
  id: string;
  name: string;
  images: string;
  description: string;
  location: string;
  price: number;
  max_price: number;
  status: string;
  unit_type: string;
  unit_furnish: string;
  sale: string;
  amenities: string;
  user_id: string;
}

interface PropertyProps {
  properties: Property[];
}

const SinglePropertyClient: React.FC<PropertyProps> = ({ properties }) => {
  const [filteredProperty, setFilteredProperty] = useState<Property | null>(
    null,
  );

  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";

  // Filter the properties based on the `id` parameter
  useEffect(() => {
    const foundProperty = properties.find((property) => property.id === id);

    setFilteredProperty(foundProperty || null);
  }, [id, properties]);

  if (!filteredProperty) {
    return <p>Property not found.</p>;
  }

  // Parse amenities if they are stored as a stringified array
  let amenities: string[] = [];

  if (filteredProperty.amenities) {
    try {
      amenities = Array.isArray(filteredProperty.amenities)
        ? filteredProperty.amenities
        : JSON.parse(filteredProperty.amenities);
    } catch (error) {
      throw new Error(
        `Failed to fetch properties: ${error instanceof Error ? error.message : error}`,
      );
    }
  }

  return (
    <Suspense fallback={<div>Loading sections...</div>}>
      <section className="flex flex-col items-center gap-6 py-12 w-full">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start w-full">
            {/* Left Content */}
            <div className="col-span-3 lg:col-span-2">
              <ListingsMedia properties={[filteredProperty]} />
              <div className="flex items-center gap-2 uppercase">
                <small className="px-1 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-green-200 text-green-700">
                  {filteredProperty.sale}
                </small>

                <small className="px-1 py-0.5 text-tiny line-clamp-1 font-semibold rounded-md bg-blue-200 text-blue-700">
                  {filteredProperty.unit_furnish}
                </small>

                <span className="bg-blue-200 px-1 py-0.5 rounded-md font-medium text-blue-800 text-tiny">
                  {filteredProperty.status}
                </span>
              </div>
              <h1 className="font-bold text-3xl mt-2">
                {filteredProperty.unit_type} {filteredProperty.name}
              </h1>{" "}
              {/* Property Name */}
              <p className="text-default-500 text-sm">
                {filteredProperty.location}
              </p>{" "}
              {/* Property Location */}
              <div className="flex flex-col gap-6 mt-4">
                {/* Description */}
                <div>
                  <h1 className="font-medium">Description</h1>
                  <p className="text-default-500 text-md">
                    {filteredProperty.description}
                  </p>
                </div>

                {/* Amenities */}
                <div>
                  <h1 className="font-medium">Amenities</h1>
                  <div className="inline-flex flex-wrap gap-2 mt-4">
                    {amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 px-2 py-1 rounded-md text-sm hover:bg-gray-200 dark:bg-gray-900"
                      >
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full py-12">
                  <h1 className="font-bold text-xl text-violet-800">
                    Nearby Properties
                  </h1>
                  <p className="text-sm mb-4">
                    Discover your dream home from our curated collection of
                    luxurious properties.
                  </p>
                  <div className="w-full grid grid-cols-3 py-8">
                    <Nearby
                      currentPropertyId={filteredProperty.id}
                      properties={properties}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-3 flex flex-col gap-4 md:col-span-1">
              <div>
                <AgentProfile />
              </div>
              <div className="w-full">
                <ListingsInqiryCard data={filteredProperty} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default SinglePropertyClient;
