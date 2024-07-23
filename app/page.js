import Part1 from "@/components/Part1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <div className="w-64 h-fit">
        <img className="w-full h-fit object-cover rounded-md" src="/images/chinese-chicken.webp" alt="" />
      </div>
      <div className="w-64 h-fit">
        <img className="w-full h-fit object-cover rounded-lg" src="/images/onion parora.webp" alt="" />
      </div>
      <div className="">
        <img className="hidden" src="/images/Palaak Paneer.webp" alt="" />
      </div>
      <div className="">
        <img className="hidden" src="/images/pexels-chanwalrus-958545.jpg" alt="" />
      </div>
      <div className="">
        <img className="hidden" src="/images/pexels-janetrangdoan-1128678.jpg" alt="" />
      </div>
      <div className="col-span-6 flex flex-row gap-5">
      <div className="col-span-3">
        <input className="border-black border-2 rounded-lg w-full" type="text" />
      </div>
      <div className="col-span-3">
        <input className="border-black border-2 rounded-lg w-full" type="text" />
      </div>
      </div> */}
      <div>
        <Part1 />
      </div>
    </div>
  );
}
