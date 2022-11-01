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
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/212/971/products/tabasco-original1-04330132999bbe4ccb15934708078409-480-0.jpeg",
        origen: 'Luisiana, USA',
        categoria: 'Tabasco',
        precio: 10,
        stock: 12,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 2,
        nombre: 'Tabasco Jalapeño',
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/106/690/products/d_nq_np_699369-mla42904262174_072020-o1-e6bb7a01ae1f4cd43e16380448717626-640-0.jpg",
        origen: 'Luisiana, USA',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 3,
        nombre: 'Tabasco Chipotle',
        img: "https://http2.mlstatic.com/D_NQ_NP_875315-MLA49497263638_032022-O.webp",
        origen: 'Luisiana, USA',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 4,
        nombre: 'Tabasco Sriracha',
        img: "https://http2.mlstatic.com/D_NQ_NP_683588-MLA49497982496_032022-O.jpg",
        origen: 'Bangkok, Tailandia',
        categoria: 'Tabasco',
        precio: 10,
        stock: 10,
        descripcion: 'La salsa Tabasco es una famosa salsa picante de origen estadounidense, creada en 1868 por Edmund McIlhenny. De sabor picante, se prepara con chile tabasco rojo, vinagre, agua y sal, macerados en barriles de roble. Aunque su nombre procede del estado mexicano de Tabasco, se trata de un producto estadounidense elaborado por la McIlhenny Company, que produce toda la salsa vendida en el mundo1​ en su sede situada en el domo salino de Avery Island en la parroquia de Iberia en la zona meridional del estado de Luisiana, en el sur de los Estados Unidos.'
    },
    {
        id: 5,
        nombre: 'El Yucateco Original',
        img: "https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101766001L.jpg",
        origen: 'Yucatan, Mexico',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'En el corazón de Yucatán en 1968, Don Priamo J. Gamboa fundó El Yucateco y comenzó a crear sus maravillosas salsas y condimentos artesanales. Su visión era compartir sus recetas familiares que resaltaban y mostraban el auténtico sabor de Yucatán. No imaginó que 50 años más tarde su visión del sabor se extendería por todo el mundo para ser disfrutado por millones. Él sabía que para mantener el sabor único y la calidad premium de las salsas, las especias, los pimientos habaneros y los ingredientes «secretos» tendrían que cultivarse en la granja de su familia, para que pudieran ser recogidos en su punto perfecto de calidad y envasados ​​en el lugar para garantizar una frescura óptima'
    },
    {
        id: 6,
        nombre: 'El Yucatejo Verde',
        img: "http://d3ugyf2ht6aenh.cloudfront.net/stores/186/318/products/chilehabaneroverdepicante1-a1d352653a8dc3409d16470900319542-640-0.png",
        origen: 'Yucatan, Mexico',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'En el corazón de Yucatán en 1968, Don Priamo J. Gamboa fundó El Yucateco y comenzó a crear sus maravillosas salsas y condimentos artesanales. Su visión era compartir sus recetas familiares que resaltaban y mostraban el auténtico sabor de Yucatán. No imaginó que 50 años más tarde su visión del sabor se extendería por todo el mundo para ser disfrutado por millones. Él sabía que para mantener el sabor único y la calidad premium de las salsas, las especias, los pimientos habaneros y los ingredientes «secretos» tendrían que cultivarse en la granja de su familia, para que pudieran ser recogidos en su punto perfecto de calidad y envasados ​​en el lugar para garantizar una frescura óptima'
    },
    {
        id: 7,
        nombre: 'El Yucatejo Extrapicante',
        img: "https://www.ifeelgood.com.ar/img/articulos/2020/11/salsa_picante_kutbil_ik_de_chile_habanero_el_yucateco_120ml_imagen1.jpg",
        origen: 'Yucatan, Mexico',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'En el corazón de Yucatán en 1968, Don Priamo J. Gamboa fundó El Yucateco y comenzó a crear sus maravillosas salsas y condimentos artesanales. Su visión era compartir sus recetas familiares que resaltaban y mostraban el auténtico sabor de Yucatán. No imaginó que 50 años más tarde su visión del sabor se extendería por todo el mundo para ser disfrutado por millones. Él sabía que para mantener el sabor único y la calidad premium de las salsas, las especias, los pimientos habaneros y los ingredientes «secretos» tendrían que cultivarse en la granja de su familia, para que pudieran ser recogidos en su punto perfecto de calidad y envasados ​​en el lugar para garantizar una frescura óptima'
    },
    {
        id: 8,
        nombre: 'El Yucatejo Negro',
        img: "https://www.ifeelgood.com.ar/img/articulos/2020/11/salsa_picante_negra_de_chile_habanero_el_yucateco_120ml_imagen1.jpg",
        origen: 'Yucatan, Mexico',
        categoria: 'Yucateco',
        precio: 10,
        stock: 10,
        descripcion: 'En el corazón de Yucatán en 1968, Don Priamo J. Gamboa fundó El Yucateco y comenzó a crear sus maravillosas salsas y condimentos artesanales. Su visión era compartir sus recetas familiares que resaltaban y mostraban el auténtico sabor de Yucatán. No imaginó que 50 años más tarde su visión del sabor se extendería por todo el mundo para ser disfrutado por millones. Él sabía que para mantener el sabor único y la calidad premium de las salsas, las especias, los pimientos habaneros y los ingredientes «secretos» tendrían que cultivarse en la granja de su familia, para que pudieran ser recogidos en su punto perfecto de calidad y envasados ​​en el lugar para garantizar una frescura óptima'
    },
    {
        id: 9,
        nombre: 'Carolina Reaper',
        img: "https://www.gourmets.net/img/Productos/365162.jpg",
        origen: 'Carolina del Sur, USA',
        categoria: 'Especiales',
        precio: 10,
        stock: 10,
        descripcion: 'El Carolina Reaper o Segador de Carolina es un pimiento parte de la especie Capsicum chinense, originalmente llamado "Don pedrito", mejorado por Ed Currie, quien lidera la compañía de pimientos PuckerButt Pepper Company en Fort Mill, Carolina del Sur, Estados Unidos. En 2013 fue considerado el pimiento más picante del mundo , y aún ostenta ese récord, 1​ con Unidades de Scoville de hasta 2 220 000. En 2017 Dragons Breath se autoproclamó el pimiento más picante, con una puntuación de 2,48 millones SHU, aunque esto aún no ha sido verificado por los récords Guinness. 2​ El pimiento es un cruce entre un chile Habanero y un Naga Bhut Jolokia.3​ El Carolina Reaper fue clasificado como el pimiento más picante del mundo en el Libro Guinness de los récords desde el 7 de agosto de 2013.1​ Su picor varía entre 1 150 000 a 2 180 000 de SHU'
    },
    {
        id: 10,
        nombre: 'Cholula Chipotle',
        img: "https://www.sucosorder.com/media/images/org/x11527-1_1-salsa-picante-cholula-chipotle-original.jpg",
        origen: 'Jalisco, Mexico',
        categoria: 'Especiales',
        precio: 10,
        stock: 10,
        descripcion: 'La Salsa Picante Cholula es una marca de salsa picante mexicana, a base de chile, con sede en Stamford, Connecticut, fabricada en Chapala, Jalisco, México, y con licencia de José Cuervo. Según sus fabricantes, la salsa picante Cholula tiene una puntuación de entre 1,000 y 2,000 en la Escala Scoville, aunque otras fuentes la consideran tres veces más picante, con 3.600 unidades Scoville.1​ El producto se presenta en una botella de cristal con un característico tapón redondo de madera. En Norteamérica se comercializan seis variedades de Cholula.'
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