"use client";

import { useEffect, useState } from "react";

export const LOCAL_TIME_ZONE = "Asia/Kolkata";
export const LOCAL_ZONE_LABEL = "IST";

/** Live local time in Abhinav's timezone. */
export function Clock({ className, showZone = true }: { className?: string; showZone?: boolean }) {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: LOCAL_TIME_ZONE,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={className} suppressHydrationWarning>
      {time ?? "--:--:--"}
      {showZone ? ` ${LOCAL_ZONE_LABEL}` : ""}
    </span>
  );
}
