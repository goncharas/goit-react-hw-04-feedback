import PropTypes from 'prop-types';
import { Title } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => (
    <>
        <Title>{title}</Title>
        {children}
    </>
    );

    Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    };
