import React, { ReactElement } from 'react'
import Applayout from '../../components/Applayout';

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
    return <Applayout>{page}</Applayout>;
  };