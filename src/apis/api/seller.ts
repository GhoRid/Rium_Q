import {instance} from '..';

export const fetchLikeSeller = async () => {
  return await instance.get('/api/sellerlike/list');
};
