import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme=>({
  root: {
    maxWidth: 220
  },
  media: {
    height: 140,
  },
  linkStyle:{
      textDecoration: 'none',
      color: 'black'
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
      <Card className={classes.root}>
        <CardActionArea>
            <Link to={props.link} className={classes.linkStyle}>
              <CardMedia
              className={classes.media}
              image={props.imgUrl}
              title={props.title+' Algorithm'}
              />
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {(props.title === 'ListInsertion')?'Insertion':props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  {props.intro}
              </Typography>
              </CardContent>
          </Link>
        </CardActionArea>
      </Card>
  );
}