import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDel }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa.id}>
          {tarefa}
          <span>
            <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
            <FaWindowClose
              onClick={(e) => handleDel(e, index)}
              className="del"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDel: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
