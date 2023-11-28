import React from 'react';
import {Link, useMatch} from 'react-router-dom';
//useMatch for active links
const CustomLink = ({children, to, ...props}) => {
  const match = useMatch();
  console.log({match});
  return(
    <>
      <Link to={to}
            style={{color: match? 'purple' : 'white'}}
            {...props}>
        {children}
      </Link>
    </>
  )
};
export default CustomLink;

