"use client";

import { useAge, useCurrentTime } from "@/utils/time";

import { FORMATTED_PEAR_BIRTH, PEAR_BIRTH } from "@/constants";

export default function Home() {
  const currentTime = useCurrentTime();
  const pearAge = useAge(PEAR_BIRTH);

  const userBirthDate = new Date("2002-03-12T08:00:00.000Z");
  const userAge = useAge(userBirthDate);

  // const userToPearAge = timeToReachAge(userBirthDate, pearAge)
  return (
    <div>
      <h1 className="mb-4 text-center">
        PEAR BIRTH {FORMATTED_PEAR_BIRTH} is {pearAge}
      </h1>
      {currentTime.toLocaleDateString()} {currentTime.toLocaleTimeString()}
      <h1>
        User born on {userBirthDate.toLocaleDateString()} is {userAge}
      </h1>
      {/* {JSON.stringify(userToPearAge)} */}
    </div>
  );
}
