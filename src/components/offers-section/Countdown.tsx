import React, { useEffect, useState } from "react";

export default function Countdown() {
  const [seconds, setSeconds] = useState(30);
  const [minutes, setMinutes] = useState(2);
  const [hours, setHours] = useState(15);
  const [days, setDays] = useState(2);
  const [isActive, setIsActive] = useState(true);
  const dias = { "--value": days } as React.CSSProperties;
  const horas = { "--value": hours } as React.CSSProperties;
  const minutos = { "--value": minutes } as React.CSSProperties;
  const segundos = { "--value": seconds } as React.CSSProperties;

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) { setSeconds(seconds - 1); }
        if (seconds === 0) {
          if (minutes === 0) {
            if (hours === 0) {
              if (days === 0) {
                clearInterval(interval);
                setIsActive(false);
              } else {
                setDays(days - 1);
                setHours(23);
                setMinutes(59);
                setSeconds(59);
              }
            } else {
              setHours(hours - 1);
              setMinutes(59);
              setSeconds(59);
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(0);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, hours, days]);

  return (
    <div className="lg:w-full sm:text-base text-sm w-1/2 lg:justify-start justify-end sm:h-16 h-12 lg:h-12 grid grid-flow-col gap-1 text-center auto-cols-max mr-3 lg:mr-0">
      
      <div className="rounded-lg gap-1 sm:w-16 items-center sm:justify-center lg:w-12 flex w-12 flex-col p-2 bg-gray-600 text-gray-100">
        <span className=" countdown font-mono">
          <span style={dias} className="font-bold"></span>
        </span>
        <span className="text-xs">days</span>
      </div>
      
      <div className="rounded-lg gap-1 sm:w-16 items-center sm:justify-center lg:w-12 flex w-12 flex-col p-2 bg-gray-600 text-gray-100">
        <span className=" countdown font-mono">
          <span style={horas} className="font-bold"></span>
        </span>
        <span className="text-xs">hours</span>
      </div>
      
      <div className="rounded-lg gap-1 sm:w-16 sm:justify-center lg:w-12 items-center w-12 flex flex-col p-2 bg-gray-600 text-gray-100">
        <span className="countdown font-mono">
          <span style={minutos} className="font-bold"></span>
        </span>
        <span className="text-xs">min</span>
      </div>
      
      <div className="rounded-lg gap-1 sm:w-16 sm:justify-center items-center lg:w-12 w-12 flex flex-col p-2 bg-gray-600 text-gray-100">
        <span className="countdown font-mono">
          <span style={segundos} className="font-bold"></span>
        </span>
        <span className="text-xs">sec</span>
      </div>
    
    </div>
  );
}
