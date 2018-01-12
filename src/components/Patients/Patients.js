import React from 'react';
import MakePatient from './MakePatient/MakePatient';
import ShowPatients from './ShowPatients/ShowPatients';
import classes from './Patients.css';
import PropTypes from 'prop-types';

const Patients = (props) => {
	return (
		<div className={classes.Patients}>
			<h1>Pacijenti</h1>
			<ShowPatients pickDoctor={props.pickDoctor} patients={props.patients} doctors={props.doctors} />
			<MakePatient makePatient={props.makePatient} />
		</div>
	);
}


Patients.propTypes = {
	pickDoctor: PropTypes.func.isRequired,
	patients: PropTypes.array.isRequired,
	doctors: PropTypes.array.isRequired,
	makePatient: PropTypes.func.isRequired
}


export default Patients;
