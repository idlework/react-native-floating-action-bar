# react-native-floating-action-bar
A React Native floating action bar. 

## Installation

*npm*
```shell
$ npm i react-native-floating-action-bar --save
```

*yarn*
```shell
$ yarn add react-native-floating-action-bar
```

## Usage

*import*
```javascript
import FloatingActionBar from 'react-native-floating-action-bar'
```

*basic*
```javascript
<FloatingActionBar
  items={[
    {icon: 'taxi'},
    {icon: 'subway'},
    {icon: 'train'},
    {icon: 'bus'},
  ]}
  onPress={handlePress}
/>
```

*maxed out*
```javascript
<FloatingActionBar
  items={[
    {
      icon: 'taxi',
      color: 'rgb(130, 130, 130)',
      activeColor: 'rgb(3, 137, 253)',
      activeBackgroundColor: 'rgb(224, 243, 255)',
    },
    {
      icon: 'subway',
      color: 'rgb(130, 130, 130)',
      activeColor: 'rgb(3, 137, 253)',
      activeBackgroundColor: 'rgb(224, 243, 255)',
    },
    {
      icon: 'train',
      color: 'rgb(130, 130, 130)',
      activeColor: 'rgb(3, 137, 253)',
      activeBackgroundColor: 'rgb(224, 243, 255)',
    },
    {
      icon: 'bus',
      color: 'rgb(130, 130, 130)',
      activeColor: 'rgb(3, 137, 253)',
      activeBackgroundColor: 'rgb(224, 243, 255)',
    },
  ]}
  position="bottom"
  onPress={handlePress}
  selectedIndex={0}
  style={styles.floatingActionBar}
/>
```

## Interface

### items

Accepts an array with objects. The object is used to generate and style the action bar items.

*item interface*
```
{
  icon: 'taxi',
  color: 'rgb(130, 130, 130)',
  activeColor: 'rgb(3, 137, 253)',
  activeBackgroundColor: 'rgb(224, 243, 255)'
}
```

### position

Accepts a string containing one of these types: `top`, `bottom`, `left`, `right`.

### onPress

Accepts a function. returns the selected index.

### selectedIndex

Accepts an int. Can be used to set initial index. 

### style

Accepts an StyleSheet style or an object. This allows you to style the container.


## Contributing

Issues are welcome. The best way to report a problem is to reproduce it with a code example.

Pull requests are welcome. If you want to change the API, it's better to discuss it using an issue ticket.

## License

react-native-floating-action-bar is [MIT licensed](./LICENSE).
