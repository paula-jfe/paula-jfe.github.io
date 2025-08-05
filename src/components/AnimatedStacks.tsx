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

const AnimatedStacks = () => {
    return (
        <div className="marquee-container gap-12 h-[166px]">
            <div className="marquee-track flex">
                <div className="marquee-content flex gap-12 pt-12 pb-12">
                    <img key="1" src={figma} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="2" src={sql} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="3" src={node} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="4" src={javascript} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="5" src={typescript} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="6" src={html} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="7" src={css} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="8" src={reactjs} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="9" src={redux} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="10" src={git} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="11" src={elastic} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="12" src={dotnet} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="13" src={python} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="14" src={npm} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="15" src={jest} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="16" src={figma} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="17" src={sql} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="18" src={node} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="19" src={javascript} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="20" src={typescript} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="21" src={html} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="22" src={css} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="23" src={reactjs} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="24" src={redux} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="25" src={git} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="26" src={elastic} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="27" src={dotnet} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="28" src={python} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="29" src={npm} alt="J smile logo" style={{ height: '70px' }} />
                    <img key="30" src={jest} alt="J smile logo" style={{ height: '70px' }} />
                </div>
            </div>
        </div>
    );
};

export default AnimatedStacks;

{
    /* <div className="marquee-container relative overflow-hidden whitespace-nowrap w-full flex flex-row gap-12 items-center justify-center h-[160px]">
    <div className="marquee inline-flex w-max animate-marquee animate-scroll gap-12">
        <img key="1" src={figma} alt="J smile logo" style={{ height: '70px' }} />
        <img key="2" src={sql} alt="J smile logo" style={{ height: '70px' }} />
        <img key="3" src={node} alt="J smile logo" style={{ height: '70px' }} />
        <img key="4" src={javascript} alt="J smile logo" style={{ height: '70px' }} />
        <img key="5" src={typescript} alt="J smile logo" style={{ height: '70px' }} />
        <img key="6" src={html} alt="J smile logo" style={{ height: '70px' }} />
        <img key="7" src={css} alt="J smile logo" style={{ height: '70px' }} />
        <img key="8" src={reactjs} alt="J smile logo" style={{ height: '70px' }} />
        <img key="9" src={redux} alt="J smile logo" style={{ height: '70px' }} />
        <img key="10" src={git} alt="J smile logo" style={{ height: '70px' }} />
        <img key="11" src={elastic} alt="J smile logo" style={{ height: '70px' }} />
        <img key="12" src={dotnet} alt="J smile logo" style={{ height: '70px' }} />
        <img key="13" src={python} alt="J smile logo" style={{ height: '70px' }} />
        <img key="15" src={jest} alt="J smile logo" style={{ height: '70px' }} />
        <img key="14" src={npm} alt="J smile logo" style={{ height: '70px' }} />
        <img key="16" src={figma} alt="J smile logo" style={{ height: '70px' }} />
        <img key="17" src={sql} alt="J smile logo" style={{ height: '70px' }} />
        <img key="18" src={node} alt="J smile logo" style={{ height: '70px' }} />
        <img key="19" src={javascript} alt="J smile logo" style={{ height: '70px' }} />
        <img key="20" src={typescript} alt="J smile logo" style={{ height: '70px' }} />
        <img key="21" src={html} alt="J smile logo" style={{ height: '70px' }} />
        <img key="22" src={css} alt="J smile logo" style={{ height: '70px' }} />
        <img key="23" src={reactjs} alt="J smile logo" style={{ height: '70px' }} />
        <img key="24" src={redux} alt="J smile logo" style={{ height: '70px' }} />
        <img key="25" src={git} alt="J smile logo" style={{ height: '70px' }} />
        <img key="26" src={elastic} alt="J smile logo" style={{ height: '70px' }} />
        <img key="27" src={dotnet} alt="J smile logo" style={{ height: '70px' }} />
        <img key="28" src={python} alt="J smile logo" style={{ height: '70px' }} />
        <img key="29" src={npm} alt="J smile logo" style={{ height: '70px' }} />
        <img key="30" src={jest} alt="J smile logo" style={{ height: '70px' }} />
    </div>
</div>; */
}
