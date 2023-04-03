import React, { useState } from "react";
// import PropTypes from "prop-types";

const Demo3 = (props) => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page,setPage] = useState(1);
  const getData = () => {
    return (fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`).then((response) =>
      response.json()
    ));
  };
  const fetchAndUpdateData = async (page) => {
    try {
      setLoading(true);
      const data = await getData();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchAndUpdateData(page);
  },[page]);
  if (loading) {
    return <h1>Loading..............</h1>;
  }

  return (
    <div>
      {posts.map((el) => (
        <h3>{el.id}{el.title}</h3>
      ))}
      <button onClick={() => setPage(page-1)}>Prev</button>
      <button onClick={() => setPage(page+1)}>Next</button>
    </div>
  );
};

export default Demo3;
