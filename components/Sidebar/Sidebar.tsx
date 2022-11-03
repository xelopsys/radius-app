import React, { useState, useEffect } from "react";
import { routes } from "../routes/routes";
import Link from "next/link";
import { useRouter } from "next/router";
const Sidebar: React.FC = () => {
	const { pathname } = useRouter();

	return (
		<div className=" w-[263px] h-full max-w-[263px] bg-[#3D639D] rounded-tr-3xl">
			<nav>
				<ul className="w-full h-max mt-10 flex flex-col justify-center items-end text-white stroke-white">
					{routes.map((route, index) => (
						<li
							key={index}
							className={`w-[80%] text-sm rounded-l-3xl stroke-white hover:text-[#3D639D] hover:bg-white my-2 cursor-pointer ${
								pathname === route.path ||
								pathname.split("/")[1] === route.path.split("/")[1]
									? "bg-white text-[#3D639D]"
									: ""
							}`}
						>
							<Link href={route.path} className="w-full h-full ">
								<span className="w-full h-full flex flex-row justify-start items-center px-3 my-3">
									<route.Icon className=" border-none " />
									<span className="mx-3"> {route.name}</span>
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
