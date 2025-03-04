import { useEffect, useState } from "react";

const useIsAppleDevice = () => {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    // Check the userAgent for Apple device keywords
    const userAgent = navigator.userAgent.toLowerCase();
    const isApple = /iphone|ipad|ipod|macintosh/.test(userAgent);
    setIsAppleDevice(isApple);
  }, []);
  const storeLink = isAppleDevice
    ? "https://apps.apple.com/ng/app/kite-app/id6499059243"
    : "https://play.google.com/store/apps/details?id=app.getkite.app";
  return { isAppleDevice, storeLink };
};

export default useIsAppleDevice;
