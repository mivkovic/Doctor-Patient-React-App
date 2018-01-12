import React from 'react';
import MakeDoctor from './MakeDoctor/MakeDoctor';
import ShowDoctors from './ShowDoctors/ShowDoctors';
import PropTypes from 'prop-types';
import classes from './Doctors.css';

const Doctors = (props) => {
	return (
		<div className={classes.Doctors}>
			<h1>Doktori</h1>
			<ShowDoctors doctors={props.doctors} />
			<MakeDoctor makeDoctor={props.makeDoctor} />
		</div>
	);
}

Doctors.propTypes = {
	doctors: PropTypes.array.isRequired,
	makeDoctor: PropTypes.func.isRequired
}


export default Doctors;
