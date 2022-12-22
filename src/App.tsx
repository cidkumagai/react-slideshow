// React
import { useEffect, useState } from 'react';

// style-sheet
import styles from './styles/App.module.css';

// image
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
    <div className={styles.slide} onClick={() => increment()}>
      <div className={`${styles.slide_allow} ${styles.left_allow}`} />
      <div>
        <img src={images[index]} alt='' />
        <div className={styles.slide_rules}>
          {images.map((_item, number) => {
            return (
              <p
                className={styles.slide_rules_item}
                style={{
                  color: number === index ? 'black' : 'white',
                  backgroundColor: number === index ? 'white' : 'black',
                }}
              ></p>
            );
          })}
        </div>
      </div>
      <div className={`${styles.slide_allow} ${styles.right_allow}`} onClick={() => decrement()} />
    </div>
  );
}

export default App;
