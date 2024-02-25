import backgroundImage from "./assets/bg.jpg"; // Import the image directly

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`, // Use imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        // You can add other styles as needed
      }}
    >
      {/* Your component code here */}
    </div>
  );
}

export default App;
