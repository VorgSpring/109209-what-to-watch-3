import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class GenreItem extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {onClick, genre, isActiveGenre} = this.props;

    if (isActiveGenre) {
      return;
    }

    onClick(genre);
  }

  render() {
    const {genre, isActiveGenre} = this.props;

    return (
      <li
        className={`catalog__genres-item ${isActiveGenre ? `catalog__genres-item--active` : ``}`}
        onClick={this.handleClick}
      >
        <a className='catalog__genres-link'>
          {genre}
        </a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
  isActiveGenre: PropTypes.bool.isRequired
};
