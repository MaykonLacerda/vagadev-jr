import React, {useRef } from 'react'
import Slider from "react-slick";

import { BannerData } from './BannerData'

import angle_left from '../../assets/svgs/angle-left-solid.svg'
import angle_right from '../../assets/svgs/angle-right-solid.svg'

import './styles.css'

const BannerSlider = () => {

  const sliderRef = useRef();

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    className: "slides",
  }

  const gotoNext = () => {
    sliderRef.current.slickNext();
  }

  const banner = BannerData;

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {banner.map((banner) => {
          return(
            <div className="banner">
              <img src={banner.image} alt={banner.name} />
              <div className="banner-content">
                <h2 className="name-banner">{banner.name}</h2>
                <div className="value">
                  <h2>{banner.value}</h2>
                  <p>{banner.value_99}</p>
                </div>
                <p>{banner.description}</p>
              </div>
              <div className="scroll">
                <div className="scroll-name">
                  <p>{banner.name}</p>
                </div>
                <div className="scroll-next-prev">
                  <p>1 / 2</p>
                  <img src={angle_right} alt="" onClick={()=>gotoNext()}></img>
                  <img src={angle_left} alt="" onClick={()=>gotoNext()}></img>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}


export default BannerSlider;
