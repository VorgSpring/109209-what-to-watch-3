import {combineReducers} from 'redux';
import films from './films/films';
import filters from './filters/filters';
import authorization from './authorization/authorization';
import favorites from './favorites/favorites';
import user from './user/user';
import promo from './promo-movie/promo-movie';
import reviews from './reviews/reviews';
import player from './player/player';

export default combineReducers({
  films,
  filters,
  authorization,
  user,
  favorites,
  promo,
  reviews,
  player
});

