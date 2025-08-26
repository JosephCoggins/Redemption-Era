import postcssPresetEnv from "postcss-preset-env";

export default {
    plugins: [
        postcssPresetEnv({
            stage: 3,
            autoprefixer: {
                grid: true,
                remove: true
            },
            features: {}
        })
    ]
};