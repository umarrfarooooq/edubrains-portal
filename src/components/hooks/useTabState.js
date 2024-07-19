import { useState } from 'react';

export const useTabState = (initialTab) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  return { activeTab, setActiveTab };
};