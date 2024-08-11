import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Products from './Products';
import Dashboard from './Dashboard';

const StoreContent = () => {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(() => searchParams.get('storetab') || 'dashboard');

  useEffect(() => {
    const tab = searchParams.get('storetab');
    if (tab && tab !== activeTab) {
      setActiveTab(tab);
    }
  }, [searchParams, activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <Products />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='grid gap-6'>
      {renderContent()}
    </div>
  );
};

export default StoreContent;
