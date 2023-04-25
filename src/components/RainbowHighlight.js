import React from "react";
import { RoughNotation } from "react-rough-notation";

export const RainbowHighlight = ({color, children}) => {
    const duration = Math.floor(30 * children.length)

    return (
    <RoughNotation
        type="highlight"
        multiline={true}
        padding={[0,2]}
        iterations={1}
        animationDuration={duration}
        color={color}
    >
        {children}
    </RoughNotation>
    )
}