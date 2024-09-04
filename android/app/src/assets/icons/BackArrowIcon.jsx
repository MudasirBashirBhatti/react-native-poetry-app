import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackArrowIcon = ({ width, height, fill }) => (
    <Svg
        width={width || 25}
        height={height || 24}
        fill="none"
    >
        <Path
            fill={fill || "#FAF9F6"}
            d="M10.07 18.82c-.19 0-.38-.07-.53-.22l-6.07-6.07a.754.754 0 0 1 0-1.06L9.54 5.4c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L5.06 12l5.54 5.54c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z"
        />
        <Path
            fill={fill || "#FAF9F6"}
            d="M21 12.75H4.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H21c.41 0 .75.34.75.75s-.34.75-.75.75Z"
        />
    </Svg>
)
export default BackArrowIcon
