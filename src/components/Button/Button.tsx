// src/Button.js
import React from "react";

interface ButtonProps {
	label: string;
}

function Button(props: ButtonProps) {
	return <button>{props.label}</button>;
}

export default Button;
