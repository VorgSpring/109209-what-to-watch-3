import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {GenreItem} from '../genre-item/genre-item.jsx';
import {GenreTypes} from '../../constants/genre-type';
import {changeGenre} from '../../actions/filters/genre';
import {getFilterGenreSelector} from '../../selectors/filters/genre';

export class GenreList extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(genre) {
    const {onChangeGenre} = this.props;

    onChangeGenre(genre);
  }

  render() {
    const {activeGenre} = this.props;

    return (
      <ul className='catalog__genres-list'>
        {Object.values(GenreTypes).map((genre) => (
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

GenreList.defaultProps = {
  activeGenre: GenreTypes.ALL
};

GenreList.propTypes = {
  onChangeGenre: PropTypes.func.isRequired,
  activeGenre: PropTypes.oneOf(Object.values(GenreTypes))
};

const mapStateToProps = (state) => ({
  activeGenre: getFilterGenreSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => dispatch(changeGenre(genre))
});

export const GenreListWrapper = connect(mapStateToProps, mapDispatchToProps)(GenreList);
