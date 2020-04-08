import React, {Fragment} from 'react';
import {MoviesList} from '../movies-list/movies-list.jsx';
import {GenreList} from '../genre-list/genre-list.jsx';
import {PromoMovieCard} from '../promo-movie-card/promo-movie-card.jsx';
import {Footer} from '../footer/footer.jsx';

export const MainPage = () => (
  <Fragment>
    <PromoMovieCard />

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <GenreList />

        <MoviesList />
      </section>

      <Footer />
    </div>
  </Fragment>
);
