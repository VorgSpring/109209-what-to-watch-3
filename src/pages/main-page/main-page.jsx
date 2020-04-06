import React, {Fragment} from 'react';
import {MoviesListContainer} from '../../components/movies-list/movies-list.jsx';
import {GenreListWrapper} from '../../components/genre-list/genre-list.jsx';
import {PromoMovieContainer} from '../../components/promo-movie-card/promo-movie-card.jsx';
import {Footer} from '../../components/footer/footer.jsx';

export const MainPage = () => (
  <Fragment>
    <PromoMovieContainer />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreListWrapper />

        <MoviesListContainer />
      </section>

      <Footer />
    </div>
  </Fragment>
);
