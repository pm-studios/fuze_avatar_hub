import mixpanel from 'mixpanel-browser';

// Production 환경에서만 Mixpanel 활성화
const isProd = window.location.hostname === 'avatar.fuze.io' ||
               window.location.hostname === 'd1234567890.cloudfront.net'; // prod CloudFront 도메인 추가 필요시

const isEnabled = isProd;

if (isEnabled) {
  mixpanel.init('1f9f4a57461a6dbda93b6c55a5392513', {
    track_pageview: true,
    persistence: 'localStorage',
  });

  // 페이지 진입 시간 기록
  let pageEnterTime = Date.now();

  // 체류시간 추적 - 페이지 떠날 때 자동 전송
  const trackTimeSpent = () => {
    const timeSpent = Math.round((Date.now() - pageEnterTime) / 1000);
    mixpanel.track('Time Spent', {
      duration_seconds: timeSpent,
      page: window.location.pathname,
    });
  };

  // 페이지 떠날 때 체류시간 전송
  window.addEventListener('beforeunload', trackTimeSpent);

  // visibility change로 탭 전환 시에도 추적
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      trackTimeSpent();
    } else {
      pageEnterTime = Date.now();
    }
  });
}

export const track = (eventName, properties = {}) => {
  if (isEnabled) {
    mixpanel.track(eventName, properties);
  }
};

export const trackButtonClick = (buttonName, properties = {}) => {
  if (isEnabled) {
    mixpanel.track('Button Click', {
      button_name: buttonName,
      ...properties,
    });
  }
};

export const trackBannerClick = (bannerName, url) => {
  if (isEnabled) {
    mixpanel.track('Banner Click', {
      banner_name: bannerName,
      destination_url: url,
    });
  }
};

export const trackLinkClick = (linkName, url) => {
  if (isEnabled) {
    mixpanel.track('Link Click', {
      link_name: linkName,
      destination_url: url,
    });
  }
};

export default mixpanel;
