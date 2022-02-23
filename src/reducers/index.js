// reducerには二つの引数が来る
// state: 状態 (任意 -> なので、何も入っていない場合に備え、空配列で初期化する)
// action: 操作 (必須)

const events = (state = [], action) => {
  //   action = {
  //     type: "CREATE_EVENT",
  //     title: String,
  //     body: String,
  //   };

  switch (action.type) {
    case "CREATE_EVENT":
      const event = {
        title: action.title,
        body: action.body,
      };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    case "DELETE_EVENT":
    case "DELETE__ALL_EVENTS":
      return [];
    default:
      return state;
  }
};

export default events;
