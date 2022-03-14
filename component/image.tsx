import { useState } from "react";

export default function Image() {
  const [iShow, setIshow] = useState(false);
  return (
    <>
      <img
        className="demo-img"
        src="https://p0.meituan.net/scarlett/238a59d7116f011f4d317dc755e1c4bf1932866.jpg"
        alt=""
        onClick={() => {
          alert("next.js");
        }}
        onLoad={() => {
          setIshow(true);
        }}
        style={{ visibility: iShow ? "visible" : "hidden" }}
      />
      <style jsx>{`
        .demo-img {
          width: 200px;
          height: 150px;
        }
      `}</style>
    </>
  );
}
