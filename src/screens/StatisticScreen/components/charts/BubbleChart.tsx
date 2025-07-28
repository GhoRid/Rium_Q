import React, {useEffect, useState} from 'react';
import {View, Dimensions, Animated, StyleSheet} from 'react-native';
import Svg, {Circle, Text as SvgText, G} from 'react-native-svg';
import {scaleLinear} from 'd3-scale';
import {interpolateRgb} from 'd3-interpolate';
import {forceSimulation, forceX, forceY, forceCollide} from 'd3-force';
import {palette} from '../../../../styles/palette';

interface DataNode {
  name: string;
  value: number;
}

interface BubbleNode extends DataNode {
  x: number;
  y: number;
  r: Animated.Value; // 반지름 애니메이션 값
}

interface Props {
  DATA: DataNode[];
  maxColor?: string;
  minColor?: string;
}

const BubbleChart = ({
  DATA,
  maxColor = palette.app_blue,
  minColor = '#B5CCF0',
}: Props) => {
  const {width: screenWidth} = Dimensions.get('window');
  const CHART_WIDTH = screenWidth / 2;
  const CHART_HEIGHT = 250;
  const ddHEIGHT = 20;
  const ddWidth = screenWidth / 2 - 70;

  const [nodes, setNodes] = useState<BubbleNode[]>([]);

  const maxValue = Math.max(...DATA.map(d => d.value));
  const minValue = Math.min(...DATA.map(d => d.value));
  const maxRadius = CHART_HEIGHT / 3.7;

  useEffect(() => {
    const initialNodes = DATA.map(d => ({
      ...d,
      x: Math.random() * ddWidth, // ⭐ 무작위 위치
      y: Math.random() * ddHEIGHT,
      r: (d.value / maxValue) * maxRadius,
      anim: new Animated.Value(0),
    }));
    const sim = forceSimulation(initialNodes)
      .force('x', forceX(CHART_WIDTH / 2).strength(0.05)) //  클수록 좌우로 좁아짐
      .force('y', forceY(CHART_HEIGHT / 2).strength(0.15)) // 클수록 높이 낮아짐
      .force(
        'collide',
        forceCollide(d => d.r + 5),
      )
      .stop();

    for (let i = 0; i < 300; i++) sim.tick();

    const animatedNodes: BubbleNode[] = initialNodes.map((d, i) => ({
      ...d,
      x: (sim.nodes()[i] as any).x,
      y: (sim.nodes()[i] as any).y,
      r: new Animated.Value(0), // 초기 0으로 시작
    }));

    setNodes(animatedNodes);

    const animations = animatedNodes.map((node, i) =>
      Animated.timing(node.r, {
        toValue: (node.value / maxValue) * maxRadius,
        duration: 1000,
        delay: i * 200,
        useNativeDriver: true,
      }),
    );

    Animated.stagger(50, animations).start();
  }, [DATA]);

  const AnimatedCircle = Animated.createAnimatedComponent(Circle);
  const AnimatedG = Animated.createAnimatedComponent(G);

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
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        // style={{backgroundColor: 'orange'}}
      >
        {nodes.map((node, idx) => (
          <AnimatedG
            key={idx}
            opacity={1}
            transform={[{translateX: node.x}, {translateY: node.y}]}>
            <AnimatedCircle r={node.r} fill={colorScale(node.value)} />
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
        ))}
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

export default BubbleChart;
