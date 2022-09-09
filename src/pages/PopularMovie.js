import axios from 'axios';
import { useEffect, useState } from 'react';
import CardMovie from '../component/CardMovie';
import ThreeDotsWave from '../component/LoadAnimation';
import { motion } from 'framer-motion';
function PopularMovie() {
  const [content, setContent] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState('');
  const fetchPopular = async () => {
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
    fetchPopular();
  }, []);

  return (
    <div className="flex flex-col gap-6 px-setting my-6 md:my-10 w-full">
      <div className="flex items-center justify-between w-full pb-6">
        <motion.h2 animate={{ x: 0 }} initial={{ x: '-100' }} transition={{ duration: 1.4 }} className=" text_gradient">
          Popular Movies
        </motion.h2>
        <motion.div animate={{ x: 0 }} initial={{ x: '100' }} transition={{ duration: 1.4 }} className=" w-1/2">
          <input type="text" className="w-full rounded-md px-2 md:px-4 py-1" label="Search" variant="filled" placeholder="search movies.." onChange={(e) => setSearchText(e.target.value)} />
        </motion.div>
      </div>
      {loading ? (
        <ThreeDotsWave />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-start gap-6 md:gap-8">
          {content
            ?.filter((item) => {
              if (searchText == '') {
                return item;
              } else if (item.title.toLowerCase().includes(searchText.toLowerCase())) {
                return item;
              }
            })
            .map((item, index) => (
              <div key={index}>
                <CardMovie
                  className=""
                  poster={item.poster_path}
                  title={item.title}
                  voteAverage={item.vote_average}
                  releaseDate={item.release_date}
                  original_language={item.original_language}
                  popularity={item.popularity}
                  overview={item.overview}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default PopularMovie;
