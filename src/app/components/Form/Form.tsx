"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { mutate } from "swr";
import { FaSearch } from "react-icons/fa";

interface FormProps {
  initialQuery: string;
}

const Form = ({ initialQuery }: FormProps) => {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = value.trim().toLowerCase();

    if (!inputValue) {
      toast.error("Please enter something!");
      return;
    }

    router.push(`/movie?query=${encodeURIComponent(inputValue)}`);
    mutate(["movie", inputValue]);
  };

  return (
    <div className="p-5 container">
      <form
        className="flex justify-end text-base items-baseline"
        onSubmit={onFormSubmit}
      >
        <p className="p-1 lg:text-xl mr-1 lg:mr-2">Search by movie</p>
        <div className="flex shadow-xl">
          <label className="flex font-medium">
            <input
              type="text"
              name="query"
              value={value}
              autoFocus
              onChange={(event) => setValue(event.target.value)}
              placeholder="Enter movie"
              className="flex border-none outline-none p-2 text-lg"
            />
          </label>
          <button
            type="submit"
            className="border-none rounded-r-md cursor-pointer p-2"
          >
            <FaSearch />
          </button>
        </div>
      </form>

      <ToastContainer autoClose={4000} theme="colored" />
    </div>
  );
};

export default Form;
