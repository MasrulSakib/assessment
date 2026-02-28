"use client";

interface ChargeflowLogoProps {
  color?: string;
  showText?: boolean;
  className?: string;
}

export default function ChargeflowLogo({
  color = "white",
  showText = false,
  className = "",
}: ChargeflowLogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Lightning bolt icon */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Two interlocking lightning/chain links */}
        <path
          d="M12 8C12 8 8 14 8 18C8 22 11 24 14 24C14 24 10 28 10 31C10 34 13 36 16 34C16 34 20 30 22 26"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M28 32C28 32 32 26 32 22C32 18 29 16 26 16C26 16 30 12 30 9C30 6 27 4 24 6C24 6 20 10 18 14"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      {/* Animatable text */}
      <div
        className=" transition-all duration-400 ease-[0.16,1,0.3,1] flex items-center"
        style={{
          width: showText ? "96px" : "0px",
          opacity: showText ? 1 : 0,
          marginLeft: showText ? "8px" : "0px",
        }}
      >
        <span
          className="text-[19px] font-semibold tracking-tight leading-none p-0.5"
          style={{ color, fontFamily: "'Inter', sans-serif" }}
        >
          chargeflow
        </span>
      </div>
    </div>
  );
}
