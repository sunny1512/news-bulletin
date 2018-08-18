import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
// COMPONENTS
import Header from './components/header';
import NewsList from  './components/news_list';
import axios from 'axios';
class App extends Component {


    componentWillMount(){

        axios.get('/news/')
        .then((response)=>{
          console.log(response.data);
          this.setState({
              news : response.data
          })
        })
      }
      
    state = {
        news:[],
        filtered:[]
    }

    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.headline.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
       // console.log(filtered)
    }

    render(){
        let newsFiltered = this.state.filtered;
        let newsWhole = this.state.news
        return (
            <div>
                 <Header keywords={this.getKeyword}/>
                 <div className="Container ">
                 <NewsList className ="news_list" news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
                    <h3>
                        The news are:
                    </h3>
                 </NewsList>
                 </div>
            </div>
        )
    }  
}


ReactDOM.render(<App/>,document.querySelector('#root'));
