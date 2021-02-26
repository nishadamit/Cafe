import React from 'react';
import { Button } from 'react-bootstrap';

 const Button1 = ({title,className}) =>{
           return(
                  <Button className={className} >{title}</Button>
           )
}
export default Button1