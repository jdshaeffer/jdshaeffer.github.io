import { useEffect, useState } from 'react';

interface TimerProps {
  extra?: number;
}

const useDate = (extra: number) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(id);
  });

  let dateStr = date.toLocaleString();
  if (extra) {
    const dateChars = [...dateStr];
    dateChars[dateStr.length - 4] = `${+dateChars[dateStr.length - 4] + extra}`;
    return dateChars.join('');
  }
  return dateStr;
};

const Timer = ({ extra }: TimerProps) => {
  const date = useDate(extra || 0);
  return <p>{date}</p>;
};

export default Timer;
