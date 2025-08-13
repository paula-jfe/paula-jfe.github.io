import React from 'react';
import css from '../assets/icons/css3.svg';
import dotnet from '../assets/icons/dotnetcore.svg';
import elastic from '../assets/icons/elastic.svg';
import figma from '../assets/icons/figma.svg';
import git from '../assets/icons/git.svg';
import html from '../assets/icons/html5.svg';
import javascript from '../assets/icons/javascript.svg';
import jest from '../assets/icons/jest.svg';
import node from '../assets/icons/node.svg';
import npm from '../assets/icons/npm.svg';
import python from '../assets/icons/python.svg';
import reactjs from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import sql from '../assets/icons/sql.svg';
import typescript from '../assets/icons/typescript.svg';

const listOfIcons = [
    { component: figma, name: 'figma' },
    { component: sql, name: 'sql' },
    { component: node, name: 'node' },
    { component: javascript, name: 'javascript' },
    { component: typescript, name: 'typescript' },
    { component: html, name: 'html' },
    { component: css, name: 'css' },
    { component: reactjs, name: 'reactjs' },
    { component: redux, name: 'redux' },
    { component: git, name: 'git' },
    { component: elastic, name: 'elastic' },
    { component: dotnet, name: 'dotnet' },
    { component: python, name: 'python' },
    { component: npm, name: 'npm' },
    { component: jest, name: 'jest' },
];

const AnimatedStacks: React.FC = () => {
    return (
        <div id="about-animated-stacks" className="marquee-container gap-12 h-[166px]">
            <div className="marquee-track">
                <div className="marquee-content gap-12 pt-12 pb-12">
                    {listOfIcons.concat(listOfIcons).map((icon, index) => {
                        return (
                            <img
                                key={index}
                                data-testid={`icon-${icon.name}`}
                                src={icon.component}
                                alt={`carousel-icon-${icon.name}`}
                                style={{ height: '70px' }}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AnimatedStacks;
