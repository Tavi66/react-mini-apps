import React from 'react';

import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/NavigationBar/SubNavigation';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const layout = (props) => (
<Aux>
<Toolbar />
<SideDrawer />
<div>BackDrop</div>
<main className={classes.Content}>
    {props.children}
</main>
</Aux>
);

export default layout;