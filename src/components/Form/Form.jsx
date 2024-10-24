import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Form = ({ onSubmit, hasResults }) => {
  const [value, setValue] = useState('');

  const onFormSubmit = event => {
    event.preventDefault();
    const inputValue = value.toLowerCase();
    onSubmit(inputValue);
    if (!inputValue.trim()) {
      toast.error('Please enter something!');
      return;
    }
  };

  return (
    <div className="p-5 container">
      <form
        className="flex justify-end text-base items-baseline "
        onSubmit={onFormSubmit}
      >
        <p className="p-1 lg:text-xl mr-1 lg:mr-2"> Search by movie</p>
        <div className="flex  shadow-xl">
          <label className="flex  font-medium">
            <input
              type="text"
              name="query"
              value={value}
              autoFocus
              onChange={event => setValue(event.target.value)}
              placeholder="Enter movie"
              className="flex border-none outline-none p-2 text-lg"
            />
          </label>
          <button
            type="submit"
            className="border-none rounded-r-md cursor-pointer p-2"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </form>
      {hasResults === false && ( // Відображаємо "No results", якщо результатів немає
        <div className="text-center mt-5">
          <p className="text-xl font-bold">No results</p>
        </div>
      )}
      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
};

export default Form;
