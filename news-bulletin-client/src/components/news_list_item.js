import React from 'react';
import classes from '../css/styles.css'

const NewsItem = ({item}) =>{

    return(
        <div className={classes.news_item}>
            <h3>{item.headline}</h3>
            <div>
                {item.url}
            </div>
        </div> 
    )
}

export default NewsItem;

