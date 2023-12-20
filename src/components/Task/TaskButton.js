import React from 'react'

function TaskButton({children, type, onClick}) {
    
    return (
      <button type="success" className={"btn btn-" + type} onClick={onClick}>{children}</button>
    )
}

export default TaskButton