import React, { useState, Fragment } from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';

const Navigation = props => {

	const [state, setState] = useState({
		isOpen: false
	});

	const navigationList = (
		<ul>
			<li>Navigation link 1</li>
			<li>Navigation link 2</li>
			<li>Navigation link 3</li>
			<li>Navigation link 4</li>
		</ul>
	);


	const toggleDrawer = (open) => (event) => {

		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({
			isOpen: open
		});

	}

	return (

		<div>
			<IconButton edge="end" aria-label="bag" onClick={toggleDrawer(true)}>
				<MenuIcon />
			</IconButton>
			<Drawer anchor="left" open={state.isOpen} onClose={toggleDrawer(false)}>
				{navigationList}
			</Drawer>
		</div>


	);

}

export default Navigation;
