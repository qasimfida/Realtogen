import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function VirtualDroneCard({ imageSrc, title, description, icon }) {
  return (
    <Card className="w-full md:w-[450px] bg-[#4170c0c4] shadow-lg rounded-xl overflow-hidden border border-gray-200 relative transition-all duration-300 hover:bg-gradient-to-b hover:from-[#73a2f3] hover:to-[#2a559e] hover:shadow-xl group">
      <CardContent className="p-2 relative">
        <div className="relative w-full h-[243px] overflow-hidden">
          <Image
            src={imageSrc}
            alt="Drone View"
            width={500}
            height={243}
            className="rounded-md w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <div className="absolute inset-0 flex items-center justify-center text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            🔗
          </div>
        </div>
        <h3 className="text-[24px] font-semibold mt-4 flex px-[30px] gap-[16px] text-start text-white items-center">
          {icon} {title}
        </h3>
        <p className="text-white mt-2 text-start pb-[20px] px-[30px]">{description}</p>
      </CardContent>
    </Card>
  );
}
