// Project-wide Babel config (webpack via babel-loader, Jest via babel-jest).
// It must be project-wide (not .babelrc) so Jest can compile ESM-only packages in node_modules.

// Tests only: CommonJS has no `import.meta` (used by React Router 8), so replace it with an empty object.
const importMetaToObject = ({ types: t }) => ({
    visitor: {
        MetaProperty(path) {
            if (path.node.meta.name === 'import' && path.node.property.name === 'meta') {
                path.replaceWith(t.objectExpression([]));
            }
        },
    },
});

module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
    env: {
        test: {
            plugins: [importMetaToObject],
        },
    },
};
