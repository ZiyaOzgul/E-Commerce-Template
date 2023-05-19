import React from "react";
import { UilPhone, UilMapMarkerAlt } from "@iconscout/react-unicons";
export const Contact = () => {
  return (
    <div className="flex items-start justify-start  mt-4 lg:mt-12 flex-col ">
      <div className="flex flex-col-reverse items-center justify-start space-y-6 lg:space-y-12 px-6 py-4 basis-1">
        <p className="text-bold font-medium mb-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          sequi esse aperiam sed distinctio debitis modi expedita voluptatibus
          illum illo odio sit deleniti quidem? Ipsam exercitationem tempora
          aliquid optio non? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. A quod minus dolor delectus laborum id eaque adipisci ipsa,
          deleniti laudantium doloribus error aliquam sequi deserunt nihil in
          fuga animi qui? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quibusdam adipisci beatae culpa. Similique dolores deserunt
          suscipit laudantium, ab aspernatur nemo veniam neque ea, nesciunt
          tenetur, saepe unde mollitia delectus laboriosam? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Alias delectus aliquid commodi
          accusantium tenetur neque exercitationem maiores sit voluptates minus,
          officia magnam voluptate voluptatem, et iure odit pariatur, enim esse?
        </p>
        <h1 className="text-4xl font-bold uppercase text-red-500 font-sans py-12">
          Bize Ulaşın
        </h1>
        <img
          src="https://www.halkbank.com.tr/tr/bize-ulasin/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid_780183488/teaser.coreimg.jpeg/1614260089246/yatirimci-iletisimi.jpeg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-start space-x-4">
        <div className="flex items-center justify-evenly spcae-x-6 lg:space-x-12 basis-1/2 border border-gray-100 shadow-xl rounded-lg">
          <div className="flex flex-col items-start justify-start space-y-6 px-4 container my-6 basis-1/2">
            <h1 className="font-bold text-4xl text-red-500">Bizi Arayın</h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum
              modi facere reiciendis incidunt animi neque distinctio
              consequuntur voluptatem in doloremque odit numquam quidem magnam
              vero impedit quod, quae ipsam?
            </p>
          </div>
          <UilPhone className="hover:scale-110 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer"></UilPhone>
        </div>
        <div className="flex items-center justify-evenly spcae-x-6 lg:space-x-12 basis-1/2 border border-gray-100 shadow-xl rounded-lg ">
          <div className="flex flex-col items-start justify-start space-y-6 px-4 container my-6 basis-1/2 ">
            <h1 className="font-bold text-4xl text-red-500">
              Bizi Ziyaret Edin
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eum
              modi facere reiciendis incidunt animi neque distinctio
              consequuntur voluptatem in doloremque odit numquam quidem magnam
              vero impedit quod, quae ipsam?
            </p>
          </div>
          <UilMapMarkerAlt className="hover:scale-110 hover:text-red-500 transition-all duration-500 ease-in-out cursor-pointer"></UilMapMarkerAlt>
        </div>
      </div>
    </div>
  );
};
