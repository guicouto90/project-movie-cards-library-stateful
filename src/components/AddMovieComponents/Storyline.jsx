import React from 'react';
import PropTypes from 'prop-types';

class Storyline extends React.Component {
  render() {
    const { storylineValue, onChangeInput } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse
        <textarea
          name="storyline"
          id="storyline"
          data-testid="storyline-input"
          value={ storylineValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  storylineValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Storyline;
