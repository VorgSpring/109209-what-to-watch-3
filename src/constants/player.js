export const PlayerAction = {
  PLAY: `play`,
  PAUSE: `pause`,
  LOAD: `load`
};

export const PlayerButton = {
  [PlayerAction.PLAY]: {
    ICON: `#pause`,
    TEXT: `Pause`
  },
  [PlayerAction.PAUSE]: {
    ICON: `#play-s`,
    TEXT: `Play`
  },
};
