export interface Data {
	slug: string;
	name: string;
	format: string;
	description: string;
	image: string;
	price: {
		[key: string]: string;
	};
	monthlyPrice: {
		[key: string]: string;
	};
	percentage_by: number;
	isRecyclable: boolean;
	hasPresent: boolean;
	hasDiscount: boolean;
	isIphone: boolean;
}

export const data: Array<Data> = [
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "xiaomi-phone",
		name: "Смартфон Xiaomi Redmi A52 128 Gb черный",
		format: "Xiaomi",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/xiaomi.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: false,
		isIphone: false,
	},
	{
		slug: "samsung-phone",
		name: "Смартфон Samsung Galaxy A52 128 Gb черный",
		format: "Samsung",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/phone3.jpeg",
		isRecyclable: true,
		hasDiscount: true,
		hasPresent: false,
		isIphone: false,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "xiaomi-phone",
		name: "Смартфон Xiaomi Redmi A52 128 Gb черный",
		format: "Xiaomi",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/xiaomi.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: false,
		isIphone: false,
	},
	{
		slug: "samsung-phone",
		name: "Смартфон Samsung Galaxy A52 128 Gb черный",
		format: "Samsung",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/phone3.jpeg",
		isRecyclable: true,
		hasDiscount: true,
		hasPresent: false,
		isIphone: false,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "xiaomi-phone",
		name: "Смартфон Xiaomi Redmi A52 128 Gb черный",
		format: "Xiaomi",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/xiaomi.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: false,
		isIphone: false,
	},
	{
		slug: "samsung-phone",
		name: "Смартфон Samsung Galaxy A52 128 Gb черный",
		format: "Samsung",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/phone3.jpeg",
		isRecyclable: true,
		hasDiscount: true,
		hasPresent: false,
		isIphone: false,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "xiaomi-phone",
		name: "Смартфон Xiaomi Redmi A52 128 Gb черный",
		format: "Xiaomi",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/xiaomi.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: false,
		isIphone: false,
	},
	{
		slug: "samsung-phone",
		name: "Смартфон Samsung Galaxy A52 128 Gb черный",
		format: "Samsung",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/phone3.jpeg",
		isRecyclable: true,
		hasDiscount: true,
		hasPresent: false,
		isIphone: false,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
	{
		slug: "xiaomi-phone",
		name: "Смартфон Xiaomi Redmi A52 128 Gb черный",
		format: "Xiaomi",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/xiaomi.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: false,
		isIphone: false,
	},
	{
		slug: "samsung-phone",
		name: "Смартфон Samsung Galaxy A52 128 Gb черный",
		format: "Samsung",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 500 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/phone3.jpeg",
		isRecyclable: true,
		hasDiscount: true,
		hasPresent: false,
		isIphone: false,
	},
	{
		slug: "apple-phone",
		name: "Смартфон Apple iPhone 11 128 Gb Slim Box черный",
		format: "Apple",
		description: `
        Тип: моноблок (классический)
        Стандарт: 2G, 3G, 4G (LTE), 5G
        Операционная система: iOS 14`,
		price: {
			price: "6 000 000",
			currency: "сум",
		},
		monthlyPrice: {
			price: "2 340 000",
			currency: "сум",
		},
		percentage_by: 5,
		image: "images/iphone.webp",
		isRecyclable: true,
		hasPresent: true,
		hasDiscount: true,
		isIphone: true,
	},
];
