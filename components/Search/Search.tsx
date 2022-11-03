import React, { useState, useMemo, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
	setSearchValues: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<Props> = (props) => {
	const [search, setSearch] = useState<string>("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.target, e);
		props.setSearchValues(search);
	};
	const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			props.setSearchValues(search);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full h-max flex flex-row justify-center items-center my-4"
		>
			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-[90%] h-10 px-3 py-1 rounded-l-3xl"
				onKeyUp={handleKeyUp}
				placeholder="Search"
			/>
			<button
				type="submit"
				className="w-[10%] h-10 bg-[#00C48C]  px-3 py-1  rounded-r-3xl flex flex-row justify-center items-center"
			>
				<BsSearch className="w-6 h-6 text-white" />
			</button>
		</form>
	);
};

export default Search;
