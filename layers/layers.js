var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_junin_limite_provincia_1 = new ol.format.GeoJSON();
var features_junin_limite_provincia_1 = format_junin_limite_provincia_1.readFeatures(json_junin_limite_provincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junin_limite_provincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junin_limite_provincia_1.addFeatures(features_junin_limite_provincia_1);
var lyr_junin_limite_provincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_junin_limite_provincia_1, 
                style: style_junin_limite_provincia_1,
                interactive: true,
    title: 'junin_limite_provincia<br />\
    <img src="styles/legend/junin_limite_provincia_1_0.png" /> CHUPACA<br />\
    <img src="styles/legend/junin_limite_provincia_1_1.png" /> CONCEPCION<br />\
    <img src="styles/legend/junin_limite_provincia_1_2.png" /> HUANCAYO<br />\
    <img src="styles/legend/junin_limite_provincia_1_3.png" /> JAUJA<br />\
    <img src="styles/legend/junin_limite_provincia_1_4.png" /> JUNIN<br />\
    <img src="styles/legend/junin_limite_provincia_1_5.png" /> LA MERCED<br />\
    <img src="styles/legend/junin_limite_provincia_1_6.png" /> LA OROYA<br />\
    <img src="styles/legend/junin_limite_provincia_1_7.png" /> SATIPO<br />\
    <img src="styles/legend/junin_limite_provincia_1_8.png" /> TARMA<br />\
    <img src="styles/legend/junin_limite_provincia_1_9.png" /> <br />'
        });
