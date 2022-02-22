import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const onClickCount = () => {
    setCount(count + 1);
  }

  const onClickDecriment = () => {
    setCount(count - 1);
  }

  const onClickCount2 = () => setCount((previous) => {
    console.log(previous);
    return previous + 1; 
  })

  const onClickReset = () => {
    setCount((previous) => {
      return 0;
    })
  }

  const onClickDupli = () => {
    setCount(count * 2);
  }

  const onClickTriple = () => {
    if (count % 3 === 0) {
      setCount(count / 3)
    } else {
      return;
    }
  }

  return (
    <>
      <div>
        <button onClick={onClickCount}>インクリメント</button>
        <button onClick={onClickDecriment}>デクリメント</button>
      </div>
      <div>
        <button onClick={onClickCount2}>インクリメント</button>
      </div>
      <div>
        <button onClick={onClickReset}>Reset</button>
      </div>

      <div>
        <button onClick={onClickDupli}>✖︎2</button>
      </div>

      <div>
        <button onClick={onClickTriple}>3の倍数の時だけ3で割る</button>
      </div>

      <div>count:  {count}</div>
    </>
  );
}

export default App;
