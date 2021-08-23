import styled from 'styled-components';

const Button = styled.button`
	display: block;
	padding: 5% 20% 5%;
	margin: auto;
	border: none;
	border-radius: 5px;
	font-size: 10px;
	color: #fff;
	background-color: #0077cc;
	cursor: pointer;

	:hover {
		opacity: 0.8;
	}

	:active {
		background-color: #005fa3;
	}
`;


export default Button;