import React from 'react';
import {MoviePlayerComponent} from './movie-player.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`MoviePLayer`, () => {
  it(`should renders correctly with play status`, () => {
    const tree = renderer.create(
        <MoviePlayerComponent
          film={films[0]}
          progress={0}
          currentTime={0}
          status='play'
          loadVideo={()=>{}}
          playVideo={()=>{}}
          refNode={React.createRef()}
          toggleVideo={()=>{}}
          setFullscreen={()=>{}}
          onClosePlayer={()=>{}}
          history={{
            goBack() {}
          }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly with pause status`, () => {
    const tree = renderer.create(
        <MoviePlayerComponent
          film={films[0]}
          progress={0}
          currentTime={0}
          status='pause'
          loadVideo={()=>{}}
          playVideo={()=>{}}
          refNode={React.createRef()}
          toggleVideo={()=>{}}
          setFullscreen={()=>{}}
          onClosePlayer={()=>{}}
          history={{
            goBack() {}
          }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`should renders correctly without status`, () => {
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
          history={{
            goBack() {}
          }}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
