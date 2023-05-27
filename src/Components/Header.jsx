import React from "react";
import {
  UilWhatsapp,
  UilPhone,
  UilBuilding,
  UilUser,
  UilTruck,
  UilShoppingBag,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center space-x-6 md:space-x-12   border-b">
        <div className="flex items-center justify-center">
          <UilWhatsapp className="text-green-700"></UilWhatsapp>
          <p className="text-sm font-medium">
            Whatsapp Hattı: <i className="font-bold">0 536 271 72 37</i>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <UilPhone></UilPhone>
          <p className="text-sm font-medium">
            Telefon: <i className="font-bold">0 506 913 45 43</i>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between space-x-6 md:space-x-12 container border-b w-full px-12 py-1">
        <div className="flex items-center justify-center">
          <UilBuilding className="h-10 w-10 "></UilBuilding>
          <div className=" pl-2 flex items-start justify-start flex-col">
            <Link to="/contact">
              <p>İletişim</p>
            </Link>
            <Link to="/about">
              <p>Hakkımızda</p>
            </Link>
          </div>
        </div>
        <div>
          <Link to="/">
            <i className="font-bold text-6xl">LOGO</i>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <UilUser className="h-10 w-10 "></UilUser>
          <div className="pl-2 flex items-start justify-start flex-col">
            <Link to="/signIn">
              <p className="text-base">Üye Girişi</p>
            </Link>
            <Link className="/login">
              <p className="text-sm">Üye Ol</p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <UilTruck className="h-10 w-10 "></UilTruck>
          <Link>
            <p className="pl-2">Kargo Takip</p>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <UilShoppingBag className="h-10 w-10 "></UilShoppingBag>
          <div className="pl-2 flex items-start justify-start flex-col">
            <Link to="/cart">
              <p className="text-base">Sepetim</p>
            </Link>
            <p className="text-sm">0 Ürün</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-6 md:space-x-12 uppercase py-4 w-full border-b-2  border-b-black">
        <Link to="/">
          <p>Anasayfa</p>
        </Link>
        <Link to="/products">
          <p>Ürünler</p>
        </Link>
        <Link to="">
          <p>mutfak halısı</p>
        </Link>
        <Link to="">
          <p>Koridor halısı özel ebatlama</p>
        </Link>
        <Link to="">
          <p>çocuk odası halısı</p>
        </Link>
        <Link to="">
          <p>tasarım halılar</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
