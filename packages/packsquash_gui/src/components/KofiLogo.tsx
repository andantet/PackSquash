import { ComponentProps } from "solid-js";

export default (props: ComponentProps<"svg">) => {
  return (
    <svg
      version="1.1"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g transform="matrix(1.3333 0 0 -1.3333 0 800)">
        <g transform="scale(.1)">
          <path
            d="m6e3 3e3c0 1656.9-1343.1 3e3 -3e3 3e3s-3e3 -1343.1-3e3 -3e3 1343.1-3e3 3e3 -3e3 3e3 1343.1 3e3 3e3"
            fill="#50aee4"
          />
          <path
            d="m5484.3 3458.7c-63.19 333.74-242.84 541.64-426.97 670.19-190.41 132.95-418.48 201.26-650.72 201.26h-3295.8c-114.66 0-158.57-111.94-159.01-168.01-0.059-7.31 0.207-36.57 0.207-36.57s-5.407-1458.1 4.832-2236.9c31.105-459.78 491.77-459.63 491.77-459.63s1504 4.41 2225.4 8.89c33.83 0.22 67.61 3.86 100.44 12.07 410.68 102.75 453.17 484.28 448.78 696.96 825.48-45.86 1407.9 536.64 1261.2 1311.8m-927.31-756.75c-176.05-22-319.08-5.48-319.08-5.48v1078h216.62c143.17 0 281.27-59.61 374.69-168.1 65.76-76.38 118.37-183.88 118.37-332.37 0-362.99-187.04-506-390.6-572"
            fill="#fff"
          />
          <path
            d="m2566.1 2033.7c35.85-18.05 58.75 4.38 58.75 4.38s524.57 478.78 760.89 754.51c210.2 246.66 223.9 662.34-137.07 817.66-360.97 155.31-657.95-182.72-657.95-182.72-257.55 283.26-647.34 268.92-827.63 77.22-180.28-191.7-117.32-520.73 17.17-703.84 126.25-171.9 681.18-666.5 765.29-750.15 0 0 6.13-6.4 20.55-17.06"
            fill="#f14255"
          />
        </g>
      </g>
    </svg>
  );
};