var format_junin_comunidades_campesinas_2 = new ol.format.GeoJSON();
var features_junin_comunidades_campesinas_2 = format_junin_comunidades_campesinas_2.readFeatures(json_junin_comunidades_campesinas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_junin_comunidades_campesinas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_junin_comunidades_campesinas_2.addFeatures(features_junin_comunidades_campesinas_2);
var lyr_junin_comunidades_campesinas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_junin_comunidades_campesinas_2, 
                style: style_junin_comunidades_campesinas_2,
                interactive: true,
    title: 'junin_comunidades_campesinas<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_0.png" /> ACO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_1.png" /> ACOLLA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_2.png" /> ALAYO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_3.png" /> ANTACALA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_4.png" /> APATA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_5.png" /> ARAMACHAY<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_6.png" /> AZA CRUZ<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_7.png" /> AZAPAMPA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_8.png" /> CAJAS CHICO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_9.png" /> CALLAS HUAYANAY<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_10.png" /> CALLAS PALCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_11.png" /> CANCHAYLLO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_12.png" /> CAÑA - ANDAMAYO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_13.png" /> CHACAPAMPA Y PARCAHUARA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_14.png" /> CHALHUAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_15.png" /> CHANCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_16.png" /> CHAQUICOCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_17.png" /> CHICCHE<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_18.png" /> CHOCON<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_19.png" /> CHONGOS BAJO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_20.png" /> CHUAMBA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_21.png" /> CHUCOS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_22.png" /> CHUNAN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_23.png" /> CHUPA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_24.png" /> CHUPAN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_25.png" /> CONCHO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_26.png" /> CONOPA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_27.png" /> DE LA LIBERTAD<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_28.png" /> DOS DE MAYO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_29.png" /> EL TAMBO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_30.png" /> HUALA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_31.png" /> HUALLHUAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_32.png" /> HUAMANMARCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_33.png" /> HUANCANI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_34.png" /> HUANCAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_35.png" /> HUANCAY SACSAMARCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_36.png" /> HUANCHAR<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_37.png" /> HUANCOY SACSAMARCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_38.png" /> HUANUCO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_39.png" /> HUARIPAMPA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_40.png" /> HUASICANCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_41.png" /> HUATA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_42.png" /> HUAYAO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_43.png" /> HUAYHUAY<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_44.png" /> HUAYLAHUICHAN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_45.png" /> HUAYUCACHI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_46.png" /> HUERTAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_47.png" /> JAJAPAQUI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_48.png" /> JATUNSUCLLA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_49.png" /> JURPAC<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_50.png" /> LA LIBERTAD<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_51.png" /> LA PUNTA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_52.png" /> LLACUARI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_53.png" /> LLACUARIPAMPA - SECTOR ESTE<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_54.png" /> LLACUARIPAMPA - SECTOR OESTE<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_55.png" /> LLACUAS HUACHAC<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_56.png" /> MARAINIOC<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_57.png" /> MASMA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_58.png" /> MATAGRANDE<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_59.png" /> MATAHUASI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_60.png" /> MILUCHACA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_61.png" /> MIRAFLORES<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_62.png" /> MUQUI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_63.png" /> MUQUILLAQUI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_64.png" /> MUQUIYAUYO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_65.png" /> NINATAMBO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_66.png" /> NUEVA ESPERANZA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_67.png" /> OCHONGA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_68.png" /> OCOPILLA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_69.png" /> PACA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_70.png" /> PACAMARCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_71.png" /> PACCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_72.png" /> PACHACHACA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_73.png" /> PACHASCUCHO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_74.png" /> PANCAN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_75.png" /> PARCO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_76.png" /> PATALA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_77.png" /> PIAN SANYACANCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_78.png" /> PICHUS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_79.png" /> PILCOMAYO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_80.png" /> POCUTANJA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_81.png" /> POMACOCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_82.png" /> PROPIEDAD DE LA C.C. DE MITO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_83.png" /> PROPIETARIO C.C. OCOPILLA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_84.png" /> PUCARA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_85.png" /> PUNCO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_86.png" /> PUSACPAMPA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_87.png" /> QUICHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_88.png" /> QUICHUAY<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_89.png" /> RETAMA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_90.png" /> RIO CANIPACO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_91.png" /> SACAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_92.png" /> SACSA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_93.png" /> SAÐO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_94.png" /> SAN AGUSTIN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_95.png" /> SAN ANTONIO DE<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_96.png" /> SAN ANTONIO DE ATAQUERO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_97.png" /> SAN FRANCISCO DE CHICHAUSIRI LOTE 1<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_98.png" /> SAN JERONIMO DE TUNAN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_99.png" /> SAN JOSE DE HUAYPACHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_100.png" /> SAN JOSE VILLANO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_101.png" /> SAN JUAN DE LEON<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_102.png" /> SAN LORENZO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_103.png" /> SAN PEDRO DE CAJAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_104.png" /> SANTA ROSA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_105.png" /> SANTA ROSA DE CASCA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_106.png" /> SANTA ROSA DE SACO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_107.png" /> SAPALLANGA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_108.png" /> SICAYA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_109.png" /> SUITUCANCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_110.png" /> TALHUIS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_111.png" /> TAMBO PACCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_112.png" /> TAPO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_113.png" /> TINGO PACCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_114.png" /> TODOS LOS SANTOS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_115.png" /> TUPIN<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_116.png" /> UCHUBAMBA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_117.png" /> UÐAS<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_118.png" /> ULLUCSA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_119.png" /> VICSO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_120.png" /> VILCACOTO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_121.png" /> VISTA MANTARO<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_122.png" /> YANIC<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_123.png" /> YAULI<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_124.png" /> YAURINGA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_125.png" /> YURACANCHA<br />\
    <img src="styles/legend/junin_comunidades_campesinas_2_126.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_junin_limite_provincia_1.setVisible(true);lyr_junin_comunidades_campesinas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_junin_limite_provincia_1,lyr_junin_comunidades_campesinas_2];
lyr_junin_limite_provincia_1.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_junin_comunidades_campesinas_2.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'nom_dpto': 'nom_dpto', 'nom_prov': 'nom_prov', 'nom_dist': 'nom_dist', 'id_dist': 'id_dist', 'nom_comuni': 'nom_comuni', 'estado': 'estado', 'datum_orig': 'datum_orig', 'proyeccion': 'proyeccion', 'fuente': 'fuente', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_junin_limite_provincia_1.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_junin_comunidades_campesinas_2.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'nom_dpto': 'TextEdit', 'nom_prov': 'TextEdit', 'nom_dist': 'TextEdit', 'id_dist': 'TextEdit', 'nom_comuni': 'TextEdit', 'estado': 'TextEdit', 'datum_orig': 'TextEdit', 'proyeccion': 'TextEdit', 'fuente': 'TextEdit', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_junin_limite_provincia_1.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_junin_comunidades_campesinas_2.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'nom_dpto': 'no label', 'nom_prov': 'no label', 'nom_dist': 'no label', 'id_dist': 'no label', 'nom_comuni': 'no label', 'estado': 'no label', 'datum_orig': 'no label', 'proyeccion': 'no label', 'fuente': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', });
lyr_junin_comunidades_campesinas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});