app.factory('event_data', function() {
  console.log('in service!');
  var events = [{
      id: 1,
      name: "Zumba con Gaby",
      type: "Zumba",
      start: new Date('2015-08-13T10:45:00-08:00'),
      end: new Date('2015-08-13T10:55:00-08:00'),
      desc: "Solo mueve tu cuerpo y sígueme. ¡Es fácil! Ven pruébalo, te garantizo que va a tener una explosión!",
      img: 'String goes here',
      reminder: false
    }, {
      id: 2,
      name: "Oración Inicial - Tribu India Muckleshoot",
      type: "Oración",
      start: new Date('2015-08-13T10:55:00-08:00'),
      end: new Date('2015-08-13T11:00:00-08:00'),
      desc: "'String goes here'",
      img: 'String goes here',
      reminder: false
    }, {
      id: 3,
      name: "Zumba con Gaby",
      type: "Zumba",
      start: new Date('2015-08-13T11:00:00-08:00'),
      end: new Date('2015-08-13T11:15:00-08:00'),
      desc: "Solo mueve tu cuerpo y sígueme. ¡Es fácil! Ven pruébalo, te garantizo que va a tener una explosión!",
      img: 'String goes here',
      reminder: false
    }, {
      id: 4,
      name: "Paquita la del Barrio",
      type: "Ranchera",
      start: new Date('2015-08-13T11:15:00-08:00'),
      end: new Date('2015-08-13T11:20:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 5,
      name: "Janeth Apodaca",
      type: "Ranchera",
      start: new Date('2015-08-13T11:20:00-08:00'),
      end: new Date('2015-08-13T11:25:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 6,
      name: "Yeyito",
      type: "Bachata",
      start: new Date('2015-08-13T11:25:00-08:00'),
      end: new Date('2015-08-13T11:30:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 7,
      name: "Impacto Versatil",
      type: "Rap",
      start: new Date('2015-08-13T11:30:00-08:00'),
      end: new Date('2015-08-13T11:45:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 8,
      name: "Eskandalosos Tierra Caliente",
      type: "Cumbia",
      start: new Date('2015-08-13T11:45:00-08:00'),
      end: new Date('2015-08-13T12:00:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 9,
      name: "Los Chicharitos",
      type: "Payasos",
      start: new Date('2015-08-13T12:00:00-08:00'),
      end: new Date('2015-08-13T12:20:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 10,
      name: "Guera de Michoacan",
      type: "Mariachi",
      start: new Date('2015-08-13T12:20:00-08:00'),
      end: new Date('2015-08-13T12:30:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 11,
      name: "El Ingrato",
      type: "Ranchera",
      start: new Date('2015-08-13T12:30:00-08:00'),
      end: new Date('2015-08-13T12:40:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 12,
      name: "Arturo Delgado",
      type: "Bolero",
      start: new Date('2015-08-13T12:40:00-08:00'),
      end: new Date('2015-08-13T12:50:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 13,
      name: "Ernesto Torrez",
      type: "Rock/Pop",
      start: new Date('2015-08-13T12:50:00-08:00'),
      end: new Date('2015-08-13T13:10:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 14,
      name: "Leones de la Sierra",
      type: "Regional",
      start: new Date('2015-08-13T13:10:00-08:00'),
      end: new Date('2015-08-13T13:30:00-08:00'),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 15,
      name: "Tigre Vazquez",
      type: "Regional",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 16,
      name: "Zertero Musical",
      type: "Tierra Cali",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 17,
      name: "Destino Musical",
      type: "Cumbia",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 18,
      name: "Juan Ventura",
      type: "Regional",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 19,
      name: "Paquita la del Barrio",
      type: "Ranchera",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 20,
      name: "Plebilloz",
      type: "Regional",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 21,
      name: "Lobo Z Siete",
      type: "Banda",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 22,
      name: "Kina Salazar",
      type: "Ranchera",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 23,
      name: "Tropical Fusion",
      type: "Bachata",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 24,
      name: "La Guerrerense",
      type: "Mariachi",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 25,
      name: "Zafire Seattle Dance Project",
      type: "Salsa",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 26,
      name: "Grupo Avion",
      type: "Pop",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 27,
      name: "Eduardo y Vanessa",
      type: "Salsa",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 28,
      name: "Colombia Presente",
      type: "Cumbia/Salsa",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 29,
      name: "Folklore Panama Seattle",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 30,
      name: "Ometepe",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 31,
      name: "Ometepe",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 32,
      name: "Ballet Folklorico Guelaguetza",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 33,
      name: "Irma la Jalisciense",
      type: "Regional",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 34,
      name: "Orque'String goes here'a La Grande del North West",
      type: "Salsa",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 35,
      name: "Mariachi Ayutla",
      type: "Mariachi",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 36,
      name: "E'String goes here'ellitas Mexicanas",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 37,
      name: "Ballet Folklorico Angeles de Mexico",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 38,
      name: "Grupo de Harpa Hermanos Gonzalez",
      type: "Tierra Cali",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 39,
      name: "Mariachi Juvenil Voces de Mexico",
      type: "Mariachi",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 40,
      name: "Ceremonia Civica/ Himno Nacional / Grito de Independencia / Consulado Mexicano",
      type: "Ceremonia",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 41,
      name: "Bailadores de Bronce",
      type: "Folklore",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 42,
      name: "Banda Vagos",
      type: "Banda",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 43,
      name: "Cesar y El Imperio",
      type: "Banda",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }, {
      id: 44,
      name: "Palabras de Clausura - Sponsors",
      type: "Banda",
      start: new Date(''),
      end: new Date(''),
      desc: 'String goes here',
      img: 'String goes here',
      reminder: false
    }
  ];
  return {
    all: function() {
      return events;
    },
    remove: function(events) {
      events.splice(events.indexOf(event), 1);
    },
    get: function(id) {
      for (var i = 0; i < events.length; i++) {
        if (events[i].id === parseInt(id)) {
          return events[i];
        }
      }
      return null;
    }
  };
});
