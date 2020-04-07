import {
  getFilmPathLink,
  getReviewPathLink,
  getLinkChangeFavoriteStatus,
  getLinkForReview
} from './get-links';

describe(`get links`, () => {
  it(`should correct get film path link`, () => {
    expect(getFilmPathLink(13)).toBe(`/film/13`);
  });

  it(`should correct get review path link`, () => {
    expect(getReviewPathLink(13)).toBe(`/film/13/review`);
  });

  it(`should correct get link change favorite status`, () => {
    expect(getLinkChangeFavoriteStatus({id: 13, status: 1})).toBe(`/favorite/13/1`);
  });

  it(`should correct get link for review`, () => {
    expect(getLinkForReview(13)).toBe(`/comments/13`);
  });
});
