import React, {
	useState,
	useReducer,
	createContext,
	useMemo,
	useCallback,
} from "react";
import { AddToCartReducer } from "./AddToCartReducer";
// import { AddToCartContext } from "./context";

interface STATE_PROPS {
	products: any[];
	addToCart: (product: string) => void;
}

const INITIAL_STATE = {
	products: [],
	addToCart: () => {},
} as STATE_PROPS;

export const AddToCart = createContext(INITIAL_STATE);

export const AddToCartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [products, dispatch] = useReducer(AddToCartReducer, { products: [] });
	const addToCart = (product: string) => {
		dispatch({ type: "ADD", payload: product });
	};
	const value = useMemo(() => ({ products, addToCart }), [products, addToCart]);
	return <AddToCart.Provider value={value}>{children}</AddToCart.Provider>;
};
