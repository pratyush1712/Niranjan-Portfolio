import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#141920",
          color: "#EFF2F5",
          fontSize: 16,
          fontFamily: "monospace",
          fontWeight: 600,
        }}
      >
        NK
      </div>
    ),
    { ...size }
  );
}
