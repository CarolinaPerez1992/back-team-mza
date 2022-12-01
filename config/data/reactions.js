let reactions = [
    {
        itineraryId: '638475c9adf63759ca6737ea',
        name: 'like',
        icon: 'https://cdn-icons-png.flaticon.com/512/889/889140.png',
        iconBack: 'https://cdn.icon-icons.com/icons2/1392/PNG/512/like_96682.png',
        userId: '63814ae7a1e1ef29a2d043f4',
    },
    {
        itineraryId: '638475c9adf63759ca6737ea',
        name: 'not-like',
        icon: 'https://cdn-icons-png.flaticon.com/512/889/889220.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/126/126504.png',
        userId: '63814ae7a1e1ef29a2d043f4',
    },
    {
        itineraryId: '638475c9adf63759ca6737ea',
        name: 'love',
        icon: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
        userId: '63814ae7a1e1ef29a2d043f4',
    },
    {
        itineraryId: '638475c9adf63759ca6737ea',
        name: 'surprise',
        icon: 'https://cdn-icons-png.flaticon.com/512/742/742925.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/2958/2958976.png',
        userId: '63814ae7a1e1ef29a2d043f4',
    }
]

require("dotenv").config();
require("../database");
const Reaction = require("../../models/Reaction");

reactions.forEach((elemento) => {
  Reaction.create({
    itineraryId: elemento.itineraryId,
    name: elemento.name,
    icon: elemento.icon,
    iconBack: elemento.iconBack,
    userId: elemento.userId,
  });
});

