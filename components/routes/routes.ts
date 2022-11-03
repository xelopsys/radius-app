import { GrHomeRounded } from "react-icons/gr";
import { CgLoadbarDoc } from "react-icons/cg";
import { BsHandbag, BsCartDash } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

export const routes = [
	{
		path: "/",
		name: "Home",
		Icon: GrHomeRounded,
	},
	{
		path: "/orders",
		name: "Orders",
		Icon: CgLoadbarDoc,
	},
	{
		path: "/products",
		name: "Products",
		Icon: BsHandbag,
	},
	{
		path: "/comments",
		name: "Comments",
		Icon: FaRegStar,
	},

	{
		path: "/order",
		name: "Order",
		sub: {
			path: "/order/:id",
			name: "Order",
		},
		Icon: BsCartDash,
	},
];
