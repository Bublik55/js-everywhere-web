import styled from 'styled-components';

const ButtonAsLink = styled.button`
	background: none;
	color: #0077cc;
	border: none;
	padding: 0;
	font: inherit;
	text-decorator: underline;
	cursor: pointer;

	:hover,
	:active {
		aolor: #00499;
	}
`

export default ButtonAsLink;