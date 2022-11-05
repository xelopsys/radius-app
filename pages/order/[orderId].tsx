import React, {
	useState,
	useContext,
	useEffect,
	useMemo,
	useCallback,
} from "react";
import { Data, data } from "../../components/data/data";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Image from "next/image";
import { GrWheelchairActive } from "react-icons/gr";
import Link from "next/link";
import Labels from "../../components/Labels/Labels";
import { AddToCart } from "../../context/AddToCartContext";
import { ButtonCart } from "../../components/buttonCart/buttonCart";

function OrderId({ orderItem }: { orderItem: Data }) {
	const { addToCart, products } = useContext(AddToCart);
	const { asPath } = useRouter();
	const [monthlyPerc, setMonthlyPerc] = useState<number>(3);
	const [width, setWidth] = useState<number>(0);
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);
	const handleChangeRadio = (e: any) => {
		setMonthlyPerc(Number(e.target.value));
	};
	const price = orderItem?.price.price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

	const withPerc = (+orderItem?.monthlyPrice.price * 3)
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	const monthlyPrice = orderItem?.monthlyPrice.price
		.toString()
		.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
	const handleAddToCart = (product: string) => {
		try {
			addToCart(product);
		} catch (e) {
			console.log;
		}
	};
	// window size

	return (
		<main className="ml-[20px] mx-3 md:mr-16 rounded-md w-[1097px] max-w-[1097px] h-[94%] max-h-[875px] flex flex-col justify-start items-start box-border bg-[#F3F5F8] overflow-y-auto scrollbar-hide px-5 mb-5">
			<div className="w-full my-5 mx-auto text-xs flex-wrap">
				<Breadcrumb
					name={
						width > 400 ? orderItem?.name : orderItem?.name.slice(0, 20) + "..."
					}
				/>
			</div>
			<div className="w-full h-max bg-white scrollbar-hide rounded-2xl relative z-10 mb-6">
				<div className="w-full h-max ">
					<p className="text-[#3D639D] text-sm md:text-[22px] font-semibold ml-7 mt-3">
						{orderItem?.name}
					</p>
					<div className="w-full h-max flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center md:justify-start lg:justify-start items-start px-4 md:pl-6 md:pr-3 gap-x-5">
						<div className="w-full md:w-[480px] h-72 md:h-[380px] bg-[#F3F5F8] flex flex-row justify-center items-center relative  rounded-md my-7">
							<div className="flex flex-col gap-y-3 absolute left-4 top-4">
								{orderItem?.hasPresent && (
									<span className="bg-[#A2AEDB] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
										<img
											src="/images/present.svg"
											className="w-5 h-5 text-[#3855B3] fill-[#3855B3]"
											alt="present"
										/>
									</span>
								)}
								{orderItem?.hasDiscount && (
									<span className="bg-[#FFBD95] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
										<img
											src="/images/dicount.svg"
											className="w-5 h-5 text-[#FF6422] stroke-1"
											alt="discount"
										/>{" "}
									</span>
								)}
								{orderItem?.isRecyclable && (
									<span className="bg-[#F39DBD] w-9 h-7 flex justify-center items-center p-auto rounded-lg">
										<img
											src="/images/trade-in.svg"
											className="w-5 h-5 text-[#E83274] stroke-1"
											alt="trade-in"
										/>
									</span>
								)}
							</div>
							<Image
								width={198}
								height={268}
								priority
								src={`/${orderItem?.image}`}
								alt={`${orderItem?.format}`}
								className="h-2/3 w-auto object-cover "
							/>
						</div>
						<ButtonCart productsLen={products.length} />
						<div className="w-full md:w-max lg:w-max h-max my-7 text-sm md:text-md">
							<span className="flex flex-col justify-startitems-center gap-y-1">
								<p className="text-gray-400">Price of the phone</p>
								<p>
									{price} {orderItem?.price.currency}
								</p>
							</span>
							<hr className="my-5 opacity-30" />
							<span>
								<p className="text-gray-400">
									Total amount {"("}with percentage{")"}
								</p>
								<p className="flex justify-between items-center w-full">
									<span className="">
										{withPerc} {orderItem?.monthlyPrice.currency}
									</span>
									<span className="text-gray-400 font-thin mr-6">
										<span className="bg-[#FF647C] text-white px-1 rounded-sm">
											{monthlyPrice} {orderItem?.monthlyPrice.currency}
										</span>{" "}
										x3
									</span>
								</p>
							</span>
							<div className=" w-full md:w-max text-center">
								<ul className="flex w-full h-max justify-center items-center text-[#00C48C] mt-[17px] mb-[9px]">
									<li className="w-1/4">
										<input
											type="radio"
											name="monthly_perc"
											className="hidden peer"
											value="3"
											id="3x"
											checked={monthlyPerc === 3}
											onChange={handleChangeRadio}
										/>
										<label
											htmlFor="3x"
											className="text-sm md:text-md w-full md:w-32 md:h-[38px] py-1 px-2 md:p-none cursor-pointer border border-[#00C48C] flex justify-center items-center rounded-l-md hover:text-white hover:bg-[#00C48C] peer-checked:bg-[#00C48C] peer-checked:text-white"
										>
											3 month
										</label>
									</li>
									<li className="w-1/4">
										<input
											type="radio"
											name="monthly_perc"
											className="hidden peer"
											value="6"
											id="6x"
											onChange={handleChangeRadio}
										/>
										<label
											htmlFor="6x"
											className="text-sm md:text-md w-full md:w-32 md:h-[38px] py-1 px-2 md:p-none cursor-pointer border border-[#00C48C] flex justify-center items-center hover:text-white hover:bg-[#00C48C] peer-checked:bg-[#00C48C] peer-checked:text-white"
										>
											6 month
										</label>
									</li>
									<li className="w-1/4">
										<input
											type="radio"
											name="monthly_perc"
											className="hidden peer"
											value="12"
											id="12x"
											onChange={handleChangeRadio}
										/>
										<label
											htmlFor="12x"
											className="text-sm md:text-md w-full md:w-32 md:h-[38px] py-1 px-2 md:p-none cursor-pointer border border-[#00C48C] bg-white flex justify-center items-center hover:text-white hover:bg-[#00C48C] peer-checked:bg-[#00C48C] peer-checked:text-white"
										>
											12 month
										</label>
									</li>
									<li className="w-1/4">
										<input
											type="radio"
											name="monthly_perc"
											className="hidden peer"
											value="24"
											id="24x"
											onChange={handleChangeRadio}
										/>
										<label
											htmlFor="24x"
											className="text-sm md:text-md w-full md:w-32 md:h-[38px] break-word py-1 px-2 md:p-none cursor-pointer border border-[#00C48C] flex justify-center items-center rounded-r-md hover:text-white hover:bg-[#00C48C] peer-checked:bg-[#00C48C] peer-checked:text-white"
										>
											24 month
										</label>
									</li>
								</ul>
								<span className="">
									Percentage: <b>{monthlyPerc} %</b>
								</span>
							</div>
							<hr className="my-5 opacity-30" />
							<span className="flex flex-col">
								<p className="text-gray-400">General description</p>
								<p className="w-full md:w-3/5 text-sm font-normal">
									{orderItem?.description}
								</p>
							</span>
							<Link href="/order">
								<p className="w-full flex justify-between items-center pr-6 text-[#00C48C] mt-6">
									<span>See all</span>
									<span>{">"}</span>
								</p>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-full h-max px-7 flex flex-col justify-start items-start">
					<p className="text-[#00C48C] text-sm mb-2">Discounts</p>
					<ul className="w-full h-max flex flex-col justify-center items-center box-border">
						<Labels
							name="trade-in"
							value="trade-in"
							bgColor="[#F39DBD]"
							svgColor="[#E83274]"
							image="images/trade-in.svg"
							title="Trade your older device for a new one"
							add={`- 400 000 ${orderItem?.price.currency}`}
							isRecycable={orderItem?.isRecyclable}
						/>
						<hr className="w-full opacity-75 my-5" />
						<Labels
							name="dicount"
							value="dicount"
							bgColor="[#FFBD95]"
							svgColor="[#FF6422]"
							image="images/dicount.svg"
							title="20% discounts for all devices"
							add={`- 10 000 ${orderItem?.price.currency}`}
							hasDiscount={orderItem?.hasDiscount}
						/>
						<hr className="w-full opacity-75 my-5" />
						<Labels
							name="present"
							value="present"
							bgColor="[#A2AEDB]"
							svgColor="[#3855B3]"
							image="images/present.svg"
							title="Headphones for present"
							add={`Airpods Pro`}
							hasPresent={orderItem?.hasPresent}
						/>
						<hr className="w-full opacity-75 my-5" />
						<Labels
							name="iphone"
							value="iphone"
							bgColor={`[#AAD9AC]`}
							svgColor=""
							image="images/dicount-gr.svg"
							title="Discount for iPhones"
							imei="IMEI: 123456789012345"
							add={`- 10 000 ${orderItem?.price.currency}`}
							isIphone={orderItem?.isIphone}
						/>
					</ul>
					<button
						className="w-full my-7 bg-[#00C48C] text-white text-center py-4 rounded-[26px] cursor-pointer"
						onClick={() => handleAddToCart(orderItem?.name)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</main>
	);
}

export default OrderId;

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;
	const orderItem = data.find((order) => order.slug === params?.orderId);
	return {
		props: {
			orderItem,
		},
	};
};
