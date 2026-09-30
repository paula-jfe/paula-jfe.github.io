/**
 * One interaction pattern for every text link (header, mobile menu, footer, hero, contact, case study):
 * rest = muted text, hover = brand colour + 2px underline, current page section = the same underline kept on,
 * keyboard focus = the shared focus ring.
 */
export const textLinkClasses = ({ active = false, onDark = false } = {}) =>
    [
        'rounded-xs decoration-2 underline-offset-[6px] transition-colors duration-200',
        onDark
            ? 'text-white hover:text-accent-yellow hover:underline focus-ring-light'
            : `focus-ring ${active ? 'text-brand underline' : 'text-muted hover:text-brand hover:underline'}`,
    ].join(' ');
