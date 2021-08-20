import {Link} from 'react-router-dom';
import {v4} from 'uuid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import tributePage from '../../assets/projects/tribute_page.png';
import surveyForm from '../../assets/projects/survey_form.jpg';
import productLanding from '../../assets/projects/product_landing.jpg';
import ticTacToe from '../../assets/projects/forest.jpg';
import momentumApp from '../../assets/projects/momentum_app.jpg';
import budgetApp from '../../assets/projects/budget_app.png';
import useStyles from './homeStyles.js'

const projects = [
    {
        id: v4(),
        title: 'Tribute Page',
        image: tributePage,
        link: 'https://chestergarett-tribute-8e74b9.netlify.app',
        github: 'https://github.com/chestergarett/tribute-page',
        description: 'Showcasing basic HTML and CSS layouting with a tribute page concept to the main character of my favorite anime, Eren Jaeger of Attack on Titan. Hosted in Netlify.'
    },
    {
        id: v4(),
        title: 'Survey Form',
        image: surveyForm,
        link: 'https://chestergarett-surveyform-7f02d9.netlify.app',
        github: 'https://github.com/chestergarett/survey-form',
        description: 'Showcasing HTML, CSS and JQUERY form validations in this survey form page. Login and signup features are static and not DB supported, hence, to redirect to the main page fill up random input to the forms.'
    },
    {
        id: v4(),
        title: 'Product Landing Page',
        image: productLanding,
        link: 'https://chestergarett-product-757941.netlify.app/',
        github: 'https://github.com/chestergarett/product-page',
        description: 'Travel & Tours app concept to showcase HTML, SASS and vanilla JAVASCRIPT. Not DB supported hence all form inputs are not saved.'
    },
    {
        id: v4(),
        title: 'Tic Tac Toe App',
        image: ticTacToe,
        link: 'https://chestergarett-tictactoe-8cbf72.netlify.app', 
        github: 'https://github.com/chestergarett/tic-tac-toe',
        description: 'Showcasing vanilla JAVASCRIPT logic in this functional tic tac toe app. For better experience, don\'t forget to turn on audio. This app can be played in vs BOT mode or vs player mode.'
    },
    {
        id: v4(),
        title: 'Momentum App',
        image: momentumApp,
        link: 'https://chestergarett-momentum-app.netlify.app/',
        github: 'https://github.com/chestergarett/momentum-app',
        description: 'Momentum App concept using CalendarJS library & JQUERY. All form inputs are not DB supported and is only retrieved via local storage.'
    },
    {
        id: v4(),
        title: 'Tournament App',
        image: budgetApp,
        link: 'https://sportsapp-86653.firebaseapp.com/',
        github: 'https://github.com/chestergarett/momentum-app',
        description: 'Showcasing API calls via axios. Database and OAuth2 authentication is powered by Firebase and tournament creation is powered by Challonge API. Main app is done using ReactJS framework.'
    },
]

const HomeCard = () => {
  
  const classes = useStyles();
  return (
    projects.map((item)=>{
      return <Card key={item.id} className={classes.homeCard}>
        <a href={`${item.link}`} target="_blank">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{color: "#1B1212"}}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </a>
        <CardActions>
          <Button size="small" color="primary">
            <a href={`${item.link}`} target="_blank">Share</a>
          </Button>
          <Button size="small" color="primary">
          <a href={item.github} target="_blank">Learn More</a>
          </Button>
        </CardActions>
    </Card>
    })
  );
}

export default HomeCard;