import React from "react";

// interfaces
import { ITask } from "../../interfaces/Task";
import { Container } from "./styled";


interface Props {
  taskList: ITask[];
  handleDelete(title: string): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
    <Container>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className='task'>
            <div className='details'>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className='actions'>
              <i className="bi bi-pencil" onClick={() => handleEdit(task)}></i>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(task.title)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
      </Container>
    </>
  );
};

export default TaskList;
