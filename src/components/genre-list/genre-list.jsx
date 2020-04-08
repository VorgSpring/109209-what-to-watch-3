import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GenreItem} from '../genre-item/genre-item.jsx';
import {changeGenre} from '../../actions/filters/genre';
import {
  getGenreTypesSelector
} from '../../selectors/genre/genre';
import {
  getFilterGenreSelector
} from '../../selectors/filters/filters';

export class GenreListComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(genre) {
    const {onChangeGenre} = this.props;

    onChangeGenre(genre);
  }

  render() {
    const {
      activeGenre,
      genreTypes
    } = this.props;

    return (
      <ul className='catalog__genres-list'>
        {genreTypes.map((genre) => (
          <GenreItem
            key={genre}
            genre={genre}
            isActiveGenre={activeGenre === genre}
            onClick={this.handleClick}
          />
        ))}
      </ul>
    );
  }
}

GenreListComponent.propTypes = {
  genreTypes: PropTypes.arrayOf(
      PropTypes.string
  ).isRequired,
  onChangeGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  genreTypes: getGenreTypesSelector(state),
  activeGenre: getFilterGenreSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => dispatch(changeGenre(genre))
});

export const GenreList = connect(
    mapStateToProps, mapDispatchToProps
)(GenreListComponent);
