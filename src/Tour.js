import React, {useState} from 'react';

const Tour = ({id, image, name, info, price, removeTour})=>{
    const [readMore, setReadMore] = useState(false)
    return(
     <article className='single-tour'>
        <img src={image} alt={name}/>
        <footer>
            <div>
                <h4>{name}</h4>
                <h4 className='tour-info'>${price}</h4>
            </div>
            <p>
                {readMore? info : `${info.substring(0,200)}...`}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'show less' : 'Read more'}
                </button>
            </p>
            <button className='delete-btn' 
            onClick={()=>removeTour(id)}>
                Not interested
                </button>
        </footer>
        
     </article>
)}

export default Tour;