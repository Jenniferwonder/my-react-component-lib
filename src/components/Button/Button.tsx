// src/Button.js
import React from "react";
import "./Button.css";

interface ButtonProps {
	label: string;
}

function Button(props: ButtonProps) {
	return <button className="lib-button">{props.label}</button>;
}

export default Button;
