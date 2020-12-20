/**
 * @format
 * @author suraj kumar
 * @email surajknkumar@gmail.com
 * @Owner Sumitra - only for interview purpose
 */

import React from 'react';
import FormComponent from './_form';

const NewComponent = () => {
  return (
    <div className="container">
      <h1 className="mb-4">New Articles</h1>
      <FormComponent path="new" />
    </div>
  );
};
export default NewComponent;
