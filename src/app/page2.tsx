// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">

//       <div>
//         <Image src="/android-chrome-192x192.png" width={100} height={100} />

//       </div>

//     </main>
//   );
// }

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative z-[-1] flex place-items-center mb-8">
        <Image
          src="/android-chrome-192x192.png"
          width={100}
          height={100}
          priority
          alt="Kite Logo"
        />
      </div>

      <p className="text-center max-w-[350px] p-8">
        Kite – Get Paid Globally **With Kite you can easily open a Global Bank
        Account in minutes for free.** Send and Receive payments from your
        clients and employers globally. Spend funds using your virtual cards.
        Save and grow your money over a period of time. **USD account and USD
        dollar cards** Access a USD account with a USD dollar in your name in
        less than 24 hours. Initiate USD payments from the comfort of your home
        and get paid faster using your IBAN. Create USD cards that works across
        thousands of websites such as Netflix, facebook, AWS, Spotify, Apple
        music, HBO and more Travel abroad and effortlessly spend globally with
        your card. **HOLD AND EXCHANGE MONEY IN DIFFERENT CURRENCIES** Hold
        funds in our complimentary multi-currency wallet that lets you hold
        money in Euros, British Pounds Sterling, US Dollars, and Nigerian Naira.
        Exchange at the best rate and send money in any of the supported
        currencies no matter where you live in the world.
      </p>

      <div className="text-center">
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
      </div>
    </main>
  );
}
