import React from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SvgIcon from '../SvgIcon';

type BackButtonHeaderLeftProps = {
  onPressBackBtn?: () => void;
  pageName?: string;
};

const BackButtonHeaderLeft = ({
  onPressBackBtn,
  pageName,
}: BackButtonHeaderLeftProps) => {
  const isAndroid = Platform.OS === 'android';
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButtonBox}
        onPress={onPressBackBtn ? onPressBackBtn : () => navigation.goBack()}>
        <SvgIcon name="좌측방향" size={24} color="black" />
      </TouchableOpacity>
      {pageName && <Text style={styles.text}>{pageName}</Text>}
    </View>
  );
};

export default BackButtonHeaderLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonBox: {
    padding: 5,
  },
  text: {
    fontSize: 20,
    color: 'black',
    marginLeft: 8,
  },
});
