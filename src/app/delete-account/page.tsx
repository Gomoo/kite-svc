import Image from 'next/image';

export default function DeleteAccount() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative z-[-1] mb-8 flex place-items-center">
        <Image
          src="/android-chrome-192x192.png"
          width={100}
          height={100}
          priority
          alt="Kite Logo"
        />
      </div>

      <h1 className="text-lg font-bold">Follow these steps to delete your account</h1>
      <ul className="list-disc">
        <li>Tap on your settings icon</li>
        <li>
          Scroll down to <code>Delete your account</code> and tap on it
        </li>
        <li>Click on Proceed</li>
      </ul>
      <p className="max-w-[350px] p-8 text-center">
        If you choose to proceed, you will be logged out immediately and all of your personal
        information would be purged from our servers. You will not be able to log in anymore and an
        email would be sent to you when the purge has been completed.
      </p>

      <div className="text-center">
        <a href="/privacy-policy" className="underline">
          Privacy Policy
        </a>
      </div>
    </main>
  );
}
