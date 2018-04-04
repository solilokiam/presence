import React, { Component } from 'react';
import { WebClient } from '@slack/client';
import Member from './components/member';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    }
  }

  componentDidMount() {
    const slackClient = new WebClient(process.env.SLACKTOKEN);

    slackClient.users.list({include_locale: true, presence: true,})
      .then((res) => {
        console.log(res.members)
        this.setState({
          members: res.members,
        })
      })
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Presence</h1>
        </header>
        <div>
        {this.state.members.map((member) => (
          <Member {...member.profile} />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
