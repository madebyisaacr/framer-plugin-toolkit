import { framer } from "framer-plugin";
import { useEffect } from "react";

export function useDynamicPluginHeight({ maxHeight }: { maxHeight?: number } = {}) {
	useEffect(() => {
		const root = document.getElementById("root");
		if (!root) return;

		const contentElement = root.firstElementChild;
		if (!contentElement) return;

		const updateHeight = () => {
			const height = contentElement.scrollHeight;
			framer.showUI({ height: Math.min(height, maxHeight ?? Infinity) });
		};

		// Initial height update
		updateHeight();

		// Create ResizeObserver to watch for height changes
		const resizeObserver = new ResizeObserver(() => {
			updateHeight();
		});

		// Start observing the content element
		resizeObserver.observe(contentElement);

		// Cleanup
		return () => {
			resizeObserver.disconnect();
		};
	}, []);
}
