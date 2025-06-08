import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import StudyObject from './StudyObject';
import SvgIcon from '../../../components/SvgIcon';

type CarouselProps = {
  data?: any[];
  setModalVisible: (visible: boolean) => void;
};

const scrollHeight = 40; // Height of each item in the carousel

const Carousel = ({data, setModalVisible}: CarouselProps) => {
  if (!data || data.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(1);
  const scrollViewRef = useRef<ScrollView>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const extendedData = [data[data.length - 1], ...data, data[0]];

  useEffect(() => {
    setTimeout(() => {
      scrollViewRef.current?.scrollTo({y: scrollHeight, animated: false});
    }, 0);

    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % extendedData.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      y: activeIndex * scrollHeight,
      animated: true,
    });
  }, [activeIndex]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.y;
    let index = Math.floor(contentOffsetX / scrollHeight);

    if (index <= 0) {
      index = extendedData.length - 2;
      setActiveIndex(index);
      scrollViewRef.current?.scrollTo({
        y: index * scrollHeight,
        animated: false,
      });
    } else if (index >= extendedData.length - 1) {
      index = 1;
      setActiveIndex(index);
      scrollViewRef.current?.scrollTo({
        y: index * scrollHeight,
        animated: false,
      });
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScrollBeginDrag={stopAutoScroll}
        onScrollEndDrag={startAutoScroll}
        onMomentumScrollEnd={handleScroll}>
        {extendedData.map((item, index) => (
          <StudyObject key={index} subject={item.subject} aim={item.aim} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}>
        <SvgIcon name="더하기" color="#D9D9D9" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: scrollHeight,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Carousel;
