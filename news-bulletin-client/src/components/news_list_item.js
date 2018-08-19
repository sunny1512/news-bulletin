import React from 'react';
import '../css/test.css';

const NewsItem = ({item}) =>{

    return(
        <div className="news_item">
        <img alt="Independence Day" src ={require('../logo.svg')}/>
       <div className="info"><h2 className="title">{item.headline}</h2>
       <ul>
			<li style={{"width":"50%"}}><a href={"#website"}><span className="fa fa-globe"></span> Website</a></li>
			<li style={{"width":"50%"}}><span className="fa fa-money"></span> $39.99</li>
		</ul>
        </div>
       <div className="social">
				<ul>
					<li className="facebook" style={{"width":"33%"}}><a href={"#facebook"}><span className="fa fa-facebook"></span></a></li>
                    <li className="twitter" style={{"width":"34%"}}><a href={"#twitter"}><span className="fa fa-twitter"></span></a></li>
					<li className="google-plus" style={{"width":"33%"}}><a href={"#google-plus"}><span className="fa fa-google-plus"></span></a></li>
				</ul>
		</div>
   
        </div> 


    )
}

export default NewsItem;

