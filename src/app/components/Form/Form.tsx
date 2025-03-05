// "use client";

// import { useState } from "react";
// import { useSearchParams, useRouter } from "next/navigation";
// import { ToastContainer, toast } from "react-toastify";
// import { mutate } from "swr";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// interface FormProps {
//   hasResults: boolean;
// }

// const Form = ({ hasResults }: FormProps) => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const [value, setValue] = useState(searchParams.get("query") || "");

//   const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const inputValue = value.trim().toLowerCase();

//     if (!inputValue) {
//       toast.error("Please enter something!");
//       return;
//     }

//     // Оновлюємо URL з новим запитом
//     router.push(`/movie?query=${encodeURIComponent(inputValue)}`);
//     // mutate(["movie", inputValue]);
//   };

//   return (
//     <div className="p-5 container">
//       <form
//         className="flex justify-end text-base items-baseline"
//         onSubmit={onFormSubmit}
//       >
//         <p className="p-1 lg:text-xl mr-1 lg:mr-2">Search by movie</p>
//         <div className="flex shadow-xl">
//           <label className="flex font-medium">
//             <input
//               type="text"
//               name="query"
//               value={value}
//               autoFocus
//               onChange={(event) => setValue(event.target.value)}
//               placeholder="Enter movie"
//               className="flex border-none outline-none p-2 text-lg"
//             />
//           </label>
//           <button
//             type="submit"
//             className="border-none rounded-r-md cursor-pointer p-2"
//           >
//             {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
//           </button>
//         </div>
//       </form>

//       {!hasResults && ( // Відображаємо "No results", якщо результатів немає
//         <div className="text-center mt-5">
//           <p className="text-xl font-bold pt-5">No results</p>
//         </div>
//       )}

//       <ToastContainer autoClose={4000} theme="colored" />
//     </div>
//   );
// };

// export default Form;
