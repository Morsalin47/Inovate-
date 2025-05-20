import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const AboutSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="w-full max-w-[600px]">
      <Slider {...settings}>
        <div className="relative mt-[107px]">
          <div className="absolute top-[-80px] left-[48px] h-[124px] w-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] rounded-full"></div>
          <div className="bg-white max-w-[687px] pt-[64px] px-[60px] pb-[50px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="max-w-[567px] font-secondary text-[22px] leading-[44px] text-pera">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.”
            </p>
            <div className="flex justify-between mt-[37px]">
              <div>
                <h5 className="font-primary font-bold text-[24px] leading-9 text-[#30344E]">
                  Robert Fox
                </h5>
                <p className="">Digital Marketer</p>
              </div>
              <div className="pl-[258px]">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[107px]">
          <div className="absolute top-[-80px] left-[48px] h-[124px] w-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] rounded-full"></div>
          <div className="bg-white max-w-[687px] pt-[64px] px-[60px] pb-[50px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="max-w-[567px] font-secondary text-[22px] leading-[44px] text-pera">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.”
            </p>
            <div className="flex justify-between mt-[37px]">
              <div>
                <h5 className="font-primary font-bold text-[24px] leading-9 text-[#30344E]">
                  Robert Fox
                </h5>
                <p className="">Digital Marketer</p>
              </div>
              <div className="pl-[258px]">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-[107px]">
          <div className="absolute top-[-80px] left-[48px] h-[124px] w-[124px] bg-[#C4C4C4] border-[10px] border-[#F7F7FC] rounded-full"></div>
          <div className="bg-white max-w-[687px] pt-[64px] px-[60px] pb-[50px] rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
            <p className="max-w-[567px] font-secondary text-[22px] leading-[44px] text-pera">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.”
            </p>
            <div className="flex justify-between mt-[37px]">
              <div>
                <h5 className="font-primary font-bold text-[24px] leading-9 text-[#30344E]">
                  Robert Fox
                </h5>
                <p className="">Digital Marketer</p>
              </div>
              <div className="pl-[258px]">
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
                <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B" }} />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default AboutSlider
