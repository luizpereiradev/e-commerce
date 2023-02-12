import React from "react";

export default function Countdown() {
    const hour = '15';
    const minutes = '20';
    const seconds = '30';
    const horas = {"--value":hour} as React.CSSProperties;
    const minutos = {"--value":minutes} as React.CSSProperties;
    const segundos = {"--value":seconds} as React.CSSProperties;
    return (
        <div className="lg:w-full sm:text-base text-xs w-1/2 lg:justify-start justify-end sm:h-16 h-12 lg:h-12 grid grid-flow-col gap-2 text-center auto-cols-max">
            <div className="sm:w-20 items-center sm:justify-center lg:w-12 flex w-12 flex-col p-2 bg-gray-200 text-black-content">
                <span className=" countdown font-mono">
                <span style={horas}></span>
                </span>
                hours
            </div> 
            <div className="sm:w-20 sm:justify-center lg:w-12 items-center w-12 flex flex-col p-2 bg-gray-200 text-black-content">
                <span className="countdown font-mono">
                <span style={minutos}></span>
                </span>
                min
            </div> 
            <div className="sm:w-20 sm:justify-center items-center lg:w-12 w-12 flex flex-col p-2 bg-gray-200 text-black-content">
                <span className="countdown font-mono">
                <span style={segundos}></span>
                </span>
                sec
            </div>
            </div>
    );
}