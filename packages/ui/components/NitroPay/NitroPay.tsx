/*eslint prefer-rest-params: "off"*/

import { useEffect, useState } from 'react';
import { useUserStore } from '../../utils/userStore';
import AdsFallback from './AdsFallback';

type NitroAd = {
  createAd: (name: string, options: unknown) => void;
  addUserToken: (token: string) => void;
  queue: any[];
};

declare global {
  interface Window {
    nitroAds: NitroAd;
  }
}

window.nitroAds = window.nitroAds || {
  createAd: function () {
    window.nitroAds.queue.push(['createAd', arguments]);
  },
  addUserToken: function () {
    window.nitroAds.queue.push(['addUserToken', arguments]);
  },
  queue: [],
};

const NitroPay = () => {
  const account = useUserStore((state) => state.account);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (
      navigator.userAgent.includes('Overwolf') ||
      account?.isSupporter ||
      location.href === 'http://localhost:3001/'
    ) {
      return;
    }

    window['nitroAds'].createAd('am-video', {
      format: 'video-nc',
      video: {
        float: 'always',
      },
    });

    const script = document.createElement('script');
    script.src = 'https://s.nitropay.com/ads-1042.js';
    script.setAttribute('data-cfasync', 'false');
    script.setAttribute('data-log-level', 'silent');
    script.async = true;

    const timeoutId = setTimeout(() => {
      setShowFallback(true);
    }, 1500);

    script.onload = () => {
      clearTimeout(timeoutId);
      setShowFallback(false);
    };

    document.body.appendChild(script);

    return () => {
      clearTimeout(timeoutId);
      document.body.removeChild(script);
    };
  }, []);

  if (account?.isSupporter) {
    return <></>;
  }

  return (
    <>
      {showFallback && <AdsFallback onClose={() => setShowFallback(false)} />}
      <div id="am-video" />
    </>
  );
};

export default NitroPay;
