import React from 'react'
import Slider from "react-slick";

import { BannerData } from './BannerData'

import './styles.css'

const BannerSlider = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides"
  }

  const banner = BannerData;

  return (
    <div className="banner-desktop">
      <Slider {...settings}>
        {banner.map((banner) => {
          return(
            <div>
              <img src={banner.image} alt={banner.name} />
            </div>
          )
        })}
      </Slider>

    </div>
  )
}


export default BannerSlider;
