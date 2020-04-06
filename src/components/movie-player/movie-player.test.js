import React from 'react';
import {MoviePlayerComponent} from './movie-player.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MoviePLayer`, () => {
  it(`should renders correctly`, () => {
    const tree = renderer.create(
        <MoviePlayerComponent
          film={films[0]}
          progress={0}
          currentTime={0}
          loadVideo={()=>{}}
          playVideo={()=>{}}
          refNode={React.createRef()}
          toggleVideo={()=>{}}
          setFullscreen={()=>{}}
          onClosePlayer={()=>{}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
