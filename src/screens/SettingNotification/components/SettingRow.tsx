import {StyleSheet, Switch, View} from 'react-native';
import palette from '../../../styles/palette';
import AppText from '../../../components/AppText';

const SettingRow = ({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) => {
  return (
    <View style={styles.row}>
      <AppText style={styles.label}>{label}</AppText>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{false: '#BDBDBD', true: palette.app_main_color}}
        thumbColor={'#fff'}
      />
    </View>
  );
};

export default SettingRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
});
