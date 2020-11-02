import React, {Component} from "react"
import '../css/App.css';
import '../css/index.css';

// Components
import AddAppointments from "./AddAppointments"
import SearchAppointments from './SearchAppointments'
import ListAppointments from "./ListAppointments"

class App extends Component {
  state = {
    appointments: [],
    lastIndex: 0
  }

  componentDidMount() {
    fetch("./data.json")
    .then(
      response => response.json() 
    )
    .then(
      result => {
        const apt = result.map(appointment => {
          appointment.aptId = this.state.lastIndex
          this.setState({
            lastIndex: this.state.lastIndex + 1
          })

          return appointment
        })

        this.setState({
          appointments: apt
        })
      }
    )
  }
  

  render() {
    // Destructure appointments from the state
    const {appointments} = this.state

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments/>
                <SearchAppointments/>
                <ListAppointments appointments={appointments}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
