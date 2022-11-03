import React from "react";
import { Data } from "../data/data";
import Link from "next/link";
import Image from "next/image";

interface Props extends Data {
	id: number;
}
const Card: React.FC<Props> = (props) => {
	return (
		<div className="h-[265px] w-[192px] box-border bg-white rounded-lg pt-3">
			<Link href={`/order/${props.slug}`} className="w-full h-full relative">
				<div className="flex flex-col justify-between items-center  absolute left-5 top-4 z-10 gap-y-1 ">
					{props?.hasPresent && (
						<span className="bg-[#A2AEDB] p-1 rounded-lg">
							<img
								src="images/present.svg"
								className="w-5 h-5 text-[#3855B3] fill-[#3855B3]"
							/>
						</span>
					)}
					{props?.hasDiscount && (
						<span className="bg-[#FFBD95] p-1 rounded-lg">
							<img
								src="images/dicount.svg"
								className="w-5 h-5 text-[#FF6422] stroke-1"
							/>{" "}
						</span>
					)}
					{props?.isRecyclable && (
						<span className="bg-[#F39DBD] p-1 rounded-lg">
							<img
								src="images/trade-in.svg"
								className="w-5 h-5 text-[#E83274] stroke-1"
							/>
						</span>
					)}
				</div>

				<span className="w-[168px] h-[168px] flex flex-row justify-center items-center mx-auto rounded-md bg-[#F7F7F7]">
					<Image
						width={105}
						height={143}
						src={"/" + props.image}
						alt={props.format}
						className="rounded-md"
						priority
						loading="eager"
					/>
				</span>

				<div className="mx-3 mt-1 text-[15px] flex flex-col justify-evenly items-start">
					<p>{props.name.slice(0, 12)}...</p>
					<p>{`${props.price.price} ${props.price.currency}`}</p>
					<p className="flex text-center text-[#BBC2D0] text-sm gap-x-2">
						<span className="bg-[#FF647C] text-white px-1 rounded-sm">
							от {`${props.monthlyPrice.price} ${props.monthlyPrice.currency} `}
						</span>{" "}
						x24
					</p>
				</div>
			</Link>
		</div>
	);
};

export default Card;
