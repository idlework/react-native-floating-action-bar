import PropTypes from 'prop-types';
import React from 'react';
import {LayoutAnimation, StyleSheet, View} from 'react-native';

const FloatingActionIndicator = ({
  activeBackgroundColor,
  height,
  position,
  selectedIndex,
  width,
}) => {
  LayoutAnimation.configureNext(ANIMATION_PRESET);
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: activeBackgroundColor,
          width,
          height,
        },
        getPosition(position, selectedIndex, width, height),
      ]}
    />
  );
};

const ANIMATION_PRESET = {
  duration: 200,
  update: {type: 'easeOut'},
};

const getPosition = (position, index, width, height) => {
  switch (position) {
    case 'top':
    case 'bottom':
      return {left: index * width};
    case 'left':
    case 'right':
      return {top: index * height};
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderRadius: 22,
  },
});

FloatingActionIndicator.propTypes = {
  activeBackgroundColor: PropTypes.string,
  height: PropTypes.number,
  position: PropTypes.string,
  selectedIndex: PropTypes.number,
  width: PropTypes.number,
};

FloatingActionIndicator.defaultProps = {
  activeBackgroundColor: 'rgb(224, 243, 255)',
  height: 44,
  position: 'bottom',
  selectedIndex: 0,
  width: 70,
};

export default FloatingActionIndicator;
