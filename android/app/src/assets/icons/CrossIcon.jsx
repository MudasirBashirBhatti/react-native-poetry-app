import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { colors } from "../../utilities/colors"
const CrossIcon = (props) => (
    <Svg
        width={47}
        height={47}
        fill="none"
        {...props}
        onPress={props.onPress}
    >
        <Path
            fill={props.fill || colors.primaryClr}
            d="M33.292 41.125h-13.16a11.268 11.268 0 0 1-8.323-3.682l-6.913-7.598c-3.29-3.603-3.29-9.047 0-12.67l6.913-7.599a11.215 11.215 0 0 1 8.323-3.701h13.16c6.208 0 11.26 5.053 11.26 11.26v12.73c0 6.207-5.052 11.26-11.26 11.26ZM20.132 8.812a8.35 8.35 0 0 0-6.15 2.723L7.05 19.152a6.465 6.465 0 0 0 0 8.715l6.913 7.598a8.35 8.35 0 0 0 6.15 2.722h13.179c4.582 0 8.323-3.74 8.323-8.322v-12.73c0-4.582-3.74-8.323-8.323-8.323h-13.16Z"
        />
        <Path
            fill={props.fill || colors.primaryClr}
            d="M31.333 29.806c-.372 0-.744-.137-1.038-.431l-9.674-9.694a1.478 1.478 0 0 1 0-2.076 1.478 1.478 0 0 1 2.076 0l9.674 9.694a1.478 1.478 0 0 1 0 2.076c-.294.294-.666.43-1.038.43Z"
        />
        <Path
            fill={props.fill || colors.primaryClr}
            d="M21.66 29.806c-.373 0-.745-.137-1.039-.431a1.478 1.478 0 0 1 0-2.076l9.674-9.674a1.478 1.478 0 0 1 2.076 0 1.478 1.478 0 0 1 0 2.076l-9.674 9.674c-.294.294-.666.43-1.038.43Z"
        />
    </Svg>
)
export default CrossIcon
