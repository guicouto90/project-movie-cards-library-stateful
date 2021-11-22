import React from 'react';
import PropTypes from 'prop-types';

class Genre extends React.Component {
  render() {
    const { genreValue, onChangeInput } = this.props;
    return (
      <label data-testid="genre-input-label" htmlFor="genre">
        Gênero
        <select
          name="genre"
          id="genre"
          data-testid="genre-input"
          value={ genreValue }
          onChange={ onChangeInput }
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }
}

Genre.propTypes = {
  genreValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Genre;
