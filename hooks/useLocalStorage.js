import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue = "") => {
	const [state, setState] = useState(
		() => window.localStorage.getItem(key) || defaultValue
	);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.localStorage.setItem(key, state);
		}
	}, [key, state]);

	return [state, setState];
};
