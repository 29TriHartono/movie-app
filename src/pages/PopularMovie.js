import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../component/Card';

function PopularMovie() {
  const [content, setContent] = useState([]);

  const fetchPopular = async () => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/movie/popular`, {
        params: {
          api_key: process.env.REACT_APP_TMDB_KEY,
        },
      })
      .then((response) => {
        setContent(response.data.results);
      });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchPopular();
  }, []);
  return (
    <div className="flex flex-col gap-6 px-setting my-6 md:my-10">
      <h2 className=" text_gradient">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 items-start gap-6 md:gap-8">
        {/* {content
          ?.filter((result) => {
            if (searchText == '') {
              return result;
            } else result.title.toLoweCase().includes(searchText.toLocaleLowerCase);
          })
          .map((result, index) => (
            <div key={index}>
              <Card className="" poster={result.poster_path} title={result.title} voteAverage={result.vote_average} releaseDate={result.release_date} />
            </div>
          ))} */}
        {content.map((item, index) => (
          <div key={index}>
            <Card className="" poster={item.poster_path} title={item.title} voteAverage={item.vote_average} releaseDate={item.release_date} original_language={item.original_language} popularity={item.popularity} overview={item.overview} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularMovie;
