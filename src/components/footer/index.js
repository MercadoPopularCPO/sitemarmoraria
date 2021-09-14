import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: "#52565c",
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(3),
    },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Ouro Brasil
            </Typography>
            <Typography variant="h6" align="center" gutterBottom>
                Av. Presidente Vargas nº1020, Centro
            </Typography>
            <Typography>
                {'Copyright © '}
                {new Date().getFullYear()}
            </Typography>
        </footer>
    );
}