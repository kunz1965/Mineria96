var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "Fachada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.016616321858133887,
        "pitch": -0.13940828372528102,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": -0.4541766017988351,
          "pitch": 0.17518032349770607,
          "rotation": 0,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9814215458484892,
          "pitch": -0.05354670772901926,
          "title": "Minería 96, Col. Escandón",
          "text": "Text"
        },
        {
          "yaw": 0.7491472167547788,
          "pitch": -0.600442489491727436,
          "title": "IMÁGENES 360°",
          "text": "Instrucciones:<br><div>Mantener botón izquierdo del 🖱 y mover 360°,<br><div>Click sobre los íconos:<br><div>&#9830&nbsp<mark>&nbspUP&nbsp</mark>&nbsp<mark>&nbspDW&nbsp</mark>&nbsp<mark>&nbspLT&nbsp</mark>&nbsp<mark>&nbspRT&nbsp</mark>&nbsp Mover en 360,<br><div>&#9830&nbsp<mark>&nbsp+&nbsp</mark>&nbspy&nbsp<mark>&nbsp-&nbsp</mark>&nbsp&nbsp Ajuste de zoom,<br></div>&#9830&nbsp<mark>&nbsp ⅈ &nbsp</mark>&nbsp&nbsp&nbsp Información disponible.<br><br><div>Recorrido: Click sobre la flecha en fondo blanco o sobre la lista a la izquierda</div>"
        }
      ]
    },
    {
      "id": "1-estacionamiento",
      "name": "Estacionamiento",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 3.104699709196181,
        "pitch": 0.2452527031971492,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": 3.0582797343251515,
          "pitch": 0.1779603811105126,
          "rotation": 0,
          "target": "2-acceso-escaleras"
        },
        {
          "yaw": -0.03459789782220568,
          "pitch": 0.11756724863814227,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.7402604933143433,
          "pitch": 0.14503632379521747,
          "title": "Un lugar de estacionamiento",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-acceso-escaleras",
      "name": "Acceso-Escaleras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 2.6027803656756827,
        "pitch": 0.3222252730110604,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": 2.8670625116221533,
          "pitch": 0.4508162900393007,
          "rotation": 0,
          "target": "3-vistaprincipal"
        },
        {
          "yaw": -1.283435739052731,
          "pitch": 0.7537837304264254,
          "rotation": 0,
          "target": "1-estacionamiento"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.2554268632666243,
          "pitch": -0.12021127681973987,
          "title": "Departamento&nbsp; 3er Nivel",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-vistaprincipal",
      "name": "VistaPrincipal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -0.4855658498543569,
        "pitch": 0.3485169992802035,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": 0.2477885548529528,
          "pitch": 0.5241295493378431,
          "rotation": 0,
          "target": "4-vista2"
        },
        {
          "yaw": -1.0634322062797068,
          "pitch": 0.2506164852452244,
          "rotation": 6.283185307179586,
          "target": "8-recmara1"
        },
        {
          "yaw": -1.6222156851786949,
          "pitch": 0.3597469098616983,
          "rotation": 5.497787143782138,
          "target": "9-recmara2"
        },
        {
          "yaw": -0.9255321190126171,
          "pitch": 0.4484968109843308,
          "rotation": 7.0685834705770345,
          "target": "6-bao"
        },
        {
          "yaw": -1.8243061384705417,
          "pitch": 0.6145631230302566,
          "rotation": 5.497787143782138,
          "target": "7-accesorecmaras"
        },
        {
          "yaw": 2.850526685666196,
          "pitch": 0.44042606373647075,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": 2.458209279637276,
          "pitch": 0.4605611853023195,
          "rotation": 0,
          "target": "2-acceso-escaleras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3990117982725323,
          "pitch": -0.18741893855902703,
          "title": "Departamento 67 m2",
          "text": "2 Recámaras<br>Cocina<br>1 Baño<br>Amplia Estancia<br>Cuenta con bodega en la azotea"
        }
      ]
    },
    {
      "id": "4-vista2",
      "name": "Vista2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.7547556708124183,
        "pitch": 0.30627283404765393,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": -3.116072038682029,
          "pitch": 0.5887510578508159,
          "rotation": 0,
          "target": "3-vistaprincipal"
        },
        {
          "yaw": 3.076079204897325,
          "pitch": 0.2646052515200523,
          "rotation": 0,
          "target": "5-cocina"
        },
        {
          "yaw": 2.8876619875143614,
          "pitch": 0.3116304994711072,
          "rotation": 5.497787143782138,
          "target": "2-acceso-escaleras"
        },
        {
          "yaw": -2.65830041978489,
          "pitch": 0.3398906956538106,
          "rotation": 0,
          "target": "7-accesorecmaras"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0279108540938946,
          "pitch": -0.2248622002546803,
          "title": "Closet Blancos/Despensa",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 0.42463933637453266,
        "pitch": 0.17554865366063055,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": -3.049018271888368,
          "pitch": 0.4281931157210579,
          "rotation": 0,
          "target": "3-vistaprincipal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.23880181792388555,
          "pitch": 0.15698046048760972,
          "title": "Cocina nueva remodelada",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.08225293100306,
          "pitch": 0.5917030588276759,
          "rotation": 0,
          "target": "7-accesorecmaras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-accesorecmaras",
      "name": "AccesoRecámaras",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.2296116279805744,
        "pitch": 0.3356062981892798,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": -2.013212351740325,
          "pitch": 0.5666714112510434,
          "rotation": 0,
          "target": "9-recmara2"
        },
        {
          "yaw": -0.7076575336864828,
          "pitch": 0.4491001171440132,
          "rotation": 0,
          "target": "8-recmara1"
        },
        {
          "yaw": -0.2793416382754934,
          "pitch": 0.748273898841882,
          "rotation": 7.0685834705770345,
          "target": "6-bao"
        },
        {
          "yaw": 2.4504625925345245,
          "pitch": 0.3192763292930927,
          "rotation": 0.7853981633974483,
          "target": "5-cocina"
        },
        {
          "yaw": 1.859280828977644,
          "pitch": 0.5535122522557785,
          "rotation": 0,
          "target": "3-vistaprincipal"
        },
        {
          "yaw": 2.218873806882473,
          "pitch": 0.332566355597649,
          "rotation": 0.7853981633974483,
          "target": "2-acceso-escaleras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-recmara1",
      "name": "Recámara1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.5103979420500764,
        "pitch": 0.24267109579510304,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": -2.5676280465402037,
          "pitch": 0.5480196531664046,
          "rotation": 0,
          "target": "7-accesorecmaras"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-recmara2",
      "name": "Recámara2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": -1.4160991205554687,
        "pitch": 0.23740025374461382,
        "fov": 1.342435849079314
      },
      "linkHotspots": [
        {
          "yaw": 2.543258636129183,
          "pitch": 0.49683607832564647,
          "rotation": 0,
          "target": "7-accesorecmaras"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Minería96",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
