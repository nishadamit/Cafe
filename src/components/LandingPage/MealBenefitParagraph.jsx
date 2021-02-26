import React from 'react';
import Paragraph from '../Common/Paragraph';
import ParagraphtickIcon from '../../assests/ParagraphTickIcon.svg'


export const MealBenefitParagraph = ({data}) =>{
        
    return(
        <div className="meal-benfit-paragraph-container" >
            <img src={ParagraphtickIcon} />
            <Paragraph
                data={data}
                className="meal-benfit-paragraph"
            />

        </div>
    )
}

export default MealBenefitParagraph