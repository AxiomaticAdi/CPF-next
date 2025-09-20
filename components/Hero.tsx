import "../styles/Styles.css";
import Image from "next/image";
import NavButton from "./NavButton";

export default function Hero() {
	return (
		<div className="relative flex justify-center items-center w-screen min-h-96">
			<Image
				sizes="100vw"
				src="https://res.cloudinary.com/djxfhec23/image/upload/f_auto/q_auto/c_scale,w_1024/v1713051912/CPF/veggies_vczxpb.webp"
				alt="Background of the hero section"
				className="absolute w-full h-full object-cover z-0"
				fill
				priority
			/>

			{/* Gradient overlay with absolute positioning */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

			{/* Content container to ensure it sits above the overlay and image */}
			<div className="relative z-10 text-center">
				<h1 className="text-4xl font-bold text-white drop-shadow-md mb-8">
					Farm Fresh Classes and Meals
				</h1>
				<NavButton buttonText="Book now" navigateTo="/events" />
			</div>
		</div>
	);
}
