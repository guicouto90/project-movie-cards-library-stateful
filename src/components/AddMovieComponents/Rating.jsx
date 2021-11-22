import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { ratingValue, onChangeInput } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação
        <input
          type="number"
          name="rating"
          id="rating"
          data-testid="rating-input"
          value={ ratingValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Rating;
