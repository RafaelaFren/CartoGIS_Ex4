ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([267379.236074, 6618493.639714, 448405.365803, 6758636.767456]);
var wms_layers = [];


        var lyr_CartoDB__0 = new ol.layer.Tile({
            'title': 'CartoDB_',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_data_202024_1 = new ol.format.GeoJSON();
var features_data_202024_1 = format_data_202024_1.readFeatures(json_data_202024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_data_202024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_202024_1.addFeatures(features_data_202024_1);
var lyr_data_202024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_data_202024_1, 
                style: style_data_202024_1,
                popuplayertitle: 'data_2020-24',
                interactive: true,
    title: 'data_2020-24<br />\
    <img src="styles/legend/data_202024_1_0.png" /> 2020<br />\
    <img src="styles/legend/data_202024_1_1.png" /> 2021<br />\
    <img src="styles/legend/data_202024_1_2.png" /> 2022<br />\
    <img src="styles/legend/data_202024_1_3.png" /> 2023<br />\
    <img src="styles/legend/data_202024_1_4.png" /> 2024<br />' });

lyr_CartoDB__0.setVisible(true);lyr_data_202024_1.setVisible(true);
var layersList = [lyr_CartoDB__0,lyr_data_202024_1];
lyr_data_202024_1.set('fieldAliases', {'fid': 'fid', 'taxonomic_': 'taxonomic_', 'formatted_': 'formatted_', 'abundance_': 'abundance_', 'formatte_1': 'formatte_1', 'country': 'country', 'bio_provin': 'bio_provin', 'locality': 'locality', 'collection': 'collection', 'team': 'team', 'year': 'year', 'date_time': 'date_time', 'number': 'number', });
lyr_data_202024_1.set('fieldImages', {'fid': 'TextEdit', 'taxonomic_': 'TextEdit', 'formatted_': 'TextEdit', 'abundance_': 'TextEdit', 'formatte_1': 'TextEdit', 'country': 'TextEdit', 'bio_provin': 'TextEdit', 'locality': 'TextEdit', 'collection': 'TextEdit', 'team': 'TextEdit', 'year': 'TextEdit', 'date_time': 'DateTime', 'number': 'TextEdit', });
lyr_data_202024_1.set('fieldLabels', {'fid': 'no label', 'taxonomic_': 'inline label - always visible', 'formatted_': 'inline label - always visible', 'abundance_': 'no label', 'formatte_1': 'no label', 'country': 'no label', 'bio_provin': 'no label', 'locality': 'inline label - always visible', 'collection': 'inline label - always visible', 'team': 'no label', 'year': 'no label', 'date_time': 'inline label - always visible', 'number': 'no label', });
lyr_data_202024_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});