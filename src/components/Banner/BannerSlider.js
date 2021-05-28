import React, {useRef } from 'react'
import Slider from "react-slick";

import { BannerData } from './BannerData'

import angle_left from '../../assets/svgs/angle-left-solid.svg'
import angle_right from '../../assets/svgs/angle-right-solid.svg'

import './styles.css'

const BannerSlider = () => {

  const sliderRef = useRef();

  const settings = {
    fade: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    className: "slides",
  }

  const gotoNext = () => {
    sliderRef.current.slickNext();
  }

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  }

  const banner = BannerData;

  return (
    <div>
      <Slider {...settings} ref={sliderRef}>
        {banner.map((banner) => {
          return(
            <div className="banner">
              <img className="banner-bkgd-image"src={banner.image} alt={banner.name} />
              <div className="banner-content">
                <h2 className="name-banner">{banner.name}</h2>
                <div className="value">
                  <h3>{banner.value}</h3>
                  <p>{banner.value_99}</p>
                </div>
                <p>{banner.description}</p>
              </div>
              <div className="scroll">
                <div className="scroll-name">
                  <p>{banner.name}</p><span className="line-banner"></span>
                </div>
                <div className="scroll-next-prev">
                  <p className="amount-banner">{banner.position} / 2</p>
                  <div className="next_prev_icon">
                    <img src={angle_left} alt="" onClick={()=>gotoPrev()}></img>
                    <img src={angle_right} alt="" onClick={()=>gotoNext()}></img>
                  </div>
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
