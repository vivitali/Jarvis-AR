import 'react-native';
import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

jest.mock('react-native-camera', () => 'Camera');

describe('App snapshot', () => {

  it('renders correctly', () => {
    jest.useFakeTimers();
    renderer.create(<App />);
  });

});
