import {instance} from '..';
import {saveStudyTimerRequest} from '../../types/api';

export const getPlanTimer = async () => {
  return await instance.get(`/timer/get/plan`);
};

export const saveStudyTimer = async (studyData: saveStudyTimerRequest) => {
  try {
    const response = await instance.post('/timer/study', studyData);
    return response.data;
  } catch (error) {
    console.error('Study timer save error:', error);
    throw error;
  }
};
