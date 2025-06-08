// BubbleChart.tsx
import React, {useEffect, useState} from 'react';
import {View, Dimensions, Animated, StyleSheet} from 'react-native';
import Svg, {G, Circle, Text as SvgText} from 'react-native-svg';
import {hierarchy, pack as d3pack, HierarchyNode} from 'd3-hierarchy';
import {scaleOrdinal} from 'd3-scale';
import * as d3Chromatic from 'd3-scale-chromatic';

// 데이터 노드 타입 정의 (과일 이름과 값)
interface DataNode {
  name: string;
  value: number;
}

// 루트 데이터 타입 (children 배열만 있음)
interface RootDatum {
  children: DataNode[];
}

// D3가 내부적으로 쓰는 계층 노드 타입 확장
interface HierarchyNodeDatum extends DataNode {
  children?: HierarchyNodeDatum[];
}

// 버블 하나당 사용할 상태 타입
interface BubbleNode {
  x: number; // D3가 계산한 x 좌표
  y: number; // D3가 계산한 y 좌표
  r: number; // D3가 계산한 반지름
  data: DataNode; // 원본 데이터 (이름과 값)
  anim: Animated.Value; // 애니메이션용 값 (0 → 1)
}

// 실제 그릴 데이터 (RootDatum 형태)
const DATA: RootDatum = {
  children: [
    {name: 'Apples', value: 70},
    {name: 'Oranges', value: 44},
    {name: 'Kiwis', value: 65},
    {name: 'Bananas', value: 39},
    {name: 'Pears', value: 10},
    {name: 'Satsumas', value: 25},
    {name: 'Pineapples', value: 30},
  ],
};

const BubbleChart = () => {
  // 화면 너비와 높이를 계산하여, 최대 600px로 제한
  const {width: screenWidth} = Dimensions.get('window');
  const diameter = Math.min(screenWidth, 600);

  // 노드 배치 및 애니메이션 상태를 담는 배열
  const [nodes, setNodes] = useState<BubbleNode[]>([]);

  useEffect(() => {
    // 1) D3 계층 구조 생성
    const root: HierarchyNode<HierarchyNodeDatum> =
      hierarchy<HierarchyNodeDatum>(DATA as any, d => (d as any).children)
        .sum(d => d.value)
        .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    // 2) pack 레이아웃 적용 (diameter x diameter 크기, 패딩 5)
    const packLayout = d3pack<HierarchyNodeDatum>()
      .size([diameter, diameter])
      .padding(5);
    packLayout(root);

    // 3) D3가 계산한 x, y, r 값을 가지고 BubbleNode 배열 생성
    const computed: BubbleNode[] = (root.children ?? []).map(node => ({
      x: (node as any).x ?? 0,
      y: (node as any).y ?? 0,
      r: (node as any).r ?? 0,
      data: {name: node.data.name, value: node.data.value},
      anim: new Animated.Value(0),
    }));

    setNodes(computed);

    // 4) 순차적인 페이드 인 + 스케일 애니메이션
    const animations = computed.map((item, i) =>
      Animated.timing(item.anim, {
        toValue: 1,
        duration: 800,
        delay: i * 75, // i번째 노드는 i*75ms 지연
        useNativeDriver: true,
      }),
    );
    Animated.stagger(50, animations).start();
  }, [diameter]);

  // 색상 스케일: schemeCategory10을 사용
  const colorScale = scaleOrdinal<string, string>(d3Chromatic.schemeCategory10);

  // react-native-svg의 <G>에 Animated를 적용하기 위한 컴포넌트
  const AnimatedG = Animated.createAnimatedComponent(
    G as unknown as React.ComponentType<any>,
  );

  return (
    <View style={styles.container}>
      <Svg width={diameter} height={diameter}>
        {/* ① 버블 노드들 */}
        {nodes.map((nodeObj, idx) => {
          // anim 값(0 → 1)을 scale과 opacity로 분리
          const scale = nodeObj.anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0.6, 1],
          });

          return (
            <AnimatedG
              key={idx}
              style={{
                transform: [
                  {translateX: nodeObj.x},
                  {translateY: nodeObj.y},
                  {scale: scale},
                ],
                opacity: nodeObj.anim,
              }}>
              <Circle
                r={nodeObj.r}
                fill={colorScale(nodeObj.data.name) ?? '#666'}
              />
              <SvgText
                fill="#ffffff"
                fontSize={16}
                fontWeight="bold"
                x={0}
                y={4} // 텍스트를 중앙에 맞추기 위해 살짝 아래로 이동
                textAnchor="middle">
                {nodeObj.data.value}
              </SvgText>
            </AnimatedG>
          );
        })}

        {/* ② 범례 (Legend) */}
        <G x={diameter + 20} y={20}>
          {DATA.children.map((d, i) => {
            const legendY = i * 24;
            return (
              <G key={i} y={legendY}>
                <Circle
                  cx={0}
                  cy={0}
                  r={6}
                  fill={colorScale(d.name) ?? '#666'}
                />
                <SvgText x={12} y={4} fill="#000000" fontSize={14}>
                  {d.name}
                </SvgText>
              </G>
            );
          })}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // 차트를 화면 중앙에 정렬
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
});

export default BubbleChart;
