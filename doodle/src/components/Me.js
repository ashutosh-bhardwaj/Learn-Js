import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

const Me = () => (
  <Card>
    <CardHeader
      title="Harvey Specter"
      subtitle="Suits"
      avatar={<Avatar>H</Avatar>}
    />
    <CardMedia
      overlay={<CardTitle title="Havery Specter" subtitle="Suits" />}
    >
      <img 
       src={require('./harvey.jpg')}
       alt="Harvey Specter" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
    Ever loved someone so much, you would do anything for them? Yeah,
     well make that someone yourself and do whatever the hell you want.
    </CardText>
    <CardActions>
      <RaisedButton label="Hey" primary onClick={() => alert(`I'm Awesome!`)}/>
    </CardActions>
  </Card>
);

export default Me;