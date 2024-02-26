import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const GoalIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#403100"
        d="M13 16.938V19h5v2H6v-2h5v-2.062A8 8 0 0 1 4 9V3h16v6a8 8 0 0 1-7 7.938ZM6 5v4a6 6 0 1 0 12 0V5H6ZM1 5h2v4H1V5Zm20 0h2v4h-2V5Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default GoalIcon
