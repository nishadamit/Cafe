import React from 'react';
import { Button } from 'react-bootstrap';

 export const Button1 = ({title,className}) =>{
           return(
                  <Button className={className} >{title}</Button>
           )
}

export const LinkButton = ({title,className,href}) =>{
       return(
              <Button href={href} className={className} >{title}</Button>
       )
}
