import React from 'react';

const MealBenefitImage = ({image,alt}) =>{
       return(
           <div className="mealfeature-card-image">
                  <img src={ image}  alt={alt} />
           </div>
           
       )
}

export default MealBenefitImage