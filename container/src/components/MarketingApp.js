import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const MarketingRef = useRef(null);

  useEffect(() => {
    mount(MarketingRef.current);
  }, []);

  return <div ref={MarketingRef} />;
};
