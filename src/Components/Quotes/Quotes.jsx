import React from 'react'
import './Quotes.css'
import quotes from '../../constants/data'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Quotes = () => {
    let settings = {
        dots:true,
        autoplay:true,
        speed:600,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false

    };

  return (
    <div className='quotes'>
        <div className='quotes_content'>
            <Slider {...settings}>
                {
                    quotes.map(
                        (quote, index) => {
                            return (
                                <div className="quotes_item" key={index}>
                                    <p className='paragraph'>
                                        <span className="quote-icon">
                                            <FaQuoteLeft/>
                                        </span>
                                        {quote.body}
                                        <span className="quote-icon">
                                            <FaQuoteRight/>
                                        </span>
                                    </p>
                                    <p className='paragraph_author'>{quote.author}</p>
                                </div>
                            )
                        })
                }
            </Slider>
        </div>
      </div>
  )
}

export default Quotes
