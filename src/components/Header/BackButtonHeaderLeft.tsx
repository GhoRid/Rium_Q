import React from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SvgIcon from '../SvgIcon';
import AppText from '../AppText';

type BackButtonHeaderLeftProps = {
  onPressBackBtn?: () => void;
  screenName?: string;
};

const BackButtonHeaderLeft = ({
  onPressBackBtn,
  screenName,
}: BackButtonHeaderLeftProps) => {
  const isAndroid = Platform.OS === 'android';
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPressBackBtn ? onPressBackBtn : () => navigation.goBack()}>
        <SvgIcon name="좌측방향" size={35} color="#BDBDBD" strokeWidth={3} />
      </TouchableOpacity>
      {screenName && <AppText style={styles.text}>{screenName}</AppText>}
    </View>
  );
};

export default BackButtonHeaderLeft;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 8,
  },
});
