import React from 'react';
import {Platform, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type BackButtonHeaderLeftProps = {
  onPressBackBtn?: () => void;
};

const BackButtonHeaderLeft = ({onPressBackBtn}: BackButtonHeaderLeftProps) => {
  const isAndroid = Platform.OS === 'android';
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        style={{marginRight: 16}}
        onPress={
          onPressBackBtn ? onPressBackBtn : () => navigation.goBack()
        }></TouchableOpacity>
    </>
  );
};

export default BackButtonHeaderLeft;
