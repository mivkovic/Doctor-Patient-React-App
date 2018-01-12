import React, { Component } from 'react';
import Doctors from './components/Doctors/Doctors';
import Patients from './components/Patients/Patients';
import classes from './App.css';

class App extends Component {

  state = {
    doctors: [],
    patients: []
  }

  makeDoctor = doctor => {
    let doctors = [...this.state.doctors];
    let newDoctors = [...doctors, doctor];

    this.setState({doctors:newDoctors });
  }

  makePatient = patient => {
    let patients = [...this.state.patients];
    let newPatients = [...patients, patient];

    this.setState({patients: newPatients });
  }

  pickDoctor = (idD,idP) => {
    const patients = [...this.state.patients];
    const doctors = [...this.state.doctors];

    const updatedPatient = {
      ...patients[idP], 
      doctor: {
       name: this.state.doctors[idD].name, 
       specialty: this.state.doctors[idD].specialty
      }
     };

    const updatedDoctor = {
      ...doctors[idD], 
      patients: [
        ...doctors[idD].patients,
        updatedPatient
      ]};

     const filteredDoctors = doctors.map((doctor,index) => {
       return index === +idD ? updatedDoctor : doctor;
    })    

    const filteredPatients = patients.map((patient,index) => {
       return index === +idP ? updatedPatient : patient;
    })    

    this.setState({patients: filteredPatients, doctors: filteredDoctors});
  }

  render() {
    return (
      <div className={classes.App}>
          <Doctors 
            doctors={this.state.doctors} 
            makeDoctor={this.makeDoctor} />
          <Patients 
            pickDoctor={this.pickDoctor} 
            patients={this.state.patients} 
            makePatient={this.makePatient} 
            doctors={this.state.doctors}/>               
      </div>
    );
  }
}



export default App;
                    