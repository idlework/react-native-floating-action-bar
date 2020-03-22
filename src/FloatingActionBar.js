import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingActionButton from './FloatingActionButton';
import FloatingActionIndicator from './FloatingActionIndicator';

const FloatingActionBar = ({
  distance,
  items,
  onPress,
  position,
  selectedIndex,
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex || 0);
  const selectedItem = items[selectedIndex];
  const size = getSize(position);
  return (
    <View style={[styles.container, getPositions(position, distance)]}>
      <View style={[styles.content, style]}>
        <View style={[getDirection(position)]}>
          <FloatingActionIndicator
            {...selectedItem}
            {...size}
            position={position}
            selectedIndex={currentIndex}
          />
          {items.map((item, index) => (
            <FloatingActionButton
              {...item}
              {...size}
              key={index}
              onPress={(_) => {
                if (index !== currentIndex) {
                  setCurrentIndex(index);
                  onPress(index);
                }
              }}
              active={index === currentIndex}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const getPositions = (position, distance) => {
  switch (position) {
    case 'top':
      return {
        top: distance,
        left: 0,
        right: 0,
      };
    case 'bottom':
      return {
        bottom: distance,
        left: 0,
        right: 0,
      };
    case 'left':
      return {
        top: 0,
        bottom: 0,
        left: distance,
      };
    case 'right':
      return {
        top: 0,
        bottom: 0,
        right: distance,
      };
  }
};

const getSize = (position) => {
  switch (position) {
    case 'top':
    case 'bottom':
      return {
        width: 70,
        height: 44,
      };
    case 'left':
    case 'right':
      return {
        width: 44,
        height: 60,
      };
  }
};

const getDirection = (position) => {
  switch (position) {
    case 'top':
    case 'bottom':
      return {
        flexDirection: 'row',
      };

    case 'left':
    case 'right':
      return {
        flexDirection: 'column',
      };
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  content: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FFFFFF',
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 3,
    shadowOffset: {width: 0, height: 8},
  },
});

FloatingActionBar.propTypes = {
  distance: PropTypes.number,
  items: PropTypes.array,
  onPress: PropTypes.func,
  position: PropTypes.string,
  selectedIndex: PropTypes.number,
};

FloatingActionBar.defaultProps = {
  distance: 50,
  items: [],
  onPress: (_) => null,
  position: 'bottom',
  selectedIndex: 0,
};

export default FloatingActionBar;
