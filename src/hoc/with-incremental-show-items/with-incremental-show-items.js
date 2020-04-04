import React, {PureComponent} from 'react';

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

    setMoreItemsToShow() {
      this.setState(({showCount}) => ({
        showCount: showCount + MIN_ITEMS_COUNT_INCREMENT
      }));
    }

    render() {
      const {showCount} = this.state;

      return (
        <Component
          {...this.props}
          onSetMoreItemsToShow={this.setMoreItemsToShow}
          showCount={showCount}
        />
      );
    }
  }

  WithIncrementalShowItems.propTypes = {};

  return WithIncrementalShowItems;
};
