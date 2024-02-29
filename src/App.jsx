import qrCode from "/src/images/image-qr-code.png";
import "./App.css";

function App() {
  return (
    <div className="background h-screen flex flex-col justify-center items-center">
      <div className="w-80 white-bg p-4 m-5  rounded-2xl flex flex-col items-center">
        <img src={qrCode} alt="" className="rounded-2xl mb-5" />
        <div className="texts text-center mx-4">
          <h1 className="font-bold text-xl mb-5">
            Improve your front-end skills by building projects
          </h1>
          <p className="font-normal text-base">
            Scan the QR code to visit Front-End Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
