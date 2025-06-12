export const formatHHMMSS = (seconds: number): string => {
  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
};

export const parseHHMMSSToSeconds = (timeStr: string): number => {
  const [h, m, s] = timeStr.split(':').map(Number);
  return h * 3600 + m * 60 + s;
};

export const formatReadableTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h}시간 ${m}분 ${s}초`;
};

export const parseKoreanTimeToSeconds = (input: string): number => {
  const timeStr = input.replace(/\s/g, ''); // 모든 공백 제거

  const hourMatch = timeStr.match(/(\d+)시간/);
  const minuteMatch = timeStr.match(/(\d+)분/);
  const secondMatch = timeStr.match(/(\d+)초/);

  const hours = hourMatch ? parseInt(hourMatch[1], 10) : 0;
  const minutes = minuteMatch ? parseInt(minuteMatch[1], 10) : 0;
  const seconds = secondMatch ? parseInt(secondMatch[1], 10) : 0;

  return hours * 3600 + minutes * 60 + seconds;
};
