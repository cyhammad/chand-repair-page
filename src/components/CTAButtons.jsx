"use client";

import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { WhatsappIcon } from "./icons/common";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { phoneNumber } from "@/lib/company";

const CTAButtons = () => {
  const params = useParams();
  const company =
    typeof params.company === "string" ? params.company.toLowerCase() : "";
  const companyTitle = company
    ? `${company.charAt(0).toUpperCase()}${company.slice(1)}`
    : "Your";

  const whatsappClass = "bg-[#f80000] hover:bg-orange-700 text-white";

  const message = `Hello, I’m interested in getting my home appliances repair service.`;
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:${phoneNumber.replace(/\s/g, "")}`;

  return (
    <div className="flex items-center max-w-screen overflow-hidden w-fit gap-3">
      <Link href={callUrl} passHref>
        <Button className="text-sm flex items-center gap-2" variant="secondary">
          <Phone strokeWidth={1} size={14} />
          Call Us
        </Button>
      </Link>
      <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Button
          className={cn("text-sm flex items-center gap-2", whatsappClass)}
        >
          <WhatsappIcon width={14} height={14} />
          Whatsapp
        </Button>
      </Link>
    </div>
  );
};

export default CTAButtons;
