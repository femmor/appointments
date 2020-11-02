import React, {Component} from "react"
import '../css/App.css';
import '../css/index.css';

// Components
import AddAppointments from "./AddAppointments"
import SearchAppointments from './SearchAppointments'
import ListAppointments from "./ListAppointments"

class App extends Component {
  state = {
    appointments: []
  }

  componentDidMount() {
    fetch("./data.json")
    .then(
      response => response.json() 
    )
    .then(
      result => {
        const apt = result.map(appointment => {
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
    // Get the appointments from the state
    const listApts = appointments.map(item => {
      const {aptDate, aptNotes, ownerName, petName} = item
      return (
        <div>{petName}</div>
      )
    })

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {listApts}
                <AddAppointments/>
                <SearchAppointments/>
                <ListAppointments/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
