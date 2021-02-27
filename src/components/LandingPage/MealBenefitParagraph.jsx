import React from 'react';
import {Paragraph1} from '../Common/Paragraph';
import ParagraphtickIcon from '../../assests/ParagraphTickIcon.svg'


export const MealBenefitParagraph = ({data}) =>{
        
    return(
        <div className="meal-benfit-paragraph-container" >
            <img src={ParagraphtickIcon} />
            <Paragraph1
                data={data}
                className="meal-benfit-paragraph"
            />
        </div>
    )
}

export default MealBenefitParagraph