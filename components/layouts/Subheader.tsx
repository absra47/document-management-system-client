import { Button } from "@/components/ui/button";
import { RxHamburgerMenu } from "react-icons/rx";
import { SlPrinter } from "react-icons/sl";
import { MdFormatColorText } from "react-icons/md";

export default function Subheader() {
  return (
    <section className="flex justify-between items-center pl-10 pr-12 py-3">
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon">
          <RxHamburgerMenu className="w-6 h-6" />
        </Button>
        <h2 className="text-xl font-bold">ገቢ ደብዳቤዎች</h2>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline">
          <MdFormatColorText className="w-5 h-5" />
        </Button>
        <Button variant="outline" size="icon">
          <SlPrinter className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="flex gap-2">
          ረቂቁን አስቀምጥ
        </Button>
        <Button className="flex gap-2 bg-primary-action hover:bg-primary-action">
          ላክ
        </Button>
      </div>
    </section>
  );
}
