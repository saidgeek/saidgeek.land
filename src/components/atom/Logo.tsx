import React, { FC } from 'react';
import * as colors from '../particles/colors';

export const Logo: FC<unknown> = () => {
  return (
    <svg
      width="300"
      height="190"
      viewBox={`0 0 150 90`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.88915 10.9506C5.88915 8.11565 8.21561 5.81749 11.0855 5.81749H144.457V17.7947C144.457 20.6296 142.131 22.9278 139.261 22.9278H23.2102V26.3498H73.4411C76.3109 26.3498 78.6374 28.648 78.6374 31.4829V63.9924H5.88915V52.0152C5.88915 49.1803 8.21561 46.8821 11.0855 46.8821H61.3164V43.4601H5.88915V10.9506Z"
        fill={colors.BLACK}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82.1016 26.3498H139.261C142.131 26.3498 144.457 28.648 144.457 31.4829V84.5247H11.0855C8.21561 84.5247 5.88915 82.2266 5.88915 79.3916V67.4144H127.136V63.9924H87.2979C84.4281 63.9924 82.1016 61.6942 82.1016 58.8593V26.3498ZM99.4226 46.8821H127.136V43.4601H99.4226V46.8821Z"
        fill={colors.BLACK}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M150 90H0V0H150V90ZM146.536 3.42205H3.4642V86.5779H146.536V3.42205Z"
        fill={colors.BLACK}
      />
    </svg>
  );
};
