import React from 'react';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;

    return (
        <div>
      <h2>Get Your Goat</h2>
      { goats.map((goat) => (<h6>{goat.name}</h6>)) }
      </div>
    );
  }
}

export default GoatCorral;
