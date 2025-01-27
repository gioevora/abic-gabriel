"use client";
import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

interface Data {
  key: number;
  title: string;
  image: string;
  date: string;
  description?: string | null;
}

interface DataProps {
  data: Data[];
}

const WhatsNewCard: React.FC<DataProps> = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.key}>
          <CardBody className="overflow-visible py-2">
            <Image
              isBlurred
              isZoomed
              alt="Card background"
              className="w-full object-cover object-top rounded-xl"
              height={250}
              src={item.image || "/fallback-image.jpg"}
              width={500}
            />

            <div className="py-4">
              <p className="text-tiny uppercase text-default-500 font-bold">
                {item.date}
              </p>
              <h4 className="font-bold text-large line-clamp-2">
                {item.title}
              </h4>

              {item.description && (
                <p className="text-tiny uppercase text-default-500 font-bold line-clamp-1">
                  {item.description}
                </p>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default WhatsNewCard;
