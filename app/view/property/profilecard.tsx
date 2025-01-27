import { Card, CardBody, Image } from "@nextui-org/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaViber,
  FaWhatsapp,
} from "react-icons/fa6";

const AgentData = [
  {
    id: 1,
    name: "Jayvee Valeriano",
    position: "Senior Sales Manager",
    email: "jayvee@gmail.com",
    phone: "090909090",
    images:
      "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-jayvee.jpg",
  },

  // {
  //     id: 2,
  //     name: "Angely C. Victoriano",
  //     position: "Senior Sales Manager",
  //     email: "angely@gmail.com",
  //     phone: "09487191557",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-anj.jpg",
  // },

  // {
  //     id: 3,
  //     name: "Gabriel R. Mercado",
  //     position: "Senior Property Specialist",
  //     email: "abicrealty.gab@gmail.com",
  //     phone: "09556600003",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-gab.jpg",
  // },
  // {
  //     id: 4,
  //     name: "Lloyd Francis B. Moscare",
  //     position: "Senior Property Specialist",
  //     email: "abicrealty.lloydfrancis@gmail.com",
  //     phone: "09078133511",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-lloyd.jpg",
  // },
  // {
  //     id: 6,
  //     name: "Lady Dianne A. Semacio",
  //     position: "Senior Property Specialist",
  //     email: "abicrealty.dianne@gmail.com",
  //     phone: "09481209328",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-lloyd.jpg",
  // },
  // {
  //     id: 7,
  //     name: "Joelyn O. Rendon",
  //     position: "Property Specialist",
  //     email: "abicrealty.joelyn@gmail.com",
  //     phone: "09470445574",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-lloyd.jpg",
  // },
  // {
  //     id: 8,
  //     name: "Kaila Rose L. Dapiaoen",
  //     position: "Property Specialist",
  //     email: "abicrealty.kaila@gmail.com",
  //     phone: "09957912023",
  //     images: "https://abic-agent-bakit.s3.ap-southeast-1.amazonaws.com/agent/abic-lloyd.jpg",
  // },
];

const AgentProfile = () => {
  return (
    <div className="flex flex-col gap-2">
      {AgentData.map((data) => (
        <Card
          key={data.id}
          isBlurred
          className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
          shadow="sm"
        >
          <CardBody>
            <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
              <div className="relative col-span-6 md:col-span-4 w-full">
                <Image
                  className="object-cover object-top overflow-hidden rounded-xl w-full mb-4"
                  src={data.images}
                />
              </div>

              <div className="flex flex-col col-span-6 md:col-span-8">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h1 className="text-large font-bold text-violet-800 mt-2">
                      {data.name}
                    </h1>
                    <p className="text-small font-semibold text-foreground/80">
                      {data.position}
                    </p>
                    <div className="mt-2">
                      <p className="text-xs text-foreground/80">
                        Email: {data.email}
                      </p>
                      <p className="text-xs text-foreground/80">
                        Phone: {data.phone}
                      </p>
                    </div>

                    <div className="flex gap-2 py-4">
                      <div className="bg-violet-200 px-2 py-2 rounded-xl">
                        <FaFacebook className="text-violet-600" size={20} />
                      </div>
                      <div className="bg-violet-200 px-2 py-2 rounded-xl">
                        <FaInstagram className="text-violet-600" size={20} />
                      </div>
                      <div className="bg-violet-200 px-2 py-2 rounded-xl">
                        <FaTelegram className="text-violet-600" size={20} />
                      </div>
                      <div className="bg-violet-200 px-2 py-2 rounded-xl">
                        <FaViber className="text-violet-600" size={20} />
                      </div>
                      <div className="bg-violet-200 px-2 py-2 rounded-xl">
                        <FaWhatsapp className="text-violet-600" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default AgentProfile;
