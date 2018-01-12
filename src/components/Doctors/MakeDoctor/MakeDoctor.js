import React, { Component } from 'react';
import classes from './MakeDoctor.css';
import PropTypes from 'prop-types';

class MakeDoctor extends Component {

	handlerSubmit = (e) => {
		e.preventDefault();
		let doctor = {
			name: this.name.value,
			specialty: this.specialty.value,
			patients: []
		}
		
		this.form.reset();
		this.props.makeDoctor(doctor);
	}

	render() {
		return	(
			<form  className={classes.Form} ref={(form) => this.form = form} onSubmit={this.handlerSubmit}> 
				<input required placeholder='Ime i Prezime' className={classes.Inputs} type="text" name='name' ref={(input) => this.name = input} />
				<input required placeholder='Specijalnost' className={classes.Inputs} type="text" name='specialty' ref={(input) => this.specialty = input } />
				<input className={classes.Button} type="submit" value='Dodaj' />
			</form>
		);
	}

}

MakeDoctor.propTypes = {
	makeDoctor: PropTypes.func.isRequired
}

export default MakeDoctor;