import React, { Component } from 'react';
import classes from './ShowPatients.css';
import PropTypes from 'prop-types';

class ShowPatients extends Component {

	handlerChange = (e) => {
		const doctorIndex = e.target.value;
		const patientIndex = e.target.parentNode.dataset.id;
	
		this.props.pickDoctor(doctorIndex,patientIndex);
	}

	render () {
		let doctors = this.props.doctors.map((doctor,index) => {
			return <option key={doctor.name} value={index}> {doctor.name}</option>
		});

		return (
				<ul className={classes.ShowPatients}>
					{
						this.props.patients.map((patient,index) => {
							return (
								<li className={classes.ShowInfo} key={index} data-id={index}> 
									<p>{patient.name}</p>
									<p>{patient.jmbg}</p>
									<p>{patient.bzk}</p>
									{patient.doctor ? 'Izabran lekar: ' + patient.doctor.name : (<select 
																									className={classes.Button} 
																									onChange={this.handlerChange}>
																				<option 
																					hidden 
																					defaultValue='Izaberite'>
																					Izaberite doktora
																				</option>
																				{doctors}
																			</select>) }
								</li>
							);
						})
					}
				</ul>
		);

	}
}

ShowPatients.propTypes = {
	pickDoctor: PropTypes.func.isRequired,
	patients: PropTypes.array.isRequired,
	doctors: PropTypes.array.isRequired
}

export default ShowPatients;