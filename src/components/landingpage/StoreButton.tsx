import { Apple } from 'iconsax-react';
import Image from 'next/image';

function StoreButton({ isGetPay }: { isGetPay?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center gap-2 md:flex-row md:gap-6 ${
        isGetPay
          ? 'inview:animate-slidein inview-once mt-6 opacity-0 [--slidein-delay:500ms]'
          : 'inview:animate-slidein inview-once mt-8 opacity-0 [--slidein-delay:700ms]'
      }`}
    >
      <button type="button" className={isGetPay ? 'header__storewhite__btn' : 'header__store__btn'}>
        <Apple variant="Bold" color={isGetPay ? '#000' : '#fff'} size={24} />
        <p className={isGetPay ? '' : 'font-semibold text-white'}>Download now</p>
      </button>
      <button type="button" className={isGetPay ? 'header__storewhite__btn' : 'header__store__btn'}>
        <Image
          src="/landingpage/googleplay.png"
          alt="playstore"
          width={29}
          height={29}
          className="h-7 w-7"
        />
        <p className={isGetPay ? '' : 'font-semibold text-white'}>Download now</p>
      </button>
    </div>
  );
}

export default StoreButton;
