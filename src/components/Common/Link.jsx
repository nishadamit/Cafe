import React from 'react';
import { BrowserRouter as Router ,Link,Route,Switch } from 'react-router-dom';
import '../../style/common.scss';

export const Link1 = ({link,text}) =>{
      return(
          
               <Link className="link" to={link} >{text}</Link>
          
      )
}
