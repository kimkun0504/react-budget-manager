import React from 'react';
import {Link} from 'react-router-dom';

const ErrorPg = () => (
    <div>
      <p>Error 404</p> 
      <p><Link to='/'>Go Home</Link></p>
    </div>
  );

  export default ErrorPg;