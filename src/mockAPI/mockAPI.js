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
        categoria: 'Tabasco',
        precio: 10,
        stock: 12,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 2,
        nombre: 'Tabasco Jalapeño',
        img: tabascoJalapeños,
        origen: 'origen',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 3,
        nombre: 'Tabasco Chipotle',
        img: tabascoChipotle,
        origen: 'origen',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 4,
        nombre: 'Tabasco Sriracha',
        img: tabascoSriracha,
        origen: 'origen',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 5,
        nombre: 'El Yucateco Original',
        img: yucatecoOriginal,
        origen: 'origen',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 6,
        nombre: 'El Yucatejo Verde',
        img: yucatecoVerde,
        origen: 'origen',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 7,
        nombre: 'El Yucatejo Extrapicante',
        img: yucatecoExtrapicante,
        origen: 'origen',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 8,
        nombre: 'El Yucatejo Negro',
        img: yucatecoNegro,
        origen: 'origen',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 9,
        nombre: 'VooDoo Reaper',
        img: voodooReaper,
        origen: 'origen',
        categoria: 'Especiales',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 10,
        nombre: 'Cholula Original',
        img: cholula,
        origen: 'origen',
        categoria: 'Especiales',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
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

export function getUnaSalsa(id) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
              () =>  {
                if(data.find((item) => item.id === Number(id)) === undefined)
                    reject(new Error("No se encuentra la salsa que estas buscando"))
                else{
                    resolve(data.find((item) => item.id === Number(id)))
                }
              }, 1000
            );
        }) 
};

export function getCategorySalsa(id) {
    return new Promise(
        (resolve) => {
            setTimeout(
              () =>  resolve(data.filter((item) => item.categoria === id)), 1000
            );
        }) 
};