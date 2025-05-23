import { useState } from "react";
import "./App.css";
import { useDynamicPluginHeight } from "./code/useDynamicPluginHeight";

export function App() {
	const [count, setCount] = useState(2);

	useDynamicPluginHeight({
		position: "top right",
		width: 240,
		height: 400,
		minHeight: 300,
		maxHeight: 500,
	});

	return (
		<main>
			<p>
				Welcome! Check out the{" "}
				<a href="https://framer.com/developers/plugins/introduction" target="_blank">
					Docs
				</a>{" "}
				to start.
			</p>
			<div className="item-stack">
				{Array.from({ length: count }).map((_, index) => (
					<div key={index} className="item">
						Item {index + 1}
					</div>
				))}
			</div>
			<div className="button-row">
				<button className="" onClick={() => setCount(Math.max(count - 1, 0))}>
					Remove
				</button>
				<button
					className="framer-button-primary"
					onClick={() => setCount(Math.min(count + 1, 100))}
				>
					Add
				</button>
			</div>
		</main>
	);
}
