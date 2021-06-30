import {Card,CardActionArea,CardContent,Typography,CardActions,CardMedia,Button} from '@material-ui/core';
import useStyles from './newsStyles.js';
import {v4} from 'uuid';

const News = ({title,description,author,url,urlToImage}) => {

    const classes = useStyles();

    return (
        <Card key={v4()} className={classes.newsCard}>
          <CardActionArea href={url} target="_blank">
            <CardMedia
              component="img"
              alt={title}
              height="220"
              image={urlToImage}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{color: "#1B1212"}}>
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {description}
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
    </Card>
    )
}

export default News;
