module.exports = function (api) {
  api.cache(false);
  return {
    presets: [require("@babel/preset-env")],
  };
};
