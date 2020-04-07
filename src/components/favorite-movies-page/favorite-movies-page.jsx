import React from 'react';
import {Header} from '../header/header.jsx';
import {Footer} from '../footer/footer.jsx';
import {
  FavoriteMovieListContainer
} from '../favorite-movies-list/favorite-movies-list.jsx';

export const FavoriteMoviesPage = () => (
  <div className='user-page'>
    <Header
      title='My list'
      showUserBlok
      userType
    />

    <section className='catalog'>
      <h2 className='catalog__title visually-hidden'>Catalog</h2>

      <FavoriteMovieListContainer />
    </section>

    <Footer />
  </div>
);
