import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const MIN_ITEMS_COUNT_INCREMENT = 8;

export const withIncrementalShowItems = (Component) => {
  class WithIncrementalShowItems extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showCount: MIN_ITEMS_COUNT_INCREMENT
      };

      this.setMoreItemsToShow = this.setMoreItemsToShow.bind(this);
    }

    get films() {
      const {films} = this.props;
      const {showCount} = this.state;

      return films.slice(0, showCount);
    }

    get isHaveMoreItems() {
      const {films} = this.props;
      const {showCount} = this.state;

      return showCount < films.length;
    }

    setMoreItemsToShow() {
      this.setState(({showCount}) => ({
        showCount: showCount + MIN_ITEMS_COUNT_INCREMENT
      }));
    }

    render() {
      return (
        <Component
          onSetMoreItemsToShow={this.setMoreItemsToShow}
          filmToShown={this.films}
          isHaveMoreItems={this.isHaveMoreItems}
        />
      );
    }
  }

  WithIncrementalShowItems.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          previewImage: PropTypes.string.isRequired,
          preview: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string
          ]).isRequired,
        })
    ).isRequired
  };

  return WithIncrementalShowItems;
};
