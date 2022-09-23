import React from 'react';
import { ImQuotesRight } from 'react-icons/im';

function Slide(props) {
    return(
        <article className={props.position}>
            <img src={props.image} alt={props.name} className='person-img' />
            <h4>{props.name}</h4>
            <p className='title'>{props.title}</p>
            <p className='quote'>{props.quote}</p>
            <ImQuotesRight className='icon' />
        </article>
    );
}

export default Slide;