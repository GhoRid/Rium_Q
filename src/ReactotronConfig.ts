import Reactotron, {openInEditor} from 'reactotron-react-native';
import apisaucePlugin from 'reactotron-apisauce';
import config from '../app.json';

Reactotron.configure({
  name: config.name,
  onDisconnect: () => {},
})

  .useReactNative({
    networking: true, // netwrok의 모니터링 설정
  })

  .use(apisaucePlugin()) // Apisauce 모니터링 설정
  .use(openInEditor()) // 편집기에서 열기 설정
  .connect();
