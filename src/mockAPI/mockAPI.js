import tabascoOriginal from './imagenes/tabasco-original.jpg'
import tabascoJalapeños from './imagenes/tabasco-jalapeños.jpg'
import tabascoChipotle from './imagenes/tabasco-chipotle.jpg'
import tabascoSriracha from './imagenes/tabasco-sriracha.jpg'
import yucatecoOriginal from './imagenes/elyucateco-jalapeño.jpg'
import yucatecoVerde from './imagenes/elyucateco-jalapeñoverde.jpg'
import yucatecoExtrapicante from './imagenes/elyucateco-extrapicante.jpg'
import yucatecoNegro from './imagenes/elyucateco-negro.jpg'
import voodooReaper from './imagenes/voodoo-reaper.jpg'
import cholula from './imagenes/cholula.jpg'

const data = [
    {
        id: 1,
        nombre: 'Tabasco Original',
        img: tabascoOriginal,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 12,
    },
    {
        id: 2,
        nombre: 'Tabasco Jalapeño',
        img: tabascoJalapeños,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 3,
        nombre: 'Tabasco Chipotle',
        img: tabascoChipotle,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 4,
        nombre: 'Tabasco Sriracha',
        img: tabascoSriracha,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 5,
        nombre: 'El Yucateco Original',
        img: yucatecoOriginal,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 6,
        nombre: 'El Yucatejo Verde',
        img: yucatecoVerde,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 7,
        nombre: 'El Yucatejo Extrapicante',
        img: yucatecoExtrapicante,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 8,
        nombre: 'El Yucatejo Negro',
        img: yucatecoNegro,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 9,
        nombre: 'VooDoo Reaper',
        img: voodooReaper,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
    {
        id: 10,
        nombre: 'Cholula Original',
        img: cholula,
        origen: 'origen',
        categoria: 'categoria',
        precio: 10,
        stock: 10,
    },
];

export function getSalsas() {
    return new Promise(
        (resolve) => {
            setTimeout(
              () =>  resolve(data), 2000
            );
        }) 
};

export function getUnaSalsa() {
    return new Promise(
        (resolve) => {
            setTimeout(
              () =>  resolve(data[0]), 1000
            );
        }) 
};
