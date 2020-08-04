import styled from 'styled-components';
import { TiHeartFullOutline } from 'react-icons/ti';

export const FooterBase = styled.footer`
	background: var(--black);
	border-top: 2px solid var(--primary);
	padding-left: 16px;
	padding-right: 16px;
	padding-top: 32px;
	padding-bottom: 32px;
	color: var(--white);
	text-align: center;
	@media (max-width: 800px) {
		margin-bottom: 50px;
	}
`;

export const Text = styled.p`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
`;

export const Icon = styled(TiHeartFullOutline)`
	height: 30px;
	width: 30px;
	color: red;	
`;