import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import IconButton from '@material-ui/core/IconButton';
import styles from './MiniShippingCart.module.scss';

const useStyles = makeStyles(theme => ({
	toolbar: theme.mixins.toolbar,
}));

const MiniShoppingCart = props => {


	const classes = useStyles();

	const [state, setState] = useState({
		isOpen: false
	});

	const navigationList = (

			<ul>
				<li>Shopping item 1</li>
				<li>Shopping item 1</li>
				<li>Shopping item 1</li>
				<li>Shopping item 1</li>
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
			<IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
				<LocalMallIcon />
			</IconButton>
			<Drawer anchor="top" open={state.isOpen} onClose={toggleDrawer(false)}>
				{navigationList}
			</Drawer>
		</div>


	);


}

export default MiniShoppingCart;
