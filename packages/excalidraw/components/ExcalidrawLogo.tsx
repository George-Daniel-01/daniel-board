import "./ExcalidrawLogo.scss";

const LogoIcon = () => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ExcalidrawLogo-icon"
  >
    <rect width="40" height="40" rx="10" fill="#6C5CE7" />
    <path
      d="M12 28L26 12M26 12L22 10M26 12L28 16"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 30L12 28"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const LogoText = () => (
  <svg
    viewBox="0 0 200 40"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="ExcalidrawLogo-text"
  >
    <text
      x="0"
      y="30"
      fill="currentColor"
      fontSize="26"
      fontWeight="700"
      fontFamily="Arial, sans-serif"
    >
      Daniel Board
    </text>
  </svg>
);

type LogoSize = "xs" | "small" | "normal" | "large" | "custom" | "mobile";

interface LogoProps {
  size?: LogoSize;
  withText?: boolean;
  style?: React.CSSProperties;
  isNotLink?: boolean;
}

export const ExcalidrawLogo = ({
  style,
  size = "small",
  withText,
}: LogoProps) => {
  return (
    <div className={`ExcalidrawLogo is-${size}`} style={style}>
      <LogoIcon />
      {withText && <LogoText />}
    </div>
  );
};
