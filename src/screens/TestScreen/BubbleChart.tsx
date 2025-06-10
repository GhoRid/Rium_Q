import React, {useEffect, useState} from 'react';
import {View, Dimensions, Animated, StyleSheet} from 'react-native';
import Svg, {Circle, Text as SvgText, G} from 'react-native-svg';
import {scaleLinear} from 'd3-scale';
import {interpolateRgb} from 'd3-interpolate';
import {forceSimulation, forceX, forceY, forceCollide} from 'd3-force';
import * as d3Chromatic from 'd3-scale-chromatic';

interface DataNode {
  name: string;
  value: number;
}
interface BubbleNode extends DataNode {
  x: number;
  y: number;
  r: number;
  anim: Animated.Value;
}
interface Props {
  DATA: DataNode[];
  maxColor?: string;
  minColor?: string;
}

const BubbleChartForce = ({
  DATA,
  maxColor = '#0667FF',
  minColor = '#B5CCF0',
}: Props) => {
  const {width: screenWidth} = Dimensions.get('window');
  const CHART_WIDTH = screenWidth / 2; // 화면 너비의 절반 안에서만 배치되도록
  const CHART_HEIGHT = 250;
  const [nodes, setNodes] = useState<BubbleNode[]>([]);
  const maxValue = Math.max(...DATA.map(d => d.value));
  const minValue = Math.min(...DATA.map(d => d.value));
  const maxRadius = CHART_HEIGHT / 3.7; // 최대 반지름 설정

  useEffect(() => {
    const initialNodes = DATA.map(d => ({
      ...d,
      x: Math.random() * CHART_WIDTH, // ⭐ 무작위 위치
      y: Math.random() * CHART_HEIGHT,
      r: (d.value / maxValue) * maxRadius,
      anim: new Animated.Value(0),
    }));

    const sim = forceSimulation(initialNodes)
      .force('x', forceX(CHART_WIDTH / 2).strength(0.04)) //  클수록 좌우로 좁아짐
      .force('y', forceY(CHART_HEIGHT / 2).strength(0.15)) // 클수록 높이 낮아짐
      .force(
        'collide',
        forceCollide(d => d.r + 5),
      )
      .stop();

    for (let i = 0; i < 300; i++) sim.tick();

    setNodes([...initialNodes]);

    const animations = initialNodes.map((node, i) =>
      Animated.timing(node.anim, {
        toValue: 1,
        duration: 800,
        delay: i * 75,
        useNativeDriver: true,
      }),
    );
    Animated.stagger(50, animations).start();
  }, [DATA]);

  const AnimatedG = Animated.createAnimatedComponent(G as any);

  const colorInterpolator = interpolateRgb(minColor, maxColor);
  const colorScale = scaleLinear<string>()
    .domain([minValue, maxValue])
    .range([minColor, maxColor])
    .interpolate(() => colorInterpolator);

  return (
    <View style={[styles.container, {width: CHART_WIDTH}]}>
      <Svg
        width={screenWidth}
        height={CHART_HEIGHT}
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}>
        {nodes.map((node, idx) => {
          const scale = node.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.6, 1],
          });

          return (
            <AnimatedG
              key={idx}
              style={{
                transform: [
                  {translateX: node.x},
                  {translateY: node.y},
                  {scale},
                ],
                opacity: node.anim,
              }}>
              <Circle r={node.r} fill={colorScale(node.value)} />
              <SvgText
                fill="#fff"
                fontSize={14}
                fontWeight="bold"
                x={0}
                y={-4}
                textAnchor="middle">
                {node.name}
              </SvgText>
              <SvgText
                fill="#fff"
                fontSize={16}
                fontWeight="bold"
                x={0}
                y={14}
                textAnchor="middle">
                {node.value}
              </SvgText>
            </AnimatedG>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BubbleChartForce;
