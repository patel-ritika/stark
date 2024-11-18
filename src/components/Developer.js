import React from 'react';
import DeveloperTop from './developer/DeveloperTop';
import DeveloperSecond from './developer/DeveloperSecond';
import DesignThird from './design/DesignThird';
import DesignFour from './design/DesignFour';
import DesignFive from './design/DesignFive';
import DesignFall from './design/DesignFall';
import HomeFive from './home/HomeFive';
import HomeThird from './home/HomeThird';

const Developer = () => {
  return (
    <div>
      <DeveloperTop/>
      <DeveloperSecond/>
      <DesignThird/>
      <DesignFour/>
      <DesignFive/>
      <DesignFall/>
      <HomeFive/>
      <HomeThird/>
    </div>
  );
}

export default Developer;
