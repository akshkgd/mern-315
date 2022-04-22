function todo(props){
    return(
        <div className="demo">
            <h2 className="task-title">{props.task}</h2>
            <p>{props.priority}</p>
        </div>
    );
}

export default todo;