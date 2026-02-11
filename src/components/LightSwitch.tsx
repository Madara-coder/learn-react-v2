import { useState } from "react";

export const LightSwitch = () => {
    const [isOn, setIsOn] = useState(false);
    const [toggleNum, setToggleNum] = useState(0);

    const handleToggle = () => {
        setIsOn(!isOn);
        setToggleNum(prev => prev + 1);
    };

    return (
        <>
        <div>
            <h4> Light is: {isOn ? "🟢 On": "🔴 Off"} </h4>
            <h4> Toggle Count: {toggleNum}</h4>
            <button onClick={handleToggle}>Toggle</button>
        </div>
        </>
    );
};