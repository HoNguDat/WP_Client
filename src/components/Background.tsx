import { PropsWithChildren } from "react";

interface BackgroundProps extends PropsWithChildren {
  color?: string;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <>
      <div className="appBg">{children}</div>
    </>
  );
};

export default Background;
