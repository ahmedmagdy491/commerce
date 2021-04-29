import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Menu,
	MenuItem,
	Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/free-store-icon-2017-thumb.png';
import useStyles from './styles';
import { Link, useLocation } from 'react-router-dom';
const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();
	return (
		<>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography
						component={Link}
						to="/"
						variant="h6"
						color="inherit"
						className="text-decoration-none"
					>
						<img
							src={logo}
							alt="Commerce.js"
							height="25px"
							className={classes.image}
						/>
						Commerce.js
					</Typography>
					<div className={classes.grow} />
					{location.pathname === '/' && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to="/cart"
								aria-label="Show cart items"
								color="inherit"
							>
								<Badge
									badgeContent={totalItems}
									color="secondary"
								>
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
