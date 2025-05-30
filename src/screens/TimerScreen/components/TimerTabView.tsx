import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import TimerTab from './TimerTab';
import BookTab from './BookTab';
import {useState} from 'react';
import RenderTabBar from './RenderTabBar';

const renderScene = SceneMap({
  first: TimerTab,
  second: BookTab,
});

const routes = [
  {key: 'first', title: '타이머'},
  {key: 'second', title: '교재'},
];

const TimerTabView = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={RenderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TimerTabView;
