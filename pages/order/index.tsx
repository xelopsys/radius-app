import React, { useState, useEffect, useMemo } from "react";
import { data, Data } from "../../components/data/data";
import Pagination from "../../components/Pagination/Pagination";
import Card from "../../components/Card/Card";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Search from "../../components/Search/Search";
import { useRouter } from "next/router";

function Index() {
	const [orders, setOrders] = useState<Data[]>([...data]);
	const [searchValues, setSearchValues] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [productsPerPage, setProductsPerPage] = useState<Data[]>([]);
	const [recordsPerPage] = useState<number>(10);
	const indexOfLastRecord = currentPage * recordsPerPage;
	const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
	const { pathname } = useRouter();
	const perPage = useMemo(() => {
		setProductsPerPage([
			...orders.slice(indexOfFirstRecord, indexOfLastRecord),
		]);
		return () => {
			setProductsPerPage([]);
		};
	}, [orders, currentPage]);

	// useMemo(() => {
	// 	setOrders([
	// 		...orders.filter((order) =>
	// 			order.name.includes(searchValues.toLowerCase())
	// 		),
	// 	]);
	// }, [searchValues]);
	useEffect(() => {
		if (searchValues) {
			setOrders([
				...orders.filter((order) =>
					order.name.toLowerCase().includes(searchValues.toLowerCase())
				),
			]);
		} else {
			setOrders([...data]);
		}

		return () => {
			setOrders([]);
		};
	}, [searchValues]);

	return (
		<main className="ml-[20px] mr-16 rounded-md w-[1097px] max-w-[1097px] h-[97%] max-h-[875px] flex flex-col justify-start items-center box-border bg-[#F3F5F8] overflow-y-auto scrollbar-hide px-5">
			<div className="my-5 w-full flex justify-start items-center">
				<Breadcrumb />
			</div>
			<p className="w-full text-left mb-3 text-[#3D639D]">Complete order</p>
			<Search setSearchValues={setSearchValues} />
			<p className="w-full text-left mb-3 text-sm">
				All products {"("}
				{searchValues ? productsPerPage.length : orders.length}
				{")"}
			</p>
			<div className="w-full h-max flex flex-row justify-center md:justify-start lg:justify-start items-center flex-wrap gap-3 md:gap-4 lg:gap-5 col-start-1 box-border">
				{productsPerPage.map((order: Data, index) => (
					<div key={index}>
						<Card id={index} {...order} />
					</div>
				))}
			</div>

			<div className="mt-10 w-full h-max">
				<Pagination
					setCurrentPage={setCurrentPage}
					userLength={orders.length}
				/>
			</div>
		</main>
	);
}

export default Index;
