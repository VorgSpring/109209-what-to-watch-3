import React from 'react';
import {VideoComponent} from './video-player.jsx';
import renderer from 'react-test-renderer';
import {films} from '../../mocks/films';

describe(`VideoPlayer`, () => {
  it(`should renders correctly`, () => {
    const {name, poster, preview} = films[0];

    const tree = renderer.create(
        <VideoComponent
          name={name}
          poster={poster}
          source={preview}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
