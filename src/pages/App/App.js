import React, {Component} from 'react';
import './App.css';
import {Link, Route} from 'react-router-dom';
import { getAllStarShips } from '../../services/sw-api';
import StarshipPage from '../StarshipPage/StarshipPage';

class App extends Component {

  state = {
    starships: []
  }

  async componentDidMount() {
    const allStarShips = await getAllStarShips();
    this.setState({
      starships: allStarShips.results
    })
  }

  render() {
    //console.log(this.state.starships[2]);
    return (
      <div className="App">
        <header className="App-header">Star Wars Starships</header>

        <Route exact path='/' render={() => 
          <div className='box'>
            {this.state.starships.map((starship, idx) => 
              <Link className='btn btn-default' key={idx} to={{
                  pathname: '/starships',
                  state: starship
              }}>
                {starship.name}
              </Link>
            )}
          </div>
        }/>

        <Route exact path='/starships' render={(props) => 
          <StarshipPage {...props}/>
        }/>


      </div>
    );
  }
}

export default App;
