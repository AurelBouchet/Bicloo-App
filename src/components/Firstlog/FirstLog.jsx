import './FirstLog.css';

const FirstLog = () => {
  const animation = (
    <div className="anim-container">
      <svg
        className="bike-svg"
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="400"
        height="400"
        viewBox="0 0 1280 1280"
      >
        <path
          className="bike"
          stroke="white"
          fill="white"
          d="M436 370.1c-27.5.7-36.7 1.2-40.7 2.4-7.6 2.3-15.3 9.7-20 19.3-3.5 7.1-3.8 8.3-4.1 18.3-.5 11.9 1.1 18.9 6.4 28.3 4 7.1 13.6 16.9 22.3 22.7 4.2 2.8 7.7 5.2 7.9 5.4.2.1-2.4 9.2-5.7 20.1-5.8 19.5-11.7 40.3-28 98.9-11.1 39.8-11.7 42-12.7 41.8-.5-.1-4-1.4-7.9-2.9-22.4-8.4-40.6-11.6-65.5-11.6-24.3 0-40.7 2.7-63 10.7-35.6 12.6-68.4 38.5-90.5 71.5-6.8 10.2-16.3 29.2-20.4 41.1-24.7 71.4-2.5 152.1 55.1 200.5 34.1 28.6 74.9 43.4 119.3 43.4C406 979.8 493 870.9 467.4 756.1c-3.4-15.1-7.2-26-14.4-40.6-10.1-20.8-21.1-35.7-39-52.8l-10.7-10.3 3.1-10.8c1.8-5.9 3.5-10.7 3.9-10.7.5-.1 48.1 32.2 106 71.7 57.9 39.4 105.3 71.8 105.4 71.9.1 0-.5 2.8-1.4 6-2.6 9.2-2.3 27.9.5 37.8 5.9 20.8 19.7 37.7 38.5 47.1 5.1 2.6 11.7 5.4 14.7 6.2 8.6 2.3 25.2 2.9 33.5 1.1 3.9-.8 7.1-1.4 7.2-1.3.1 0 2.8 5.8 6.1 12.8l6.1 12.8H709v26h73v-23l-18.2-.2-18.1-.3-8.3-16.5c-4.6-9.1-8.3-16.8-8.3-17.2-.1-.3 1.9-1.8 4.4-3.3 5.7-3.3 16.4-13.3 20.9-19.4 4.2-5.7 9.3-15.7 11-21.3l1.2-4.3 8.6-.3 8.5-.3.7 6c3 26.7 17.5 61.2 35.3 84.4 31.3 40.7 75.6 65.8 126.8 71.8 12.4 1.5 39.6.6 51.8-1.6 76.1-13.8 135.2-73 149.2-149.2 2.2-12 3.1-39.4 1.6-51.8-7.6-64.5-45.7-118.3-103.3-146-43.4-20.8-92-23.8-138.6-8.3-6.7 2.2-12.4 3.9-12.6 3.7-.2-.2-13.9-25.3-30.5-55.8l-30.3-55.5 11.4-26.5 11.3-26.5 9-1.2c13.8-1.9 21.6-6 26.6-14 1.2-2 4.1-9.9 6.4-17.5l4.2-13.9H727.5l-5.2 3.5c-6.2 4.2-8.8 8.3-7.3 11.7 1.8 4.3 3.7 5.8 13.1 10.2 16.2 7.5 37.6 13.7 63.6 18.2 5.6.9 10.7 2.1 11.4 2.5.8.4-1.8 7.3-8.4 22l-9.5 21.4-169.1.5c-93 .3-169.1.2-169.1-.2s2.7-10.5 6.1-22.5c5.6-20.3 5.9-22.1 4.9-26.3-2.5-10.1-9.3-17.7-22.9-25.6-4.4-2.5-8.6-5.2-9.2-6-1.7-2.1-.7-4.6 3-7.1 3.4-2.3 3.5-2.3 40.7-2.3H507v-46l-17.7.2c-9.8 0-33.8.5-53.3.9zm327.7 180.1c-1.7 3.9-16.6 41.3-41.1 102.9L695 722.7l-7.3.6c-3.9.4-10.3 1.6-14.2 2.8-11.8 3.5-10.6 4.3-18.5-11.9l-6.9-14.2H678v-26h-75v23.5l14-.3 14-.3 9.6 19.8 9.5 19.8-2.5 2.2-2.6 2.2-6.3-4.3c-3.4-2.4-52.8-35.7-109.7-74.1-56.9-38.4-104.1-70.3-104.8-70.9-1-.9.1-5.4 4.9-21.9l6.2-20.7h164.4c131.2 0 164.4.3 164 1.2zm72.4 49.5c10.6 19.7 20.6 38.1 22.1 40.9l2.8 5-6.4 4.7c-14.2 10.5-30.2 27.4-41 43.6-14.6 21.8-26 51.2-29.1 74.8l-.7 5.3h-18.5l-4.6-9.4a69 69 0 00-11.8-17c-6.1-6.6-7-7.9-6.2-9.9 2.4-6.9 72.9-173.6 73.4-173.7.3 0 9.3 16.1 20 35.7zm-519.9 67.2c4.8 1.1 10.8 2.7 13.3 3.5 4.2 1.5 16.7 6.5 17.2 7 .4.4-8.6 26.9-16.2 47.9l-6.9 18.8-18.5 17.6c-24.1 22.7-27.3 26.2-29.9 31.7-4.2 8.9-2 17.5 5.6 21.2 4.1 2 17.3 3.1 24.8 1.9 11.2-1.6 43.3-28.8 55.1-46.5 9.6-14.4 18.6-34.4 23.4-52.3 1.3-4.8 2.7-8.7 3.1-8.7 1.8 0 14.4 18.6 19.2 28.5 9.6 19.4 13.7 37.1 13.7 58.8 0 21.9-4.2 39.9-13.7 58.9-20.6 41.3-60 68.2-107 72.9-28.1 2.9-60-5.3-84.4-21.6-28.4-19-47.5-46.5-56.2-81-1.9-7.8-2.2-11.6-2.3-29 0-18.6.2-20.8 2.8-30.9 4.6-18.3 13.4-36.6 24.2-50.6 5.1-6.5 18.2-19.5 24.5-24.3 16.8-12.6 36.8-21.2 59-25.3 10.8-1.9 37.8-1.1 49.2 1.5zm680.5.5c38.6 9.6 69.4 33.8 87.1 68.4 17.3 33.6 19.6 70.3 6.6 106.7-12.3 34.3-43.7 65.6-78.2 78-35.3 12.6-72.3 10.5-105.2-6a132.66 132.66 0 01-67.5-80.7c-2.3-7.5-4.1-16.7-3.4-16.9.2-.1 30.3-.5 66.9-.9 74.1-.7 72.8-.6 79-7.6 2.6-3 3-4.3 3-9.2 0-3.6-.9-8-2.5-12.2-1.4-3.6-16-30.8-32.4-60.5l-29.9-54 3.2-1.4c4-1.7 16.5-4.9 24.1-6.1 3.3-.5 13.4-.7 22.5-.5 13.5.3 18.4.8 26.7 2.9zm-89 64.6a7273 7273 0 0122 40.7c.4 1-9.3 1.3-46.7 1.3h-47.2l.7-3.3c5.1-25.6 18-49.4 37.2-68.5 5.7-5.7 10.9-10.2 11.5-10 .6.2 10.7 18.1 22.5 39.8zm-223.8 18.2c-1.2 2.9-2.6 6.8-3.2 8.5-.6 1.8-1.3 3.3-1.7 3.3-.6 0-7.3-13.1-6.8-13.5.6-.6 10.4-3.4 12-3.4 1.6-.1 1.6.3-.3 5.1zm56.4 20.7l1.8 3.1h-14.9l2.7-6.5 2.6-6.6 3 3.5c1.7 1.9 3.8 4.8 4.8 6.5zm-79.5 30.4c10.1 6.9 20.5 13.3 23.2 14.3l4.8 1.7 8.1 17c4.5 9.4 8 17.2 7.8 17.4-.2.2-3.3.6-6.9 1-22.8 2.1-46.6-12.9-54.9-34.6-1-2.7-2.3-8-2.9-11.8-1.3-7.7-.4-18.7 1.4-18 .6.3 9.3 6.1 19.4 13zm80.7 22.5c-1.9 3.7-5.8 9.1-8.6 11.9-5 5.1-12.6 10.9-13.3 10.2-.9-1-13.6-27-13.6-27.9 0-.6 7-1 19.6-1h19.5l-3.6 6.8z"
        />
      </svg>
    </div>
  );

  return (
    <div className=" h-screen w-full bg-black flex items-center">
      {animation}
    </div>
  );
};

export default FirstLog;
