import AppBar from './AppBar';
import React from 'react';
import { Body } from '../Styles/StylesUtils'

export const LayoutManageSafeBox: React.FC<{children:any, goback:boolean, title:string, right:boolean }> = ({children,goback, title, right}) => {
  return (
    <Body>
      <AppBar  description={title} goback={goback} rightButton={right}/>
      {children}
    </Body>
  );
};