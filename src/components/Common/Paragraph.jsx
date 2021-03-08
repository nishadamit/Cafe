import React from 'react';
import '../../style/common.scss';

export const Paragraph1 = ({data ,className}) =>{
        return(
             <p className={className} >{data}</p>
        )
}

export const Paragraph2 = ({data}) =>{
        return(
             <p className="para2" >{data}</p>
        )
}
