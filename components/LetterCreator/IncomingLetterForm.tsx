"use client";

import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaPlus } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function IncomingLetterForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <form className="flex flex-col mt-5 gap-3 h-full">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="የተቀባይ ስም">የተቀባይ ስም</Label>
        <Input type="text" id="የተቀባይ ስም" className="bg-gray-100" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="ግልባጭ የሚላክላቸው">ግልባጭ የሚላክላቸው</Label>
        <Input type="text" id="ግልባጭ የሚላክላቸው" className="bg-gray-100" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="ርዕሰ ጉዳይ">ርዕሰ ጉዳይ</Label>
        <Input type="text" id="ርዕሰ ጉዳይ" className="bg-gray-100" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="የላኪ ስም">የላኪ ስም</Label>
        <Input type="text" id="የላኪ ስም" className="bg-gray-100" />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="grid items-center gap-1.5">
          <Label htmlFor="የላኪ አድራሻ">የላኪ አድራሻ</Label>
          <Input type="text" id="የላኪ አድራሻ" className="bg-gray-100" />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="የላኪ ስልክ ቁጥር">የላኪ ስልክ ቁጥር</Label>
          <Input type="text" id="የላኪ ስልክ ቁጥር" className="bg-gray-100" />
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="የላኪ ፖስታ ቁጥር">የላኪ ስም</Label>
          <Input type="text" id="የላኪ ፖስታ ቁጥር" className="bg-gray-100" />
        </div>
      </div>
      <input type="file" ref={fileInputRef} className="hidden" />
      <Button
        variant="outline"
        className="flex gap-3 w-fit"
        onClick={handleClick}
      >
        <FaPlus className="w-5 h-5" />
        ፋይል አያይዝ
      </Button>
    </form>
  );
}
