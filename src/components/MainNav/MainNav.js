import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from './MainNav.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import MiniShoppingCart from './MiniShoppingCart/MiniShoppingCart';
import Navigation from './Navigation/Navigation';


const useStyles = makeStyles({
	gutters: {
		padding: '0'
	}
});

const MainNav = (props) => {


	const styles = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.appBar}>
				<Toolbar className={classes.toolBar} classes={{gutters: styles.gutters}}>

					<Navigation />

					<Typography variant="h1" className={classes.logo} >
						Logo
					</Typography>

					<MiniShoppingCart/>

				</Toolbar>
			</AppBar>

		</div>
	);


};

export default MainNav;
