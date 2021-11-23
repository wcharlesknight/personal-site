const path = require("path");
const { addAfterLoader, removeLoaders, loaderByName, getLoaders, throwUnexpectedConfigError } = require("@craco/craco");

const throwError = (message) =>
    throwUnexpectedConfigError({
        packageName: "craco",
        githubRepo: "gsoft-inc/craco",
        message,
        githubIssueQuery: "webpack",
    });

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
        // other webpack configuration
        devtool: "source-map",
    },
};
