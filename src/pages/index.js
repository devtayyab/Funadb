import React from 'react';

import { Link } from 'gatsby';

export default () => {
    return (
        <div>
          
               
                <p>This is my home page</p>
                <Link to="/product/">Dynamically Created Page At Build Time</Link>
           
        </div>
    );
}