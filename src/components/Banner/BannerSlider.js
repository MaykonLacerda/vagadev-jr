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
    arrows: false,
    slidesToScroll: 1,
    className: "slides"
  }

  const banner = BannerData;

  return (
    <div>
      <Slider {...settings}>
        {banner.map((banner) => {
          return(
            <div className="banner">
              <img src={banner.image} alt={banner.name} />
              <div className="banner-content">
                <h1>{banner.name}</h1>
                <div className="value">
                  <h2>{banner.value}</h2>
                  <h3>{banner.value_99}</h3>
                </div>
                <p>{banner.description}</p>
              </div>
              <div className="scroll">
                <p>{banner.name}</p>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}


export default BannerSlider;
