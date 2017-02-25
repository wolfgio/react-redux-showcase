import React, { Component } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import { connect } from 'react-redux';
import { toggleChampionVisibility } from './actions/championsActions';
import logo from './logo.svg';
import './App.css';

@connect((store) => {
  return {
    champions: store.champions,
  };
}, { toggleChampionVisibility })
class App extends Component {
  handleExpandChange(champion) {
    if (champion.isVisible) {
      this.props.toggleChampionVisibility({ id: champion.id, isVisible: false });
    } else {
      this.props.toggleChampionVisibility({ id: champion.id, isVisible: true });
    }
  }

  renderChampionsCard() {
    const { champions } = this.props;

    return champions.map((champion) => {
      return (
        <Card
          key={champion.id}
          expanded={champion.isVisible}
          onTouchTap={this.handleExpandChange.bind(this, champion)}
          style={{ flex: '0 0 90%', margin: '30px auto' }}
        >
          <CardHeader
            title={champion.name}
            subtitle={champion.title}
            avatar="https://cdn.leagueoflegends.com/riotbar/prod/1.6.39/images/navigation/icon-game-lol.png?1486581017"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardMedia expandable={true} >
            <img src={champion.img} />
          </CardMedia>
          <CardTitle title={champion.title} expandable={true} />
          <CardText expandable={true}>{champion.description}</CardText>
        </Card>
      );
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='App-container'>
          <div className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <h2 className='App-title' >Welcome to react-redux app</h2>
          </div>
          <div className='card-wrapper'>
           {this.renderChampionsCard()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
