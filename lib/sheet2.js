var opt2 = {
  mode: "vega",
  actions: false
};

vega.embed('#sheet2Vis', configSpec, opt2, function (error, result, opt2) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, opt2);
});