import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const HeroSection = () => {
  const products = [
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//full%20picture%20advertisements%20all.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//heropage.mp4",
      title: "Full Collection"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smartwatch%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smart%20watch%20video%20three.mp4",
      title: "Smart Watch"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//earbud%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//earbud%20video.mp4",
      title: "Wireless Earbuds"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//bag%20pack%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//bag%20pack%20video.mp4",
      title: "Premium Backpack"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//power%20bank%20picture.jpg",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//Apple_MagSafe_Battery_Powebank_Unboxing.mp4",
      title: "Power Bank"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//charger%20picture.jpg",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smart%20watch%20video%204.mp4",
      title: "Wireless Charger"
    }
  ];

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={products[0].video}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Muahib Festival Mega Combo Deal</h1>
            <p className="text-xl md:text-2xl mb-6">Limited Time Offer - 6 Premium Products in One Package</p>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="ml-2">4.9 (256 reviews)</span>
            </div>
            <div className="bg-white/20 rounded-lg p-4 inline-block">
              <p className="text-2xl font-bold">₦55,000 <span className="line-through text-lg font-normal text-gray-300">₦110,000</span></p>
              <p className="text-yellow-300 font-semibold">50% OFF (Delivery Included)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
