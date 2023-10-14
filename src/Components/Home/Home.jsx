import React from 'react';
import CategorySlider from '../CategorySlider/CategorySlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'
import MainSlider from '../MainSlider/MainSlider';
import { Helmet } from 'react-helmet';
import useNetwork from '../../Hooks/UseNetwork';




export default function Home() {

  let x = useNetwork();

  return <>
    <Helmet>
    <meta name='description' content=''/>
    <title>Fresh Cart Home </title>
  </Helmet>
    {x}
    <MainSlider />
    
    <CategorySlider />

    <FeaturedProducts/>
    
  </>
}
