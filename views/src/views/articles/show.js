/** @format */
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import LoaderComponent from './_loader';
import moment from '../../../../Back-End/node_modules/moment';
const ShowComponent = () => {
  const [article, setArticle] = useState('');
  const {id} = useParams();
  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({slag: id}),
    };
    fetch(`http://localhost:5000/articleController/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setArticle(data));
  }, [id]);
  if (article) {
    return (
      <div className="container">
        <h1 className="mb-4">Articles</h1>
        <h2 className="mb-4">{article.title}</h2>
        <div className="text-muted mb-2">
          {moment(article.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <Link to="/" className="btn btn-secondary">
          All Articles
        </Link>
        <Link
          to={{
            pathname: '/Edit',
            state: article,
          }}
          className="btn btn-secondary"
          params={article}>
          Edit
        </Link>
        <div className="p-2">
          <h2>{article.sortDetail}</h2>
        </div>
        <div className="p-2">{article.description}</div>
      </div>
    );
  } else {
    return <LoaderComponent />;
  }
};
export default ShowComponent;
