import React from "react";

export default function Countdown() {
    const hour = '15';
    const minutes = '20';
    const seconds = '30';
    const horas = {"--value":hour} as React.CSSProperties;
    const minutos = {"--value":minutes} as React.CSSProperties;
    const segundos = {"--value":seconds} as React.CSSProperties;
    return (
        <div className="text-xs w-16 h-12 grid grid-flow-col gap-2 text-center auto-cols-max">
            <div className="items-center flex w-12 flex-col p-2 bg-gray-200 text-black-content">
                <span className=" countdown font-mono text-xs">
                <span style={horas}></span>
                </span>
                hours
            </div> 
            <div className="items-center text-xs w-12 flex flex-col p-2 bg-gray-200 text-black-content">
                <span className="countdown font-mono text-xs">
                <span style={minutos}></span>
                </span>
                min
            </div> 
            <div className="items-center w-12 text-xs flex flex-col p-2 bg-gray-200 text-black-content">
                <span className="countdown font-mono text-xs">
                <span style={segundos}></span>
                </span>
                sec
            </div>
            </div>
    );
}