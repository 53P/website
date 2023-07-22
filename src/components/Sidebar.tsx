import { motion, useSpring } from 'framer-motion';
import {
	SiGithub,
	SiTwitter,
	SiDiscord,
} from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import styled from 'styled-components';

const Sidebar = (): JSX.Element => {
	const { pathname } = useLocation();

	const paths: { [key: string]: number } = {
		'/': 82,
		'/work': 126,
		'/skills': 170,
		'/contact': 214,
	};

	const springConfig = { damping: 25, stiffness: 300 };
	const scale = useSpring(0.7, springConfig);
	const opacity = useSpring(0, springConfig);

	function onMount(): void {
		scale.set(1);
		opacity.set(1);
	}

	function onHide(): void {
		scale.set(0.7);
		opacity.set(0);
	}

	return (
		<>
			<Container>
				<Items>
					<Item>
						<Title>53P</Title>
					</Item>
					<PageIndicator
						animate={{ y: paths[pathname] ?? -53 }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
					/>
					<Item>
						<StyledLink onPage={pathname === '/'} to='/'><L/></StyledLink>
						<StyledLink onPage={pathname === '/work'} to='/work'><L/>work</StyledLink>
						<StyledLink onPage={pathname === '/skills'} to='/skills'><L/>skills</StyledLink>
						<StyledLink onPage={pathname === '/contact'} to='/contact'><L/>contact</StyledLink>
					</Item>
					<Icons>
						<Icon href="https://github.com/53P" onHover="#fff">{SiGithub({})}</Icon>
						<Icon href="https://twitter.com/" onHover="#1DA1F2">{SiTwitter({})}</Icon>
						<Tippy
							render={(attrs): JSX.Element => (
								<Box style={{ scale, opacity }} {...attrs}>
									53p
								</Box>
							)}
							animation={true}
							onMount={onMount}
							onHide={onHide}
						>
							<Icon href="https://discord.com/users/519674801049042945" onHover="#5865F2">{SiDiscord({})}</Icon>
						</Tippy>
					</Icons>
				</Items>
			</Container>
		</>
	);
};

const Container = styled.aside`
	width: 250px;
	height: 100%;
	left: 0;
	display: inline-block;
	box-sizing: border-box;
	flex-direction: row;
	position: fixed;
	border-right: 1px solid #262626;
	border-radius: 5px;

	top: 0;
	min-height: 500px;

	@media (max-width: 800px) {
		display: inline-block;
		top: 65px;
		width: 100%;
		height: calc(100% - 65px);
	}
`;

const Items = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 10px 20px;
`;

const L = styled.a`
	&::after {
		content: "/";
	}
`;

const Icon = styled.a<{ onHover: string }>`
	font-size: 20px;
	color: #454545;
	width: 25px;
    color: #ccc;

	&:hover {
		transition: 0.4s;
		color: ${({ onHover }): string => (onHover)};
	}
`;

const Icons = styled.div`
	padding: 1.5rem;
	justify-content: space-evenly;
	margin-top: auto;
	display: flex;
`;

const Item = styled.div`
	flex-direction: column;
	display: flex;
	justify-content: space-between;
`;

const Title = styled.p`
	font-weight: bold;
	font-size: 25px;
`;

const PageIndicator = styled(motion.div)`
	width: 100%;
	left: 0;
	height: 39px;
	background-color: #ccc;
	opacity: 0.3;
	pointer-events: none;
	position: absolute;
`;

const Box = styled(motion.div)`
	background-color: #000;
	color: white;
	padding: 5px 10px;
	border-radius: 4px;
`;

const StyledLink = styled(Link)<{ onPage: boolean }>`
	font-size: 20px;
	color: ${({ onPage }): string => (onPage ? '#fff' : '#8c8c8c')};
	text-decoration: none;
	padding: 10px 0px;
	display: flex;

	&:hover {
		transition: 0.4s;
		color: #fff;
	}

	&:hover ${L} {
		transition: 0.4s;
		color: #16e0e0;
	}

	${L} {
		color: ${({ onPage }): string => (onPage ? '#16e0e0' : '#8c8c8c')};
	}
`;

export default Sidebar;