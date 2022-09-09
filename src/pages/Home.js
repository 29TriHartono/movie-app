import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import PopularMovie from './PopularMovie';
import ThreeDotsWave from '../component/LoadAnimation';

const Home = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState('');

  const fetchMovie = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}`);
      setContent(response.data.results);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovie();
  }, []);
  return (
    <>
      {loading ? (
        <div className="w-full text-white flex items-center justify-center">
          <ThreeDotsWave />
        </div>
      ) : (
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          speed={300}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[400px] md:h-[500px] w-full"
        >
          {content.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black opacity-50 w-full h-full absolute z-10"></div>
              <div className="w-full h-full bg-no-repeat bg-center bg-cover absolute" style={{ backgroundImage: `url(${process.env.REACT_APP_IMG_URL_500}/${item.poster_path})` }}></div>
              <div className="relative w-full h-full flex flex-col-reverse md:flex-row items-center z-20 justify-center md:justify-between gap-4 md:py-10 px-setting">
                <div className="text-white w-full flex flex-col gap-4 md:w-1/2">
                  <h1>{item.title}</h1>
                  <p className="text-md md:text-lg leading-5">{item.overview}</p>
                  <h3>{item.release_date}</h3>
                  <div className="flex items-center gap-4">
                    <h2>Rating Film</h2>
                    <div className={' w-10 h-10  font-semibold rounded-full flex items-center justify-center ' + (item.vote_average >= 7 ? ' bg-blueColors   ' : ' bg-pinkColors   ')}>{item.vote_average}</div>
                  </div>
                </div>
                <img className="hidden md:block md:h-full rounded-md" src={`${process.env.REACT_APP_IMG_URL_300}/${item.poster_path}`} alt="poster image" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <PopularMovie />
    </>
  );
};

export default Home;
