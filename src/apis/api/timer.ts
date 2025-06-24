import {instance} from '..';

type saveStudyTimerRequest = {
  planId: number;
  startTime: string; // ISO 형식의 문자열
  endTime: string; // ISO 형식의 문자열
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
