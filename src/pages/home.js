import React from 'react';
import { observer } from 'mobx-react-lite';
import Container from '../components/Container';
import HomePending from '../containers/home/HomePending';
import HomeThisWeek from '../containers/home/HomeThisWeek';
import HomeMyLeaves from '../containers/home/HomeMyLeaves';
import HomeStaffLeaves from '../containers/home/HomeStaffLeaves';
import HomeHolidays from '../containers/home/HomeHolidays';
import HomeStaffs from '../containers/home/HomeStaffs';
import HomeBirthdays from '../containers/home/HomeBirthdays';
import HomeProfile from '../containers/home/HomeProfile';
import Head from '../components/Head';
import HomeActivities from '../containers/home/HomeActivities';

const HomePage = () => {
  return (
    <>
      <Head title={null} />
      <Container>
        <div className="mt-4 -mx-3">
          <div className="flex flex-wrap">
            <HomePending />
            <HomeThisWeek />
            <HomeMyLeaves />
            <HomeStaffLeaves />
            <HomeHolidays />
            <HomeStaffs />
            <HomeBirthdays />
            <HomeProfile />
            <HomeActivities />
          </div>
        </div>
      </Container>
    </>
  );
};

export default observer(HomePage);
