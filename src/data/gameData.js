    const games = [
        {
            image: 'https://www.cnet.com/a/img/resize/975719fbb4242f346c0db05e044608b2dcf7cddc/hub/2022/09/13/fc6f151c-93b1-471c-97ea-a76c44e30235/switch-tloz-totk-artwork-01.jpg?auto=webp&fit=crop&height=675&width=1200',
            title: 'Zelda',
            cost: 69.99,
            onSale: true,
        },
        {
            image: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A085fe36a-6e67-414a-81ca-c4962e59ed3f?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1',
            title: 'GTA',
            cost: 79.99,
            onSale: false,
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Black_Ops_II_box_artwork.png',
            title: 'Call of Duty',
            cost: 39.99,
            onSale: true,
        },
        {
            image: 'https://ca-times.brightspotcdn.com/dims4/default/e25d5dc/2147483647/strip/false/crop/3000x1688+0+156/resize/1200x675!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F9d%2F1b%2Fbdd9f1af43baa140aa53716d7bd5%2Fhalo-101-6461-rt.jpg',
            title: 'Halo',
            cost: 59.99,
            onSale: true,
        },
        {
            image: 'https://m.media-amazon.com/images/I/31kMijVYtvL._UF894,1000_QL80_.jpg',
            title: 'IT',
            cost: 24.99,
            onSale: false,
        },
        {
            image: 'https://media.newyorker.com/photos/64526e8287ae684cabca2c9c/master/w_2560%2Cc_limit/Chayka-Mario.jpg',
            title: 'Mario',
            cost: 49.99,
            onSale: true,
        },
        {
            image: 'https://m.media-amazon.com/images/I/71PdHujQHJL._UF894,1000_QL80_.jpg',
            title: 'Pac Man',
            cost: 19.99,
            onSale: false,
        },
        {
            image: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A085fe36a-6e67-414a-81ca-c4962e59ed3f?source=next-article&fit=scale-down&quality=highest&width=1440&dpr=1',
            title: 'Grand Theft Auto VI',
            cost: 79.99,
            onSale: false
        },
    ];

    const oldSchoolTitles = ['Pac Man', 'Mario', 'Call of Duty', 'IT'];

    export const oldSchoolGames = games.filter(game => oldSchoolTitles.includes(game.title));
    export const modernGames = games.filter(game => !oldSchoolTitles.includes(game.title));
