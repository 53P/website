import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const PageContent = ({ children }: { children: ReactElement | ReactElement[] }): JSX.Element => {
	return (
		<Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{
				type: 'tween',
				ease: 'anticipate',
				duration: 0.4,
			}}
			style={{
				width: '300px',
				minWidth: 0,
				paddingBottom: '2rem',
			}}
		>
			{children}
		</Container>
	);
};

const Container = styled(motion.div)`
	margin-top: 50px;
	margin-left: 300px;
`;

export default PageContent;