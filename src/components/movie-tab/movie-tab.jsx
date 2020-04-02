import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {MovieTabItems} from '../../constants/movie-tab';

export class MovieTab extends PureComponent {
  constructor(props) {
    super(props);

    this.setActiveTab = this.setActiveTab.bind(this);
  }

  setActiveTab() {
    const {
      isActive,
      name,
      onActive
    } = this.props;

    if (!isActive) {
      onActive(name);
    }
  }

  render() {
    const {
      isActive,
      name
    } = this.props;

    return (
      <li
        className={`movie-nav__item ${isActive && `movie-nav__item--active`}`}
        onClick={this.setActiveTab}
      >
        <span className='movie-nav__link'>
          {name}
        </span>
      </li>
    );
  }
}

MovieTab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.oneOf(
      Object.values(MovieTabItems)
  ).isRequired,
  onActive: PropTypes.func.isRequired
};
