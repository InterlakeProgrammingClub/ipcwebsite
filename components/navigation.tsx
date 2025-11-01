"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../public/logo.png";

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ href: "/leadership", label: "Leadership" },
		{ href: "/projects", label: "Projects" },
		{ href: "/apcsa", label: "APCSA" },
		{ href: "/usaco", label: "USACO" },
		{ href: "/about", label: "About" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-shark-900/95 backdrop-blur-sm border-b border-shark-700">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="flex items-center gap-2">
						<div className="w-8 h-8 flex items-center justify-center font-mono font-bold text-shark-900">
							<Image src={logo} alt="Club Logo" />
						</div>
						<span className="font-bold text-lg text-alto-50">
							Interlake Programming Club
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-storm-dust-300 hover:text-sunglo-500 transition-colors text-sm font-medium"
							>
								{link.label}
							</Link>
						))}
					</div>

					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-alto-50 p-2"
						aria-label="Toggle menu"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{isOpen ? (
								<path d="M6 18L18 6M6 6l12 12" />
							) : (
								<path d="M4 6h16M4 12h16M4 18h16" />
							)}
						</svg>
					</button>
				</div>

				{isOpen && (
					<div className="md:hidden py-4 border-t border-shark-700">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block py-2 text-storm-dust-300 hover:text-sunglo-500 transition-colors"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
}
