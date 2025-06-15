import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions, Animated, Text} from 'react-native';
import Svg, {Rect, G, Text as SvgText} from 'react-native-svg';

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

const BarChart: React.FC<BarChartProps> = ({data}) => {
  const BAR_SPACING = 10;
  const barWidth = (chartWidth - BAR_SPACING * (data.length - 1)) / data.length;
  const maxValue = Math.max(...data.map(item => item.value));
  const finalHeights = data.map(item =>
    maxValue > 0 ? (item.value / maxValue) * availableHeight : 0,
  );

  // 애니메이션 값 초기화 (처음엔 모두 0)
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
      {/* 1) viewBox가 지정된 Svg */}
      <Svg
        width={chartWidth}
        height={chartHeight}
        viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          const xPos = index * (barWidth + BAR_SPACING);
          const animatedHeight = animatedHeightsRef.current[index];

          // (1) Rect 애니메이션용 y 값 계산
          const animatedY = Animated.subtract(chartHeight, animatedHeight);

          // (2) Text 최종 y 위치(애니메이션 끝난 다음 값)
          const finalYForText = chartHeight - finalHeights[index] - 8;

          // (3) 그룹이 위로 옮겨질 거리:
          // "애니메이션이 없을 때(맨 처음엔 animatedHeight=0) finalHeights 만큼 내려있다가,
          // 애니가 끝나면(finalHeights가 모두 animatedHeight로 수렴) 0만큼만 이동된 상태"가 되어야 함.
          // 즉, movedUp = finalHeights[index] - animatedHeight
          const movedUp = Animated.subtract(
            finalHeights[index],
            animatedHeight,
          );

          return (
            <React.Fragment key={index}>
              {/* 막대 (Animated) */}
              <AnimatedRect
                x={xPos}
                y={animatedY}
                width={barWidth}
                height={animatedHeight}
                rx={4}
                fill={isLast ? '#0667FF' : '#EEEEEE'}
              />

              {/* 숫자 레이블: 
                  - SvgText 자체는 x,y를 모두 숫자로 고정 (`x={xPos + barWidth/2}`, `y={finalYForText}`)
                  - 이 SvgText를 <AnimatedG>로 감싸서, transform으로 Y축(=movedUp) 이동만 시킴 */}
              <AnimatedG
                transform={[
                  {
                    translateY: movedUp,
                    // 'movedUp'이 0에서 finalHeights[index] → finalHeights[index]에서 0으로 변한다.
                  },
                ]}>
                <SvgText
                  x={xPos + barWidth / 2} // x축은 절대 고정값 (예: 150이 아니어도, 이 방법대로 하면 0으로 찍히지 않습니다)
                  y={finalYForText} // y축도 최종 위치(애니 끝난 상태 기준)로 고정
                  fontSize="14"
                  fill={isLast ? '#0667FF' : '#999999'}
                  fontWeight="bold"
                  textAnchor="middle">
                  {item.value}
                </SvgText>
              </AnimatedG>
            </React.Fragment>
          );
        })}
      </Svg>

      {/* 3) X축(막대 아랫부분) 레이블 */}
      <View style={styles.labelsContainer}>
        {data.map((item, index) => {
          const isLast = index === data.length - 1;
          return (
            <Text
              key={index}
              style={[
                styles.label,
                isLast && styles.labelHighlighted,
                {width: barWidth},
              ]}
              numberOfLines={1}>
              {item.label}
            </Text>
          );
        })}
      </View>
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  labelsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
