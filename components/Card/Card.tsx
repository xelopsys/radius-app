import React from "react";
import { Data } from "../data/data";
import Link from "next/link";
import Image from "next/image";

interface Props extends Data {
	id: number;
}
const Card: React.FC<Props> = (props) => {
	const price = props?.price.price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	const monthlyPrice = props?.monthlyPrice.price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

	return (
		<div className="w-full md:h-[265px] md:w-[192px] lg:h-[265px] lg:w-[192px] box-border bg-white rounded-lg pt-3 px-3 md:p-none lg:p-none">
			<Link href={`/order/${props.slug}`} className="w-full h-full relative">
				<div className="flex flex-col justify-between items-center  absolute left-5 top-4 z-10 gap-y-1 ">
					{props?.hasPresent && (
						<span className="bg-[#A2AEDB] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
							<img
								src="images/present.svg"
								className="w-5 h-5 text-[#3855B3] fill-[#3855B3]"
							/>
						</span>
					)}
					{props?.hasDiscount && (
						<span className="bg-[#FFBD95] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
							<img
								src="images/dicount.svg"
								className="w-5 h-5 text-[#FF6422] stroke-1"
							/>{" "}
						</span>
					)}
					{props?.isRecyclable && (
						<span className="bg-[#F39DBD] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
							<img
								src="images/trade-in.svg"
								className="w-5 h-5 text-[#E83274] stroke-1"
							/>
						</span>
					)}
				</div>

				<span className="w-full h-max md:w-[168px] md:h-[168px] py-3 md:p-none lg:p-none flex mx-auto flex-row justify-center items-center rounded-md bg-[#F7F7F7]">
					<Image
						width={105}
						height={143}
						src={"/" + props?.image}
						alt={props?.format}
						className="rounded-md"
						priority
						loading="eager"
					/>
				</span>

				<div className="pb-3 md:p-none lg:p-none mt-1 text-[15px] flex flex-col justify-evenly items-start">
					<p>{props?.name.slice(0, 12)}...</p>
					<p>{`${price} ${props?.price.currency}`}</p>
					<p className="flex text-center text-[#BBC2D0] text-sm gap-x-2">
						<span className="bg-[#FF647C] text-white px-1 rounded-sm">
							от {`${monthlyPrice} ${props?.monthlyPrice.currency} `}
						</span>{" "}
						x24
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
