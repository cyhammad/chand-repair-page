"use client";

import { companyName, phoneNumber } from "@/lib/company";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function FloatingActionButtons() {
  const params = useParams();
  const company =
    typeof params.company === "string"
      ? params.company.toLowerCase()
      : companyName;
  const companyTitle = company
    ? `${company.charAt(0).toUpperCase()}${company.slice(1)}`
    : "Our";

  const sendMessage = () => {
    const message = `Hello, I’m interested in getting my home appliance repaired by ${companyTitle} Repair Center.`;
    const url = `https://wa.me/${phoneNumber.replace(
      /\D/g,
      ""
    )}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const dialPhone = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, "")}`;
  };

  return (
    <div className="fixed bottom-0 flex justify-end w-screen z-[101] px-3 py-2 pointer-events-none">
      <div className="flex justify-end gap-2 flex-col max-w-7xl items-end">
        <button
          onClick={sendMessage}
          className="rounded-md flex items-center justify-center h-14 w-14 bg-transparent pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/whatsapp-2.svg"
            alt="Whatsapp"
            width={40}
            height={40}
          />
        </button>
        <button
          onClick={dialPhone}
          className="flex items-center justify-center size-12 mr-1 bg-gray-500 rounded-full pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/call.svg"
            alt="Call us"
            width={22}
            height={22}
          />
        </button>
      </div>
    </div>
  );
}
