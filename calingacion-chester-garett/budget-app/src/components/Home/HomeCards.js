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
        link: '/'
    },
    {
        id: v4(),
        title: 'Survey Form',
        image: surveyForm,
        link: '/'
    },
    {
        id: v4(),
        title: 'Product Landing Page',
        image: productLanding,
        link: '/'
    },
    {
        id: v4(),
        title: 'Tic Tac Toe App',
        image: ticTacToe,
        link: '/'
    },
    {
        id: v4(),
        title: 'Momentum App',
        image: momentumApp,
        link: '/'
    },
    {
        id: v4(),
        title: 'Budget App',
        image: budgetApp,
        link: '/BudgetMain'
    },
]

const HomeCard = () => {
  
  const classes = useStyles();
  return (
    projects.map((item)=>{
      return <Card key={item.id} className={classes.homeCard}>
        <Link to={item.link}  style={{ textDecoration: 'none' }}>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sollicitudin porttitor finibus. Aenean tempus ex a nunc dictum, ut venenatis felis cursus. Suspendisse congue ultrices diam eget fringilla. Fusce in turpis sem. Phasellus tincidunt urna et semper lacinia. Etiam luctus sem mi, a pellentesque velit pulvinar efficitur. 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Link>
    </Card>
    })
  );
}

export default HomeCard;