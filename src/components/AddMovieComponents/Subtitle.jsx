import React from 'react';
import PropTypes from 'prop-types';

class Subtitle extends React.Component {
  render() {
    const { subtitleValue, onChangeInput } = this.props;
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle">
        Subtítulo
        <input
          name="subtitle"
          id="subtitle"
          data-testid="subtitle-input"
          value={ subtitleValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Subtitle.propTypes = {
  subtitleValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Subtitle;
