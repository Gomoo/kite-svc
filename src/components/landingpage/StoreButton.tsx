import { Apple } from "iconsax-react";
import Image from "next/image";

function StoreButton({ isGetPay }: { isGetPay?: boolean }) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-2 md:gap-6 ${
        isGetPay ? "mt-6" : "mt-8 md:mt-[62px]"
      }`}
    >
      <button
        type="button"
        className={isGetPay ? "header__storewhite__btn" : "header__store__btn"}
      >
        <Apple variant="Bold" color={isGetPay ? "#000" : "#fff"} size={24} />
        <p className={isGetPay ? "" : "text-white font-semibold"}>
          Download now
        </p>
      </button>
      <button
        type="button"
        className={isGetPay ? "header__storewhite__btn" : "header__store__btn"}
      >
        <Image
          src="/landingpage/googleplay.png"
          alt="playstore"
          width={29}
          height={29}
          className="h-7 w-7"
        />
        <p className={isGetPay ? "" : "text-white font-semibold"}>
          Download now
        </p>
      </button>
    </div>
  );
}

export default StoreButton;
