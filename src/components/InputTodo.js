import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoProps } = props;
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <IconContext.Provider
        value={{
          color: '#0bf388',
          style: { fontSize: '20px', color: '#ff0000' },
          className: 'submit-iconn',
        }}
      >
        <button className="input-submit" type="submit">
          <IoSend
            style={{ color: '#0bf388', fontSize: '20px', marginTop: '2px' }}
          />
        </button>
      </IconContext.Provider>
    </form>
  );
};
InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};
export default InputTodo;
