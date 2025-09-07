import type { Favicon } from "@/types/config.ts";

export const defaultFavicons: Favicon[] = [
	{
		src: "/favicon/favicon-light-32.png",
		theme: "light",
		sizes: "32x32",
	},
	{
		src: "/favicon/favicon-light-128.png",
		theme: "light",
		sizes: "120x120",
	},
	{
		src: "/favicon/favicon-light-180.png",
		theme: "light",
		sizes: "180x180",
	},
	{
		src: "/favicon/favicon-dark-32.png",
		theme: "dark",
		sizes: "32x32",
	},
	{
		src: "/favicon/favicon-dark-128.png",
		theme: "dark",
		sizes: "120x120",
	},
	{
		src: "/favicon/favicon-dark-180.png",
		theme: "dark",
		sizes: "180x180",
	},
];
