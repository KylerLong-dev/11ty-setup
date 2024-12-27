module.exports = function(eleventyConfig) {
    // Passthrough copy for static assets
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/javascript");
    
    return {
        dir: {
            input: "src",       // Source directory
            output: "public"    // Output directory
        },
    };
};