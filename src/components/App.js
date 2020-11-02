import React, {Component} from "react"
import '../css/App.css';
import '../css/index.css';

// Components
import AddAppointments from "./AddAppointments"
import SearchAppointments from './SearchAppointments'
import ListAppointments from "./ListAppointments"

class App extends Component {
  state = {
    myLastName: "Egomson"
  }

  render() {
    const {myLastName} = this.state
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {myLastName}
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
