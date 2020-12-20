/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import FormComponent from './_form';

const EditComponent = (props) => {
  const [article] = useState(useLocation());
  console.log(article.state);
  useEffect(() => {}, []);
  return (
    <div className="container">
      <h1 className="mb-4">Edit Articles</h1>
      <FormComponent article={article.state} path="update" />
    </div>
  );
};
export default EditComponent;
