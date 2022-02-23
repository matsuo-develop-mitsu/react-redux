import React from 'react'


const Event = (props) => {
    const { event, dispatch } = props;
          const id = event.id;
      const handleClickDeleteButton = () => {
        const result = window.confirm(`イベント(id=${id})を本当に削除してもよろしいですか？`);
        if (result) {
            dispatch({
                type: 'DELETE_EVENT', id
            })      
        }
      }
      return (
      <tr>
      <td>{id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
      <button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
      </td>
      </tr>
      )
    }

export default Event