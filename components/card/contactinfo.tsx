"use client";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { FaFacebook, FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const ContactInfoCard = () => {
  return (
    <div className="flex flex-col gap-2 py-6">
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FaPhone className="text-violet-700" size={20} />
          <span>09265536964</span>
        </div>

        <div className="flex items-center gap-2">
          <MdMail className="text-violet-700" size={20} />
          <span>jayveevaleriano@gmail.com</span>
        </div>

        <div className="flex items-center gap-2">
          <FaFacebook className="text-violet-700" size={20} />
          <span>Jayvee Valeriano</span>
        </div>
      </div>

      <div className="py-6">
        <Card className="overflow-visible max-w-3xl">
          <CardBody>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                allowFullScreen
                className="w-full h-96 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.6867089763073!2d121.01350799999999!3d14.559899799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90b830e5f29%3A0x89fe307dfecd3c0d!2sCampos%20Rueda%20Building!5e0!3m2!1sen!2sph!4v1737683770378!5m2!1sen!2sph"
                title="Google Maps Embed for Campos Rueda Building"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfoCard;
