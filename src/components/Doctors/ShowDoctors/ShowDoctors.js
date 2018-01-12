import React from 'react';
import classes from './ShowDoctors.css';
import PropTypes from 'prop-types';

const ShowDoctors = (props) => {

	return (
		<ul className={classes.ShowDoctors}>
			{
				props.doctors.map((doctor,index) => {
					return (
						<li className={classes.ShowInfo} key={index} > 
							<p>{doctor.name}</p>
							<p>{doctor.specialty}</p>
						</li>
					);
				})
			}
		</ul>
	);

}

ShowDoctors.propTypes = {
	doctors: PropTypes.array.isRequired
}


export default ShowDoctors;