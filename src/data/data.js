const dataProducto = [
    
    {   
        id: 1,
        name: 'Funko Pop Buzz Lightyear',
        price: 8.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762394/Funkos/ToyStoryBuzzLightyear169_jkrdv3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Disney',
        stock: 8
    },
    {
        id: 2,
        name: 'Funko Pop Maribel Madrigal',
        price: 7.899,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762320/Funkos/EncantoMirabelMadrigal1145_krozin.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Disney',
        stock: 6
    },
    {
        id: 3,
        name: 'Funko Pop Marty McFly',
        price: 6.599,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762280/Funkos/BackToTheFutureMartyMcFly49_oqcpdi.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Films',
        stock: 5
    },
    {
        id: 4,
        name: 'Funko Pop The Flash',
        price: 5.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762309/Funkos/DCTheFlash208_xrbgja.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Dc',
        stock: 11
    },
    {
        id: 5,
        name: 'Funko Pop Gravity Falls',
        price: 6.399,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762338/Funkos/GravityFallsDipperPines240_s8jbss.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Disney',
        stock: 3
    },
    {
        id: 6,
        name: 'Funko Pop Game of Thrones',
        price: 7.399,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762335/Funkos/GOTJonSnow26_nfijgo.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Got',
        stock: 22
    },
    {
        id: 7,
        name: 'Funko Pop Stranger Things',
        price: 7.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762385/Funkos/STDustin424_ujriiv.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StrangerThings',
        stock: 15
    },
    {
        id: 8,
        name: 'Funko Pop Woody',
        price: 8.399,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,w_928/v1660762396/Funkos/ToyStoryWoody168_gzok8y.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Disney',
        stock: 9
    },
    {
        id: 9,
        name: 'Funko Pop Axl Rose',
        price: 4.899,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762276/Funkos/AxlRose50_xs1ofc.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Rock',
        stock: 13
    },
    {
        id: 10,
        name: 'Funko Pop DeadPool',
        price: 4.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762364/Funkos/MarvelDeadpool20_lv5rrd.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Marvel',
        stock: 18
    },
    {
        id: 11,
        name: 'Funko Pop Ac/Dc',
        price: 5.699,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762265/Funkos/AngusYoung91_bfvzjy.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Rock',
        stock: 7
    },
    {
        id: 12,
        name: 'Funko Pop Ant-Man',
        price: 5.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762272/Funkos/AntMan_jerxjs.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Marvel',
        stock: 9
    },
    {
        id: 13,
        name: 'Funko Pop Star Wars',
        price: 5.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762289/Funkos/c3po_qaobr1.webp',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StarWars',
        stock: 6
    },
    {
        id: 14,
        name: 'Funko Pop Jurassic World',
        price: 6.299,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762286/Funkos/blueJurassicWorld_asvuf2.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Films',
        stock: 9
    },
    {
        id: 15,
        name: 'Funko Pop Dexter',
        price: 6.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762312/Funkos/Dexter_ipg0xe.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Films',
        stock: 4
    },
    {
        id: 16,
        name: 'Funko Pop Star Wars',
        price: 7.299,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762382/Funkos/StarWarsChe_dkndnf.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StarWars',
        stock: 6
    },
    {
        id: 17,
        name: 'Funko Pop Star Wars',
        price: 7.699,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762303/Funkos/DarthVader_dyc612.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StarWars',
        stock: 9
    },
    {
        id: 18,
        name: 'Funko Pop Harry Potter',
        price: 7.199,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762346/Funkos/harryPotter_rtabxq.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Films',
        stock: 13
    },
    {
        id: 19,
        name: 'Funko Pop Stranger Things',
        price: 7.499,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762388/Funkos/STElevenWithEggos421_cel39m.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StrangerThings',
        stock: 6
    },
    {
        id: 20,
        name: 'Funko Pop Spider Man',
        price: 8.499,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762369/Funkos/MarvelPeterParker221_fiw7jo.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Marvel',
        stock: 9
    },
    {
        id: 21,
        name: 'Funko Pop Spider Man',
        price: 8.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762379/Funkos/Spiderman_o6y6uo.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Marvel',
        stock: 12
    },
    {
        id: 22,
        name: 'Funko Pop Gabby Gabby',
        price: 6.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762331/Funkos/gabbygabby_zgnxcf.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Disney',
        stock: 5
    },
    {
        id: 23,
        name: 'Funko Pop Kurt Cobain',
        price: 4.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762352/Funkos/KurtCobain65_jmpnvz.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Rock',
        stock: 3
    },
    {
        id: 24,
        name: 'Funko Pop Jack Sparrow',
        price: 5.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762348/Funkos/JackSparrow_u7yben.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Films',
        stock: 3
    },
    {
        id: 25,
        name: 'Funko Pop Lebron James',
        price: 6.799,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762354/Funkos/lebronJames_yzcvkd.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'NBA',
        stock: 4
    },
    {
        id: 26,
        name: 'Funko Pop The Mandalorian',
        price: 9.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762357/Funkos/Mandalorian_kjtj7j.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StarWars',
        stock: 7
    },
    {
        id: 27,
        name: 'Funko Pop Stranger Things',
        price: 6.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762372/Funkos/MikeStrangerThings_fndcsh.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'StrangerThings',
        stock: 11
    },
    {
        id: 28,
        name: 'Funko Pop Superman',
        price: 5.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762392/Funkos/superman_yaqgc3.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'Dc',
        stock: 19
    },
    {
        id: 29,
        name: 'Funko Pop GSW',
        price: 6.999,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762390/Funkos/StephenCurry_t8spdd.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'NBA',
        stock: 8
    },
    {
        id: 30,
        name: 'Funko Pop Orlando Magic',
        price: 6.499,
        image: 'https://res.cloudinary.com/dnxlkkx8s/image/upload/c_scale,h_587,w_928/v1660762377/Funkos/Shaq_ae152g.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime consequatur reprehenderit, corporis corrupti voluptates recusandae dolorem laboriosam pariatur earum voluptatum dolore non facere, amet placeat debitis quas, ratione quod aperiam!',
        category: 'NBA',
        stock: 10
    }
]

export default dataProducto;