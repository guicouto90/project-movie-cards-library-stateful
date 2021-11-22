import React from 'react';
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const { imageValue, onChangeInput } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem
        <input
          name="image"
          id="image"
          data-testid="image-input"
          value={ imageValue }
          onChange={ onChangeInput }
        />
      </label>
    );
  }
}

Image.propTypes = {
  imageValue: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};

export default Image;
