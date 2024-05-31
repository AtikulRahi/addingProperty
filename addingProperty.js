var geometry = /* color: #d63000 */ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([91.92005217034834, 22.354505531012837]),
        {
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([91.92063152749556, 22.354624601514374]),
        {
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([91.92050278146284, 22.35349342764118]),
        {
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([91.92127525765913, 22.353374356172917]),
        {
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([91.91942989785689, 22.352957605232685]),
        {
          "system:index": "4"
        })]);

 Map.centerObject(geometry)
var addedProp = geometry.map(function(ft){
var geo = ft.geometry()
var addedObj = ee.Feature(geo,
                        {"Class": "Waterbody"})
    return addedObj;
        })
print(addedProp)
        