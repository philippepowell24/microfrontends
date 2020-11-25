import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const DashboardRef = useRef(null);

  useEffect(() => {
    mount(DashboardRef.current);
  }, []);

  return <div ref={DashboardRef} />;
};
