import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailMovie = () => {
  const { id } = useParams;
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const fetchData = async () => {
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
  // const DetailMovie = setContent.find((item) => item.id === id);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>{DetailMovie.title}</h1>
      {/* <div>{children}</div>
      <div>
        <h1>{DetailMovie.title}</h1>
      </div> */}
    </div>
  );
};

export default DetailMovie;
