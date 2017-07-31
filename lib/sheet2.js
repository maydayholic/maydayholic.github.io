var opt2 = {
  mode: "vega",
  actions: false
};

var v1Spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": { "url": "../data/seattle-weather.csv" },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "date",
          "type": "temporal",
          "timeUnit": "month"
        },
        "y": {
          "aggregate": "mean",
          "field": "precipitation",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "rule",
      "encoding": {
        "y": {
          "aggregate": "mean",
          "field": "precipitation",
          "type": "quantitative"
        },
        "color": { "value": "red" },
        "size": { "value": 3 }
      }
    }
  ]
}

var vSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
  "data": { "url": "../data/Sheet_2_data.csv" },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "field": "country",
          "type": "ordinal",
          "sort": { "op": "mean", "field": "Healthy_life_expectancy_at_birth", "order": "descending" }
        },
        "y": {
          "aggregate": "mean",
          "field": "Healthy_life_expectancy_at_birth",
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
          "sort": { "op": "mean", "field": "Healthy_life_expectancy_at_birth", "order": "descending" }
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


var configSpec = {}

vega.embed('#sheet2Vis', vSpec, opt2, function (error, result, opt2) {
  // result.view is the Vega View
  vegaTooltip.vega(result.view, opt2);
});