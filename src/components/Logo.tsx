import React, { memo } from 'react';
import {Img} from '../Styles/StylesUtils'

const Logo = () => (
  <Img source={require('../../assets/logo.png')} />
);

export default memo(Logo);