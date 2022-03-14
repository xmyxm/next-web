export default function Custom404() {
  return (
    <>
      <div className="cu-box">
        <h1>404，页面不见了</h1>
      </div>
      <style jsx>{`
        .cu-box {
          width: 100vh;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
