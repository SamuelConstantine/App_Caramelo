import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import {Image} from '../Styles/StylesUtils'

const Logo = () => (
  <Image source={require('../../assets/logo.png')} />
);

export default memo(Logo);