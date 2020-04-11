import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const FloatingActionButton = ({
  active,
  activeColor,
  height,
  icon,
  size,
  color,
  onPress,
  style,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style, {width, height}]}
      onPress={onPress}>
        { typeof icon == "string" ? <Icon name={icon} size={size} color={active ? activeColor : color} /> : icon({ size, color: active ? activeColor : color})}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
});

FloatingActionButton.propTypes = {
  activeColor: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.number,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onPress: PropTypes.func,
  size: PropTypes.number,
  width: PropTypes.number,
};

FloatingActionButton.defaultProps = {
  activeColor: 'rgb(3, 137, 253)',
  color: 'rgb(130, 130, 130)',
  height: 44,
  icon: 'rocket',
  onPress: (_) => null,
  size: 24,
  width: 70,
};

export default FloatingActionButton;
