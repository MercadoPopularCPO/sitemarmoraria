import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from '../../components/header'
import Footer from '../../components/footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
        maxWidth: '95%'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f0b400',
        textAlign: 'center',
    },
    cardText: {
        font: '500 1rem Roboto, sans-serif',
        margin: '.5rem auto'
    },
    cardMedia: {
        paddingTop: '56.25%',
    },
    cardContent: {
        marginBottom: 0
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [
    { title: 'Marmore branco', img: 'https://i.imgur.com/bQ1K8oj.jpg', imageTitle: 'image Title' },
    { title: 'Pias', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Cozinhas', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Túmulos', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Balcões', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Balcões', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Balcões', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Balcões', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Balcões', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' },
    { title: 'Nichos', img: 'https://source.unsplash.com/random', imageTitle: 'image Title' }
];

export default function Cozinhas() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Header />
            <main>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.title} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <a href={() => { }}>
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={card.img}
                                            title={card.imageTitle}
                                        />
                                        <Typography className={classes.cardText} variant="h5" component="h3">
                                            {card.title}
                                        </Typography>
                                    </a>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <Footer />
        </React.Fragment>
    );
}