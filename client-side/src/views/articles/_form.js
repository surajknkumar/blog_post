/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const FormComponent = (props) => {
  const history = useHistory();
  const [article, setArticle] = useState(
    props.article
      ? props.article
      : {
          description: '',
          sortDetail: '',
          title: '',
        }
  );

  const submitEvent = (event, e) => {
    console.log(article);
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(article),
    };

    fetch(
      `http://localhost:5000/articleController/${
        props.path === 'new' ? 'create' : `update/${article._id}`
      }`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push({pathname: '/'});
      });
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={submitEvent}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            value={article.title}
            onChange={(event) =>
              setArticle({...article, title: event.target.value})
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Sort Detail</label>
          <textarea
            name="sortDetail"
            id="sortDetail"
            required
            value={article.sortDetail}
            onChange={(event) =>
              setArticle({...article, sortDetail: event.target.value})
            }
            className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label>description</label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            value={article.description}
            onChange={(event) =>
              setArticle({...article, description: event.target.value})
            }
            required></textarea>
        </div>
        <Link to="/" className="btn btn-secondary mr-2">
          Cancel
        </Link>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};
export default FormComponent;
