import React from 'react';
import { Link } from 'react-router';

import Icon, { IconName } from './Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'onDark';

const base =
    'inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 font-sans text-body font-bold transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out cursor-pointer select-none disabled:cursor-not-allowed disabled:shadow-none aria-disabled:cursor-not-allowed';

const variants: Record<ButtonVariant, string> = {
    primary:
        'bg-brand text-white shadow-button hover:bg-brand-hover hover:shadow-button-hover active:bg-brand-pressed active:shadow-none disabled:bg-brand-subtle focus-ring',
    secondary:
        'border border-brand/20 bg-white text-ink hover:border-brand/40 hover:bg-surface-soft hover:text-brand active:border-brand/50 active:bg-line active:text-brand disabled:border-line disabled:text-placeholder focus-ring',
    onDark: 'bg-white text-ink hover:bg-white/90 hover:text-brand active:bg-white/75 disabled:bg-white/40 disabled:text-muted focus-ring-light',
};

interface CommonProps {
    variant?: ButtonVariant;
    fullWidth?: boolean;
    icon?: IconName;
    className?: string;
    children: React.ReactNode;
}

type AsButton = CommonProps &
    React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined; to?: undefined };
type AsAnchor = CommonProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; to?: undefined };
type AsRouterLink = CommonProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & { to: string; href?: undefined };

export type ButtonProps = AsButton | AsAnchor | AsRouterLink;

export const buttonClasses = (variant: ButtonVariant = 'primary', fullWidth = false, extra = '') =>
    [base, variants[variant], fullWidth ? 'w-full' : '', extra].filter(Boolean).join(' ');

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = 'primary', fullWidth = false, icon, className = '', children } = props;
    const classes = buttonClasses(variant, fullWidth, className);
    const content = (
        <>
            {children}
            {icon && <Icon name={icon} size={18} />}
        </>
    );

    if (props.to !== undefined) {
        const { variant: _v, fullWidth: _f, icon: _i, className: _c, children: _ch, to, ...rest } =
            props;
        return (
            <Link to={to} className={classes} {...rest}>
                {content}
            </Link>
        );
    }

    if (props.href !== undefined) {
        const { variant: _v, fullWidth: _f, icon: _i, className: _c, children: _ch, ...rest } =
            props;
        return (
            <a className={classes} {...rest}>
                {content}
            </a>
        );
    }

    const {
        variant: _v,
        fullWidth: _f,
        icon: _i,
        className: _c,
        children: _ch,
        type = 'button',
        ...rest
    } = props as AsButton;
    return (
        <button type={type} className={classes} {...rest}>
            {content}
        </button>
    );
};

export default Button;
