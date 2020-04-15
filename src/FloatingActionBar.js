import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingActionButton from './FloatingActionButton';
import FloatingActionIndicator from './FloatingActionIndicator';

const FloatingActionBar = ({
  items,
  offset,
  onPress,
  position,
  selectedIndex,
  style,
}) => {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex || 0);
  const size = getSize(position);
  return (
    <View style={[styles.container, getPositions(position, offset)]}>
      <View style={[styles.content, style]}>
        <View style={[getDirection(position)]}>
          <FloatingActionIndicator
            {...items[currentIndex]}
            {...size}
            position={position}
            selectedIndex={currentIndex}
            items={items}
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

const getPositions = (position, offset) => {
  switch (position) {
    case 'top':
      return {
        top: offset,
        left: 0,
        right: 0,
      };
    case 'bottom':
      return {
        bottom: offset,
        left: 0,
        right: 0,
      };
    case 'left':
      return {
        top: 0,
        bottom: 0,
        left: offset,
      };
    case 'right':
      return {
        top: 0,
        bottom: 0,
        right: offset,
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
  items: PropTypes.array,
  offset: PropTypes.number,
  onPress: PropTypes.func,
  position: PropTypes.string,
  selectedIndex: PropTypes.number,
};

FloatingActionBar.defaultProps = {
  items: [],
  offset: 50,
  onPress: () => null,
  position: 'bottom',
  selectedIndex: 0,
};

export default FloatingActionBar;
