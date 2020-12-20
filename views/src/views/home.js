/** @format */

import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import LoaderComponent from './articles/_loader';
import moment from '../../../Back-End/node_modules/moment';
const HomeComponent = () => {
  const [articles, setArticles] = useState();
  useEffect(() => {
    getArticle();
  }, []);
  const getArticle = () => {
    fetch('http://localhost:5000/articleController/getData')
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const submitEvent = (article) => {
    console.log(article);
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(article),
    };

    fetch(
      `http://localhost:5000/articleController/delete/${article._id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(`${article._id} has been deleted now`);
        getArticle();
      });
  };
  if (articles) {
    return (
      <div className="container">
        <h1 className="mb-4">Blog Articles</h1>
        <Link to="/new" className="btn btn-success">
          New Article
        </Link>
        {articles.map((article, i) => {
          return (
            <div className="card mt-4" key={i}>
              <div className="card-body">
                <h4 className="card-title">{article.title}</h4>
                <div className="card-subtitle text-muted mb-2">
                  {moment(article.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                </div>
                <div className="card-text mb-2">
                  <h5>{article.sortDetail}</h5>
                </div>
                <Link
                  className="btn btn-primary"
                  to={`articles/${article.slug}`}>
                  Show
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => {
                    submitEvent(article);
                  }}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <LoaderComponent />;
  }
};

export default HomeComponent;
