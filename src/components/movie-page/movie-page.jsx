import React, {Fragment} from 'react';
import {MovieCard} from '../movie-card/movie-card.jsx';
import {SimilarMoviesList} from '../similar-movies-list/similar-movies-list.jsx';
import {Footer} from '../footer/footer.jsx';

export const MoviePage = () => (
  <Fragment>
    <MovieCard />

    <div className='page-content'>
      <section className='catalog catalog--like-this'>
        <h2 className='catalog__title'>More like this</h2>

        <SimilarMoviesList />
      </section>

      <Footer />
    </div>
  </Fragment>
);
