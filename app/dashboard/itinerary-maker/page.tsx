'use client';

import React, { useState } from "react";
import Dropdown from '@/app/components/dropdown';

const Page = () => {

  const [selectedValue, setSelectedValue] = useState<string>('');

  const onSelectCallback = (value: string) => {
    setSelectedValue(value);
    console.log('selectedValue', selectedValue);
  }

  return <div className="h-screen">
    <Dropdown onSelectCallback={onSelectCallback} name='dropdown' values={['one', 'two', 'three']} />
  </div>;
};

export default Page;
