var opt2 = {
  mode: "vega",
  actions: false
};

var vSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": { "url": "/v1/data/Sheet_3_data.csv" },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "country",
          "type": "ordinal",
          "sort": { "op": "mean", "field": "household", "order": "descending" }
        },
        "y": {
          "aggregate": "mean",
          "field": "household",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "country",
          "type": "ordinal",
          "sort": { "op": "mean", "field": "household", "order": "descending" }
        },
        "y": {
          "aggregate": "mean",
          "field": "Happiness_score",
          "type": "quantitative",
          "axes": {
            "grid": "false",
          }
        },
        "color": { "value": "firebrick" }
      }
    }
  ],
  "resolve": {
    "y": { "scale": "independent" }
  }
}

vega.embed('#sheet3Vis', vSpec, opt2, function (error, result, opt2) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, opt2);
});