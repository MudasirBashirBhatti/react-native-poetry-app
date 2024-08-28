import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CopyIcon = ({ fill }) => (
    <Svg
        width={25}
        height={24}
        fill="none"
    >
        <Path
            fill={fill || "#FAF9F6"}
            d="M16.5 12.9v4.2c0 3.5-1.4 4.9-4.9 4.9H7.4c-3.5 0-4.9-1.4-4.9-4.9v-4.2C2.5 9.4 3.9 8 7.4 8h4.2c3.5 0 4.9 1.4 4.9 4.9Z"
        />
        <Path
            fill={fill || "#FAF9F6"}
            d="M17.6 2h-4.2c-3.083 0-4.529 1.094-4.83 3.739-.063.553.395 1.011.952 1.011H11.6c4.2 0 6.15 1.95 6.15 6.15v2.078c0 .557.458 1.015 1.011.952 2.645-.301 3.739-1.747 3.739-4.83V6.9c0-3.5-1.4-4.9-4.9-4.9Z"
        />
    </Svg>
)
export default CopyIcon
