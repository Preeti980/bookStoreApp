import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const filterdata = list.filter((data)=>data.category === "free");
    // console.log(filterdata)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md-auto md:px-20 px-4">
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Unlock your potential with our free course designed to empower learners of all levels. Dive into expertly crafted content, interactive lessons, and practical exercises that will enhance your skills and knowledge. Enroll now and take the first step towards mastering a new subject, all at no cost to you. Start your learning journey today!</p>

        </div>
    
   
    <div>
    <Slider {...settings}>
        {filterdata.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebook