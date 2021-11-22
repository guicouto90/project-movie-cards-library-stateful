import React from 'react';
import PropTypes from 'prop-types';
import Genre from './AddMovieComponents/Genre';
import Image from './AddMovieComponents/Image';
import Rating from './AddMovieComponents/Rating';
import Storyline from './AddMovieComponents/Storyline';
import Subtitle from './AddMovieComponents/Subtitle';
import Title from './AddMovieComponents/Title';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form data-testid="add-movie-form">
        <Title titleValue={ title } onChangeInput={ this.handleChange } />
        <Subtitle subtitleValue={ subtitle } onChangeInput={ this.handleChange } />
        <Image imagevalue={ imagePath } onChangeInput={ this.handleChange } />
        <Storyline storylineValue={ storyline } onChangeInput={ this.handleChange } />
        <Rating ratingValue={ rating } onChangeInput={ this.handleChange } />
        <Genre genreValue={ genre } onChangeInput={ this.handleChange } />
        <button
          type="button"
          data-testid="send-button"
          onClick={ this.handleClick }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
