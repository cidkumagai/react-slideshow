import { useEffect, useState } from 'react';

import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';

function App() {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3];
  useEffect(() => {
    const timerId = setInterval(() => {
      setIndex(index >= images.length - 1 ? 0 : index + 1);
    }, 3000);
    return () => clearInterval(timerId);
  }, [index]);
  const increment = () => {
    setIndex(index >= images.length - 1 ? 0 : index + 1);
  };
  const decrement = () => {
    setIndex(index === 0 ? images.length : index - 1);
  };
  return (
    <div>
      <div
        style={{
          width: '80%',
          height: '100vh',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        onClick={() => increment()}
      >
        <div
          style={{
            display: 'inline-block',
            width: '18px',
            height: '18px',
            margin: '0 10px',
            borderLeft: '4px solid #000',
            borderBottom: '4px solid #000',
            transform: 'rotate(45deg)',
            cursor: 'pointer',
          }}
        />
        <div>
          <img src={images[index]} alt='' />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {images.map((_item, number) => {
              return (
                <p
                  style={{
                    color: number === index ? 'black' : 'white',
                    backgroundColor: number === index ? 'white' : 'black',
                    border: '2px solid #000000',
                    borderRadius: '100%',
                    width: '20px',
                    height: '20px',
                    margin: '0 15px',
                  }}
                ></p>
              );
            })}
          </div>
        </div>
        <div
          style={{
            display: 'inline-block',
            width: '18px',
            height: '18px',
            margin: '0 10px',
            borderRight: '4px solid #000',
            borderTop: '4px solid #000',
            transform: 'rotate(45deg)',
            cursor: 'pointer',
          }}
          onClick={() => decrement()}
        />
      </div>
    </div>
  );
}

export default App;
