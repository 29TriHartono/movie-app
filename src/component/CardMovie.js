import React, { useState } from 'react';

const CardMovie = ({ poster, title, overview, voteAverage, releaseDate, id, popularity, original_language }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <div onClick={() => setShowDetail(true)} className="cursor-pointer">
        <div className="text-white relative">
          <img src={`${process.env.REACT_APP_IMG_URL_300}/${poster}`} alt={title} className="w-full" />
          <div className={'absolute -top-3 -right-2 w-10 h-10 text-sm border-2 font-semibold rounded-full flex items-center justify-center border-bgColors' + (voteAverage >= 7 ? ' bg-blueColors   ' : ' bg-pinkColors   ')}>
            {voteAverage}
          </div>
          <div className="flex flex-col gap-2 mt-2 md:px-2">
            <div>
              <h2 className="text-blueColors text-md lg:text-lg font-semibold">{title}</h2>
              <h4 className="text-white/50">{releaseDate}</h4>
            </div>
          </div>
        </div>
      </div>
      {showDetail && (
        <div className="bg-black/60 w-full fixed flex items-center justify-center z-50  inset-0">
          <div className="w-[90%] h-[90%] lg:h-4/5 bg-bgColors flex flex-col lg:flex-row text-white items-center p-4 gap-2 md:gap-8 relative cursor-pointer z-20">
            <span className="absolute -top-3 rounded-full -right-3 flex items-center justify-center border border-blueColors text-white w-8 h-8 bg-bgColors z-20">
              <button onClick={() => setShowDetail(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
            <div className="h-44 w-64 md:w-full  md:h-1/2 lg:h-full lg:w-1/2">
              <img src={`${process.env.REACT_APP_IMG_URL_300}/${poster}`} className="w-full h-full" alt={title} />
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-2 md:gap-6">
              <h1>{title}</h1>

              <p>{overview}</p>
              <p>
                Release Date : <span className="text_gradient">{releaseDate}</span>
              </p>
              <div>
                language : <span className="text_gradient">{original_language}</span>
              </div>
              <div>
                Popolarity : <span className="text_gradient">{popularity}</span>
              </div>
              <p>
                Rating Movie : <span className="text_gradient">{voteAverage}</span>
              </p>
              <button className="bg-gradient-to-br from-blueColors to-pinkColors py-2 rounded-md">Watch Movie</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardMovie;
