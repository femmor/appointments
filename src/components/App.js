import React, {Component} from "react"
import '../css/App.css';
import '../css/index.css';

// Components
import AddAppointments from "./AddAppointments"
import SearchAppointments from './SearchAppointments'
import ListAppointments from "./ListAppointments"
import { without } from "lodash";

class App extends Component {
  constructor() {
    super()

    this.state = {
      appointments: [],
      lastIndex: 0,
      formDisplay: false,
      orderBy: "petName",
      orderDir: "asc"
    }
    this.deleteAppointment = this.deleteAppointment.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.addAppointments = this.addAppointments.bind(this)
  }

  deleteAppointment = (apt) => {
    let tempApts = this.state.appointments
    tempApts = without(tempApts, apt)

    this.setState({
      appointments: tempApts
    })
  }

  addAppointments = (apt) => {
    const tempApts = this.state.appointments
    apt.aptId = this.state.lastIndex
    tempApts.unshift(apt)

    this.setState({
      appointments: tempApts,
      lastIndex: this.state.lastIndex + 1
    })
  }

  toggleForm = () => {
    this.setState({
      formDisplay: !this.state.formDisplay
    }) 
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
    const {appointments, formDisplay, orderBy, orderDir} = this.state

    let order;
    let filteredApts = appointments

    if (orderDir === "asc") {
      order = 1
    } else {
      order = -1
    }

    filteredApts.sort((a, b) => {
      if(a[orderBy].toLowerCase() < b[orderBy].toLowerCase()) {
        return -1 * order
      } else {
        return 1 * order
      }
    })

    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments formDisplay={formDisplay} toggleForm={this.toggleForm} addAppointments={this.addAppointments}/>
                <SearchAppointments orderBy={orderBy} orderDir={orderDir}/>
                <ListAppointments appointments={filteredApts} deleteAppointment={this.deleteAppointment} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
