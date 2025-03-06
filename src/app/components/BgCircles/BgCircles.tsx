const BackgroundCircles = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        <circle cx="400" cy="150" r="250" fill="#d2b9b1" />
        <circle cx="1300" cy="550" r="400" fill="#c0dcc0" />
        <circle cx="250" cy="700" r="350" fill="#aacecf" />
        <circle cx="200" cy="200" r="150" fill="#ddd9c0" />
        <circle cx="900" cy="600" r="250" fill="#ecbfbf" />
        <circle cx="1100" cy="200" r="150" fill="#b0c4de" />
      </svg>
    </div>
  );
};

export default BackgroundCircles;
