import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import OperationLog from "./OperationLog";
const OperationLogs = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <h4>操作ログ一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>内容</th>
            <th>時間</th>
          </tr>
        </thead>
        <tbody>
          {state.operationLogs.map((log, index) => {
            return <OperationLog key={index} log={log}/>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default OperationLogs;
