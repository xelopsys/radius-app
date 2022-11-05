interface AddToCartAction {
	type: "ADD";
	payload: string;
}
export const AddToCartReducer = (state: any, action: AddToCartAction) => {
	switch (action.type) {
		case "ADD":
			return state.products
				? [...state?.products, action.payload]
				: [action.payload];

		default:
			return state;
	}
};
