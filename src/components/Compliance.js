import React from 'react';
import ComplianceTop from './compliance/ComplianceTop';
import ProductThird from './product/ProductThird';
import DesignFour from './design/DesignFour';
import DesignSecond from './design/DesignSecond';
import DeveloperSecond from './developer/DeveloperSecond';
import DesignFive from './design/DesignFive';
import DesignFall from './design/DesignFall';
import HomeFive from './home/HomeFive';
import HomeThird from './home/HomeThird';

const Compliance = () => {
  return (
    <div>
      <ComplianceTop/>
      <ProductThird/>
      <DesignFour/>
      <DesignSecond/>
      <DeveloperSecond/>
      <DesignFive/>
      <DesignFall/>
      <HomeFive/>
      <HomeThird/>
    </div>
  );
}

export default Compliance;
