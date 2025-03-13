import { PEAR_BIRTH } from "@/constants";
import { useState, useEffect } from "react";

export function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return currentTime;
}

export function useAge(birthDate: Date) {
  const currentTime = useCurrentTime();
  const difference = currentTime.getTime() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export function useTimeToPearAge(userBirthDate: Date) {
  const timeDiff = timeDifference(userBirthDate, PEAR_BIRTH);
  if (timeDiff.getUTCFullYear() - 1970 < 1) {
    return null;
  }
  const pearAge = useAge(PEAR_BIRTH);
  return timeToReachAge(userBirthDate, pearAge);
}

export function timeToReachAge(birthDate: Date, age: number) {
  const currentTime = useCurrentTime();
  const difference = timeDifference(PEAR_BIRTH, birthDate);
  const ageDate = new Date(difference);
  const yearsToReach = age - ageDate.getUTCFullYear();
  return yearsToReach;
}

// return the difference between two dates
export function timeDifference(date1: Date, date2: Date) {
  const difference = date1.getTime() - date2.getTime();
  return new Date(difference);
}

export function getDetailedTime(date: Date) {
  return {
    years: date.getUTCFullYear() - 1970,
    months: date.getUTCMonth(),
    days: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    milliseconds: date.getUTCMilliseconds(),
  };
}
