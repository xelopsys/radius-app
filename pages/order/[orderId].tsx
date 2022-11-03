import React, { useState } from "react";
import { Data, data } from "../../components/data/data";
import { GetStaticPaths, GetStaticProps } from "next";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useRouter } from "next/router";
import Image from "next/image";
function OrderId({ orderItem }: { orderItem: Data }) {
	const { asPath } = useRouter();
	return (
		<main className="ml-[20px] mr-16 rounded-md w-[1097px] max-w-[1097px] h-full max-h-max flex flex-col justify-start items-start box-border bg-[#F3F5F8] overflow-y-auto scrollbar-hide px-5">
			<div className="w-full my-5 mx-auto">
				<Breadcrumb name={orderItem?.name} />
			</div>
			<div className="w-full h-full bg-white overflow-y-auto scrollbar-hide">
				<div className="w-full h-max relative">
					<span className="absolute z-10 right-2 -top-2">Cart</span>

					<p className="text-[#3D639D] text-[22px] font-semibold ml-7 my-3">
						{orderItem?.name}
					</p>
					<div className="w-full h-max flex flex-row justify-evenly items-center">
						<div className="w-[480px] h-[380px] bg-[#F3F5F8] flex flex-row justify-center items-center relative  rounded-md">
							<div className="flex flex-col gap-y-3 absolute left-4 top-4">
								{orderItem?.hasPresent && (
									<span className="bg-[#A2AEDB] p-1 rounded-lg">
										<img
											src="/images/present.svg"
											className="w-5 h-5 text-[#3855B3] fill-[#3855B3]"
											alt="present"
										/>
									</span>
								)}
								{orderItem?.hasDiscount && (
									<span className="bg-[#FFBD95] p-1 rounded-lg">
										<img
											src="/images/dicount.svg"
											className="w-5 h-5 text-[#FF6422] stroke-1"
											alt="discount"
										/>{" "}
									</span>
								)}
								{orderItem?.isRecyclable && (
									<span className="bg-[#F39DBD] p-1 rounded-lg">
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
								className="object-cover "
							/>
						</div>
					</div>

					<div>
						<span>
							<p></p>
							<p></p>
						</span>
						<span>
							<p></p>
							<p>
								<span></span>
								<span></span>
							</p>
						</span>
						<div>
							<section>
								<input type="radio" name="monthly_perc" value="3x" id="3x" />
								<input type="radio" name="monthly_perc" value="6x" id="6x" />
								<input type="radio" name="monthly_perc" value="12x" id="12x" />
								<input type="radio" name="monthly_perc" value="24px" id="24x" />
							</section>
							<span></span>
						</div>
						<span>
							<p></p>
							<p></p>
						</span>
						<span>
							<p></p>
							<span></span>
						</span>
					</div>
				</div>
				<div className="w-full h-max">Second</div>
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
