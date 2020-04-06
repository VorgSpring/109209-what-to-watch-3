import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {SmallMovieCardComponent} from './small-movie-card.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`SmallMovieCard`, () => {
  it(`should renders correctly`, () => {
    const film = films[0];

    const tree = renderer.create(
        <BrowserRouter>
          <SmallMovieCardComponent
            film={film}
            loadVideo={()=>{}}
            playVideo={()=>{}}
            refNode={React.createRef()}
          />
        </BrowserRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
