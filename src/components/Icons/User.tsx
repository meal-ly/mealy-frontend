import * as React from "react";

interface IUserSvgProps {
  width: number;
  height: number;
}

const SvgUser = (props: IUserSvgProps) => (
  <svg width={props.width} height={props.height}>
    <g transform="translate(-39.859 -15.167)">
      <circle
        cx={3.356}
        cy={3.356}
        transform="translate(42.586 15.167)"
        r={3.356}
      />
      <path
        d="M45.942 22.326a6.083 6.083 0 00-6.083 6.083h12.166a6.083 6.083 0 00-6.083-6.083z"
      />
    </g>
  </svg>
);

export default SvgUser;
