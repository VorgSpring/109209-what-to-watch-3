import React from 'react';
import PropTypes from 'prop-types';
import {withActiveItem} from '../../hoc/with-active-item/with-active-item';
import {MovieTab} from '../movie-tab/movie-tab.jsx';
import {
  MovieTabItems,
  MovieTabComponents
} from '../../constants/movie-tab';

export const MovieTabs = ({activeItem, onActiveItem, film}) => {
  const activeTab = activeItem ? activeItem : MovieTabItems.OVERVIEW;
  const MovieTabComponent = MovieTabComponents[activeTab];

  return (
    <div className='movie-card__desc'>
      <nav className='movie-nav movie-card__nav'>
        <ul className='movie-nav__list'>
          {Object.values(MovieTabItems).map((tab) => (
            <MovieTab
              key={tab}
              isActive={tab === activeTab}
              onActive={onActiveItem}
              name={tab}
            />
          ))}
        </ul>
      </nav>

      <MovieTabComponent film={film} />
    </div>
  );
};

MovieTabs.propTypes = {
  activeItem: PropTypes.oneOf(
      Object.values(MovieTabItems)
  ),
  onActiveItem: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired
};

export const MovieTabsWrapper = withActiveItem(MovieTabs);
