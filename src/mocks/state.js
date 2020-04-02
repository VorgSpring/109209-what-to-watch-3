import {films} from './films';
import {filters} from './filters';
import {user} from './user';
import {review} from './review';

export const state = {
  films: {
    isLoading: false,
    isError: false,
    films
  },
  filters,
  authorization: {
    isLoading: false,
    isAuthorizationRequired: true,
    errorMessage: null
  },
  user,
  favorites: {
    isLoading: false,
    isError: false
  },
  promo: {
    isLoading: false,
    isError: false,
    film: films[0]
  },
  reviews: {
    isLoading: false,
    isError: false,
    reviews: {
      1: review
    }
  }
};
