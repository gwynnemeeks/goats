import React from 'react';
import Goat from '../Goat/Goat';

class GoatCorral extends React.Component {
  render() {
    const { goats } = this.props;

    const goatCards = goats.map((goat) => (
    <Goat key={goat.id} goat={goat}/>
    ));

    return (
        <div>
      <h2>Get Your Goat</h2>
      { goatCards }
      </div>
    );
  }
}

export default GoatCorral;
