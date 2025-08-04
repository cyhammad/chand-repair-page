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
    const message = `Hello, I’m interested in getting my home appliances repair service.`;
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
    <div className="fixed bottom-5 right-5 flex justify-end w-screen z-[101] py-2 pointer-events-none">
      <div className="flex justify-end gap-3 flex-col max-w-7xl items-end">
        <button
          onClick={sendMessage}
          className="flex items-center justify-center h-14 w-14 bg-green-400 rounded-full p-2.5 pointer-events-auto"
        >
          <Image
            quality={100}
            src="/static/whatsapp-2.svg"
            alt="Whatsapp"
            width={56}
            height={56}
          />
        </button>
        <button
          onClick={dialPhone}
          className="flex items-center justify-center size-14 bg-gray-800 rounded-full pointer-events-auto"
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
