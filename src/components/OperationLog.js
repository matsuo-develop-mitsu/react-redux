import React from "react";

const OperationLog = (props) => {
  const { log } = props;
  return (
    <>
      <tr>
        <td>{log.description}</td>
        <td>{log.operatedAt}</td>
      </tr>
    </>
  );
};

export default OperationLog;
