import React, { useState, useEffect } from 'react';
import './sections.css';
// import main_2 from '../../img/300dpi/main_2_300.jpg';
// import main_1 from '../../img/300dpi/main_1_300.jpg';
// import main_0 from '../../img/300dpi/main_0_300.png';
// import main_3 from '../../img/300dpi/main_3_300.jpg';
// import main_4 from '../../img/300dpi/main_4_300.jpg';
import main_high_1 from '../../img/300dpi/main_1_300.png';
import main_high_0 from '../../img/300dpi/main_0_300.jpg';
import main_high_2 from '../../img/300dpi/main_2_300.jpg';
import main_high_3 from '../../img/300dpi/main_3_300.jpg';
import main_high_4 from '../../img/300dpi/main_4_300.jpg';
import ordinary_high_5 from '../../img/300dpi/ordinary_1.jpg';
import ordinary_high_6 from '../../img/300dpi/ordinary_2.jpg';
import ordinary_high_7 from '../../img/300dpi/ordinary_3.jpg';
import ordinary_high_8 from '../../img/300dpi/ordinary_4.jpg';
import ordinary_high_9 from '../../img/300dpi/ordinary_5.jpg';
import ordinary_high_10 from '../../img/300dpi/ordinary_6.jpg';
import ordinary_high_11 from '../../img/300dpi/ordinary_7.jpg';
import ordinary_high_12 from '../../img/300dpi/ordinary_8.jpg';

import main_low_1 from '../../img/72dpi/main_1_72.png';
import main_low_0 from '../../img/72dpi/main_0_72.jpg';
import main_low_2 from '../../img/72dpi/main_2_72.jpg';
import main_low_3 from '../../img/72dpi/main_3_72.jpg';
import main_low_4 from '../../img/72dpi/main_4_72.jpg';
import ordinary_low_5 from '../../img/72dpi/ordinary_1.jpg';
import ordinary_low_6 from '../../img/72dpi/ordinary_2.jpg';
import ordinary_low_7 from '../../img/72dpi/ordinary_3.jpg';
import ordinary_low_8 from '../../img/72dpi/ordinary_4.jpg';
import ordinary_low_9 from '../../img/72dpi/ordinary_5.jpg';
import ordinary_low_10 from '../../img/72dpi/ordinary_6.jpg';
import ordinary_low_11 from '../../img/72dpi/ordinary_7.jpg';
import ordinary_low_12 from '../../img/72dpi/ordinary_8.jpg';

// import f from '../../img/300dpi/ordinary_4.jpg';

const high = [
  ordinary_high_5,
  ordinary_high_6,
  ordinary_high_7,
  ordinary_high_8,
  ordinary_high_9,
  ordinary_high_10,
  ordinary_high_11,
  ordinary_high_12,
];

const low = [
  ordinary_low_5,
  ordinary_low_6,
  ordinary_low_7,
  ordinary_low_8,
  ordinary_low_9,
  ordinary_low_10,
  ordinary_low_11,
  ordinary_low_12,
];

const main_low = [main_low_0, main_low_1, main_low_2, main_low_3, main_low_4];

const main_high = [
  main_high_0,
  main_high_1,
  main_high_2,
  main_high_3,
  main_high_4,
];

function Home() {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };

  const [state, setState] = useState({
    windowDimension: getWindowDimensions(),
    imgArr: [],
    currentStateOrdinary: false,
  });

  const [stateInd, setStateInd] = useState({
    currentIndex: 0,
  });

  useEffect(() => {
    const randomArr = getRandomArr(6);
    var intervalMainId = setInterval(() => {
      setStateInd({
        currentIndex: stateInd.currentIndex++,
      });

      if (state.currentStateOrdinary) {
        if (state.currentStateOrdinary && stateInd.currentIndex === 4) {
          clearInterval(intervalMainId);
        }
        let elem = document.getElementById(`home-img-${stateInd.currentIndex}`);
        elem.parentNode.removeChild(elem);

        setState((prevState) => ({
          imgArr: [
            ...prevState.imgArr,
            getHomeImage(
              stateInd.currentIndex,
              randomArr[stateInd.currentIndex]
            ),
          ],
        }));
      } else {
        setState((prevState) => ({
          imgArr: [
            ...prevState.imgArr,
            getHomeImage(stateInd.currentIndex, stateInd.currentIndex),
          ],
        }));

        if (stateInd.currentIndex === 4) {
          setState((prevState) => ({
            ...prevState,
            currentStateOrdinary: (state.currentStateOrdinary = true),
          }));

          setStateInd({
            currentIndex: (stateInd.currentIndex = 0),
          });
        }
      }
    }, 300);

    function handleResize() {
      setState((prevState) => ({
        ...prevState,
        windowDimension: getWindowDimensions(),
      }));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomArr = (size) => {
    let arr = [];
    while (arr.length < size) {
      var r = Math.floor(Math.random() * size) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  };

  const getImage = (num) => {
    if (state.currentStateOrdinary) {
      if (getWindowDimensions().width > 480) {
        return high[num];
      } else {
        return low[num];
      }
    } else {
      if (getWindowDimensions().width > 480) {
        return main_high[num];
      } else {
        return main_low[num];
      }
    }
  };

  const getHomeImage = (index, a) => {
    return (
      <img
        key={getImage(a)}
        alt="Home page img"
        id={`home-img-${index}`}
        className="home-page-image"
        src={getImage(a)}
      />
    );
  };

  return (
    <div className="section-unit home-container" id="home">
      {state.imgArr}
      <img
        alt="Home page img_0_300"
        id="home-img-0"
        className="home-page-image"
        src={main_high_0}
      />
      {/* <img
        // key={index}
        alt="Home page img"
        id={`home-img-1`}
        className="home-page-image"
        src={f}
      /> */}
      {/* <img
        alt="Home page img_2_300"
        id="home-img-2"
        className="home-page-image"
        src={ordinary_high_8}
      /> */}

      {/* <img
        alt="Home page img_2_300"
        id="home-img-2"
        className="home-page-image"
        src=""
      />
      <img
        alt="Home page img_1_300"
        id="home-img-1"
        className="home-page-image"
      />
    
      <img
        alt="Home page img_3_300"
        id="home-img-3"
        className="home-page-image"
      />
      <img
        alt="Home page img_4_300"
        id="home-img-4"
        className="home-page-image"
      /> */}
      {/* <img
        alt="Home page img_0_300"
        id="home-img-0"
        className="home-page-image"
        src={main_high_0}
      /> */}

      {/* {arr.imgArr.map((a, index) => {
        return (
          <img
            key={index}
            alt="Home page img"
            id={`home-img-${index + 1}`}
            className="home-page-image"
            src={randomImage(arr[a])}
          />
        );
      })} */}
    </div>
  );
}

export default Home;
