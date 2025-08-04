module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
        fontSize: {
            // [font-size, { lineHeight, letterSpacing, fontWeight }]
            display: ['80px', { lineHeight: '1', fontWeight: '700' }],
            h1: ['64px', { lineHeight: '1', fontWeight: '700' }],
            h2: ['56px', { lineHeight: '1', fontWeight: '700' }],
            h3: ['48px', { lineHeight: '1', fontWeight: '700' }],
            h4: ['40px', { lineHeight: '1', fontWeight: '700' }],
            h5: ['32px', { lineHeight: '1', fontWeight: '700' }],
            h6: ['24px', { lineHeight: '1', fontWeight: '700' }],
            '24b': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
            24: ['24px', { lineHeight: '1.4', fontWeight: '400' }],
            '18b': ['18px', { lineHeight: '1.4', fontWeight: '700' }],
            18: ['18px', { lineHeight: '1.4', fontWeight: '400' }],
            '16b': ['16px', { lineHeight: '1.4', fontWeight: '700' }],
            16: ['16px', { lineHeight: '1.4', fontWeight: '400' }],
            '14b': ['14px', { lineHeight: '1.4', fontWeight: '700' }],
            14: ['14px', { lineHeight: '1.4', fontWeight: '400' }],
            '12b': ['12px', { lineHeight: '1.4', fontWeight: '700' }],
            12: ['12px', { lineHeight: '1.4', fontWeight: '400' }],
        },
    },
    plugins: [],
};
