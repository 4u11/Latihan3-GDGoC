import styles from './index.module.css'

function TaskInput() {
 return (
    <div className={styles.inputContainer}> 
        <input
        className={styles.input}
        />
        <button className='button'>Add</button>
    </div>
 );
}

export default TaskInput;