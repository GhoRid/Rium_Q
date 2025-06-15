import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {RootStackParamList} from '../../types/screens';

const MyPageScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>Notifications Screen</Text>

      <Pressable
        onPress={() => navigation.navigate('Login')}
        style={{
          backgroundColor: '#orange',
          padding: 30,
          borderRadius: 5,
          marginTop: 20,
        }}>
        <Text>Go to Login</Text>
      </Pressable>
    </View>
  );
};
export default MyPageScreen;
