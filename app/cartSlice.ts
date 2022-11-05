import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	products: string[];
}

const initialState: CounterState = {
	products: [],
};

const cartSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<string>) => {
			[...state.products, action.payload];
		},
	},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
