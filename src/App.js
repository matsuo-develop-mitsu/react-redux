import React, { useEffect, useState } from "react";
const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // useEffectはcomponet内に何個も書くことができる
  useEffect(() => {
    console.log("This is like component did mount or compoent did update");
  });

  // 空配列なので、最初の描画時のみに発火
  useEffect(() => {
    console.log("This is like component did mout");
  }, []);

  // 配列にnameを指定しているので、nameのpropsが変更された時のみに発火
  useEffect(() => {
    console.log("Name is like component did mout");
  }, [name]);

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: "",
  price: 1000,
};

export default App;
