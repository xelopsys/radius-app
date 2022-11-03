import React, { useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
interface Props {
	userLength: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
	setCurrentPage,
	userLength,
}: {
	setCurrentPage: any;
	userLength: number;
}) {
	const [active, setActive] = useState<number>(0);

	const handleChangePage = (i: number) => {
		setCurrentPage(Number(i + 1));
		setActive(i);
	};
	return (
		<nav className=" w-full  h-fit flex justify-between items-center mb-4">
			{/* next button  */}
			<button
				disabled={active === 0 ? true : false}
				className={`${active === 0 ? "text-gray-300" : ""}  text-lg`}
				onClick={() => {
					setCurrentPage((prev: number) => prev - 1);
					setActive((prev: number) => prev - 1);
				}}
			>
				<MdNavigateBefore />
			</button>
			<ul className="inline-flex flex-row items-center -space-x-px">
				{[...Array(Math.ceil(userLength / 10))].map((_, i) => (
					<li key={i}>
						<button
							aria-current="page"
							onClick={() => handleChangePage(i)}
							className={`z-10 w-8 h-8 leading-tight rounded-lg ${
								active == i
									? "text-white bg-[#00C48C] hover:bg-[#40f2c0]"
									: "text-black hover:bg-[#00C48C] hover:text-white"
							} rounded-md mx-2`}
						>
							{i + 1}
						</button>
					</li>
				))}
			</ul>

			{/* previous button */}
			<button
				disabled={active === Math.ceil(userLength / 10) - 1 ? true : false}
				className={`${
					active === Math.ceil(userLength / 10) - 1 ? "text-gray-300" : ""
				} `}
				onClick={() => {
					setCurrentPage((prev: number) => prev + 1);
					setActive((prev: number) => prev + 1);
				}}
			>
				<MdNavigateNext className="w-8 h-8 font-thin" />
			</button>
		</nav>
	);
}
