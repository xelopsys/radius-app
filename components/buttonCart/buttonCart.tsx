import React from "react";

export const ButtonCart: React.FC<{ productsLen: number }> = ({
	productsLen,
}) => {
	return (
		<button className="absolute z-20 w-8 h-8 md:w-[60px] md:h-[60px] hover:w-[267px] transition ease-in delay-100  rounded-full bg-[#FF647C] group flex flex-row justify-evenly items-center -top-5 right-4 hover:right-0">
			<img
				src="/images/cart.svg"
				className="w-4 h-4 md:w-6 md:h-6"
				alt="Cart"
			/>
			<span className="hidden group-hover:inline-flex text-white">
				go to cart
			</span>
			<span className="hidden group-hover:inline-flex w-7 h-7 md:w-10 md:h-10 rounded-full text-center justify-center items-center bg-white text-[#FF647C]">
				{productsLen ? productsLen : 0}
			</span>
		</button>
	);
};
