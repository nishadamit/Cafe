import React from 'react';

const MealBenefitImage = ({image,alt}) =>{
       return(
           <div className="meal-benefit-image">
                  <img src={ image}  alt={alt} />
           </div>
           
       )
}

export default MealBenefitImage