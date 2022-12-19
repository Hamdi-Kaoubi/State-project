import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import ProfileCard from './components/ProfileCard';

class App extends React.Component {

  state = {
    Person: {
      fullName: "HAMDI KAOUBI",
      bio: "I really enjoy coding times",
      imgSrc: "/FB_IMG_1535366640965.jpg",
      profession: "JS Beginner"
    },
    shows: false,
  }

  toggleVisibility = () => {
    this.setState({
      shows: !this.state.shows
    })
  }

  render() {
    return (
      <div className="App">
        <h2 style={{ marginTop: "100px" }}>Welcome</h2>
        <Button style={{ marginTop: '20px' }} className='visibility-btn' onClick={this.toggleVisibility}>{this.state.shows ? "Hide profile" : "Show profile"} </Button>

        {this.state.shows ?
          (<div>
            <ProfileCard data={this.state.Person} />
          </div>
          ) : (<h6 style={{ marginTop: '20px' }}> Click on the button below to show my profile </h6>
          )
        }
      </div>  
    );
  }
}
export default App;
