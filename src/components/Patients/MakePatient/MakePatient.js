import React, { Component } from 'react';
import classes from './MakePatient.css';
import PropTypes from 'prop-types';

class MakePatient extends Component {

	handlerSubmit = (e) => {
		e.preventDefault();
		let patient = {
			name: this.name.value,
			jmbg: this.jmbg.value,
			bzk: this.bzk.value,
			doctor: null
		}
		this.form.reset();
		this.props.makePatient(patient);
	}

	render() {
		return	(
			<form className={classes.Form} ref={(form) => this.form = form} onSubmit={this.handlerSubmit}> 
				<input required placeholder='Ime i Prezime' className={classes.Inputs} type="text" name='name' ref={(input) => this.name = input} />
				<input required placeholder='JMBG' className={classes.Inputs} type="text" name='Jmbg' ref={(input) => this.jmbg = input} />
				<input required placeholder='Br. zdravstvenog kartona' className={classes.Inputs} type="text" name='bzk' ref={(input) => this.bzk = input } />
				<input  className={classes.Button} type="submit" value='Dodaj' />
			</form>
		);
	}
}

MakePatient.propTypes = {
	makePatient: PropTypes.func.isRequired
}

export default MakePatient;