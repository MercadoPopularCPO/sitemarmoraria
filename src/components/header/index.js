import React from 'react';
import {
    Toolbar,
    Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';

import logo from '../../assets/logo.png'

const useStyles = makeStyles(() => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        backgroundColor: '#52565c',
        height: 75,
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center'
    }
}))

export default function Header() {
    const classes = useStyles();

    return (
        <Toolbar className={classes.header}>
            <a href="/" className={classes.logoContainer}>
                <img alt="logo" src={logo} style={{ marginRight: 15 }} width={50} height={50} />
                <Typography variant="h6" color="inherit">
                    Ouro Brasil
                </Typography>
            </a>
            <a href="contatos">Contatos</a>
        </Toolbar>
    );
}