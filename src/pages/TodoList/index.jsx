import TaskInput from "../../components/input";

function TodoList (){

        return (
            <div
            style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%', 
            }}>
                <TaskInput />
          </div>

        );
}

export default TodoList;