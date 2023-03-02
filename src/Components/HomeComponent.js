import React from 'react';
import axios from 'axios';
class HomeComponent extends React.Component {
    state={
        genres: []
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=1c15c16e41dcc29956bc94642f34aa4e&language=en-US')
        .then(res => {
            this.setState({genres: res.data.genres})   
        })
    }
  render() {
    return (
      <div>
        <h2>Các thể loại phim</h2>
        {
            this.state.genres.map(genre => {
                return <div>{genre.name}</div>
            })
        }
      </div>
    );
  }
}
export default HomeComponent;