import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { titleValue, onChangeInput } = this.props;
    return (
      <label data-testid="title-input-label" htmlFor="title">
        Título
        <input
          name="title"
          id="title"
          data-testid="title-input"
          value={ titleValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Title.propTypes = {
  titleValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Title;
