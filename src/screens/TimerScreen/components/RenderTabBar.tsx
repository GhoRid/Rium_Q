import React from 'react';
import {TabBar, TabBarProps} from 'react-native-tab-view';

const RenderTabBar = (props: TabBarProps<any>) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: 'white'}}
    activeColor="black"
    inactiveColor="black"
  />
);

export default RenderTabBar;
