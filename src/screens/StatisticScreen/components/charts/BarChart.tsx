import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions, Animated, ScrollView} from 'react-native';
import Svg, {Rect, G, Text as SvgText} from 'react-native-svg';
import AppText from '../../../../components/AppText';

interface BarChartProps {
  data: {
    label: string;
    value: number;
  }[];
}

const AnimatedRect = Animated.createAnimatedComponent(Rect);
const AnimatedG = Animated.createAnimatedComponent(G);

const screenWidth = Dimensions.get('window').width;
const CHART_PADDING_HORIZONTAL = 20;
const chartWidth = screenWidth - CHART_PADDING_HORIZONTAL * 2;
const chartHeight = 220;
const TOP_LABEL_SPACE = 20;
const availableHeight = chartHeight - TOP_LABEL_SPACE;

const BarChart = ({data}: BarChartProps) => {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollToEnd({animated: false}); // 오른쪽 끝으로 이동
    }
  }, []);

  const BAR_SPACING = 10;
  const MIN_BAR_WIDTH = 35;

  const calculatedBarWidth =
    (chartWidth - BAR_SPACING * (data.length - 1)) / data.length;

  const barWidth =
    calculatedBarWidth < MIN_BAR_WIDTH ? MIN_BAR_WIDTH : calculatedBarWidth;

  const svgWidth =
    calculatedBarWidth < MIN_BAR_WIDTH
      ? data.length * (barWidth + BAR_SPACING) - BAR_SPACING
      : chartWidth;

  const maxValue = Math.max(...data.map(item => item.value));
  const finalHeights = data.map(item =>
    maxValue > 0 ? (item.value / maxValue) * availableHeight : 0,
  );

  const animatedHeightsRef = useRef<Animated.Value[]>(
    finalHeights.map(() => new Animated.Value(0)),
  );

  // mount 시점에 각 막대 높이 애니메이션 실행
  useEffect(() => {
    const animations = animatedHeightsRef.current.map((animVal, idx) =>
      Animated.timing(animVal, {
        toValue: finalHeights[idx],
        duration: 500,
        useNativeDriver: false,
      }),
    );
    Animated.stagger(100, animations).start();
  }, [finalHeights]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: CHART_PADDING_HORIZONTAL,
        }}>
        <View>
          <Svg
            width={svgWidth}
            height={chartHeight}
            viewBox={`0 0 ${svgWidth} ${chartHeight}`}>
            {data.map((item, index) => {
              const xPos = index * (barWidth + BAR_SPACING);
              const animatedHeight = animatedHeightsRef.current[index];
              const animatedY = Animated.subtract(chartHeight, animatedHeight);
              const finalYForText = chartHeight - finalHeights[index] - 8;
              const movedUp = Animated.subtract(
                finalHeights[index],
                animatedHeight,
              );

              return (
                <React.Fragment key={index}>
                  <AnimatedRect
                    x={xPos}
                    y={animatedY}
                    width={barWidth}
                    height={animatedHeight}
                    rx={4}
                    fill={'#0667FF'}
                  />
                  <AnimatedG transform={[{translateY: movedUp}]}>
                    <SvgText
                      x={xPos + barWidth / 2}
                      y={finalYForText}
                      fontSize="14"
                      fill={'#0667FF'}
                      fontWeight="bold"
                      textAnchor="middle">
                      {item.value}
                    </SvgText>
                  </AnimatedG>
                </React.Fragment>
              );
            })}
          </Svg>

          {/* X축 라벨 */}
          <View
            style={[
              styles.labelsContainer,
              {
                width:
                  data.length < 7
                    ? chartWidth
                    : data.length * (barWidth + BAR_SPACING) - BAR_SPACING,
                gap: BAR_SPACING,
              },
            ]}>
            {data.map((item, index) => (
              <AppText
                key={index}
                style={[styles.label, {width: barWidth}]}
                numberOfLines={1}>
                {item.label}
              </AppText>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  labelsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  label: {
    fontSize: 12,
    color: '#999999',
    textAlign: 'center',
  },
  labelHighlighted: {
    color: '#0667FF',
    fontWeight: 'bold',
  },
});
