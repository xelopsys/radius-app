import React from "react";
// #F39DBD
// #E83274
interface Props {
	name: string;
	bgColor?: string;
	svgColor: string;
	title: string;
	add: string;
	value: string;
	image: string;
	imei?: string;
	hasDiscount?: boolean;
	hasPresent?: boolean;
	isRecycable?: boolean;
	isIphone?: boolean;
}
const Labels: React.FC<Props> = (props) => {
	return (
		<React.Fragment>
			<li className="w-full h-max flex flex-row justify-between items-center align-middle box-border">
				<label
					htmlFor={props.name}
					className="w-full  h-max flex flex-row justify-start items-center"
				>
					<span
						className={`${
							props.name === "iphone" ? "bg-[#AAD9AC]" : `bg-${props.bgColor}`
						} w-9 h-7 flex justify-center items-center p-auto rounded-lg`}
					>
						<img
							src={`/${props?.image}`}
							className={`w-5 h-5 text-[${props?.svgColor}] stroke-1`}
						/>
					</span>
					<p className="h-max ml-2 text-sm flex flex-col leading-5 pl-2">
						<span className="my-2 font-light">{props?.title}</span>
						{props?.imei && (
							<span className="mb-2 font-light">{props?.imei}</span>
						)}
						<span className="text-gray-300 font-thin">{props?.add}</span>
					</p>
				</label>
				<input
					type="checkbox"
					name={props?.name}
					value={props?.value}
					id={props?.name}
					defaultChecked={
						props?.hasPresent ||
						props?.hasDiscount ||
						props?.isRecycable ||
						props?.isIphone
					}
					className="bg-[#00C48C] text-[#00C48C] focus:ring-[#00C48C] w-5 h-5 rounded-lg cursor-pointer mb-3"
				/>
			</li>
		</React.Fragment>
	);
};

export default Labels;
