import React from 'react';
import '../../style/common.scss';

const InputBox = ({className,Placeholder,name,value,onChange,type}) =>{
      return(
          <input
               className={className}
               placeholder={Placeholder}
               required={true}
               name={name}
               value={value}
               onChange={onChange}
               type={type}
          />
      )
}

export default InputBox