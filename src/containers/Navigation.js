import React from 'react';
// import ReactDOM from 'react-dom';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import { StylesProvider } from "@material-ui/core/styles";
import styles from './Navigation.css';

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		flexGrow: 1,
// 	},
// }));

const navigation = (props) => {

	// const classes = useStyles();

	console.log(styles);

	return (
		<div>
			<h1 className={styles.Title}>Test</h1>
		</div>
	);

};

export default navigation;
