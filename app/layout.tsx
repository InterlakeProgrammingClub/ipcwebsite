/* eslint-disable @typescript-eslint/no-unused-vars */
import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navigation } from "@/components";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Interlake Programming Club | Code, Compete, Create",
	description:
		"Join our community of passionate programmers. Compete in USACO, master APCSA, and build amazing projects together.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-sans antialiased`}>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
