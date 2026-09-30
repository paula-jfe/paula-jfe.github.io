import React from 'react';
import { Link, useLocation } from 'react-router';

interface SectionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    sectionId: string;
}

/** Links to a section on the home page: a plain hash link on "/", a router link elsewhere. */
const SectionLink: React.FC<SectionLinkProps> = ({ sectionId, children, ...rest }) => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <a href={`#${sectionId}`} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <Link to={{ pathname: '/', hash: `#${sectionId}` }} {...rest}>
            {children}
        </Link>
    );
};

export default SectionLink;
