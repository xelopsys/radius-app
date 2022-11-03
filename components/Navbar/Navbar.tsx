import React from "react";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";

export const Navbar: React.FC = () => {
	return (
		<nav className="w-full h-[70px]  mb-4 flex flex-row justify-between items-center ">
			<Link href="/" className="ml-[5%]">
				<span>Logo</span>
			</Link>

			<div className="w-max h-full flex flex-row justify-center items-center">
				<div className="w-auto h-fit relative flex flex-row justify-center items-center mx-10">
					<IoNotifications className="w-6 h-6 text-gray-500" />
					<span className="w-4 h-4 p-auto rounded-full bg-[#00C48C] text-xs flex justify-center items-center text-white absolute left-3 bottom-4">
						1
					</span>
				</div>
				<div className="w-[292px] h-full bg-[#3D639D] text-white rounded-bl-3xl flex flex-row justify-center items-center">
					<span>personal cabinet</span>
					<img src="" alt="" />
				</div>
			</div>
		</nav>
	);
};
