var vg_1 = "W10HW_Bar.vega";
var vg_2 = "W10HW_Map.vega";
var vg_3 = "A2_Scatter2.vega";
var vg_4 = "A2_Bubble.vega";

vegaEmbed("#barchart", vg_1).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

vegaEmbed("#chmap", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   
   }).catch(console.error);

vegaEmbed("#scatterplot", vg_3).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   
   }).catch(console.error);


vegaEmbed("#bubbleplot", vg_4).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   
   }).catch(console.error);
   