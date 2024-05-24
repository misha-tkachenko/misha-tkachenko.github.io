let markNote = ['Dell', 'HP', 'Accer', 'Asus', 'Lenovo', 'Apple', ]

let NoteApp = {
    data() {
        return {
            hover:false,
            hoverNumber:-1,
            nameArr:['BMW', 'Mersedes-Benz', 'Audi', 'Lexus', 'Toyota', 'Tesla', ],
            notebookArr:[
                {
                    name: 'BMW',
                    model: 'X1',
                    year: '2009 - до тепер',
                    color: 'white,black,yelow,green ...',
                    price: 60000,
                    fuel: 'дизель,бензин',
                    image: 'img/2.jpg',
                    speed:'180km/h',
                    about: '',
                },
                {
    
                    name: 'BMW',
                    model: 'X2',
                    year: '2017 - до тепер',
                    color: 'white,black,yelow,green ...',
                    price: 61000,
                    fuel: 'дизель,бензин',
                    image: 'img/x2.jpg',
                    about: '',
                    speed:'240km/h',
                },
                {
    
                    name: 'BMW',
                    model: 'X3',
                    year: '2002 - до тепер',
                    color: 'white,black,yelow,green ...',
                    price: 61000,
                    fuel: 'дизель,бензин',
                    image: 'img/bmw.jpeg',
                    about: '',
                    speed:'200km/h',
                },
                {
                    name: 'BM',
                    model: 'X4',
                    year: '2009 - до тепер',
                    color: 'white,black,yelow,green ...',
                    price: 60000,
                    fuel: 'дизель,бензин',
                    image: 'img/bmw.jpeg',
                    about: 'модель:',
                    speed:'',
                },
                {
                    name: 'Mersedes-Benz',
                    model: 'Mercedes-Benz S-Class',
                    year: '2022',
                    color: 'white,black,yelow,green ...',
                    price: 130000,
                    fuel: 'дизель,бензин',
                    image: 'img/5.jpg',
                    about: 'модель:',
                    speed:'260km/h',
                },
                {
                    name: 'Mersedes-Benz',
                    model: 'Mercedes-Benz G-Сlass',
                    year: '1979 —  до нашого часу',
                    color: 'white,black,yelow,...',
                    price: 350000,
                    fuel: 'дизель,бензин',
                    image: 'img/61.jpg',
                    about: 'модель:',
                    speed:'200km/h',
                },
                {
                    name: 'Mersedes-Benz',
                    model: 'Mercedes-Benz E-Class 2018',
                    year: '2022',
                    color: 'white,black,yelow,aqua ...',
                    price: 122000,
                    fuel: 'дизель,бензин',
                    image: 'img/14.jpg',
                    about: 'модель:',
                    speed:'240km/h',
                },
                {
                    name: 'Audi',
                    model: 'Audi A6-e',
                    year: '1977 -до тепер',
                    color: 'white,black,yelow,...',
                    price: 70000,
                    fuel: 'дизель,бензин',
                    image: 'img/16.jpg',
                    about: 'модель:',
                    speed:'240km/h',
                }, {
                    name: 'Audi',
                    model: 'Audi e-tron GT 2023',
                    year: '2000- до тепер',
                    color: 'white,black, ...',
                    price: 85000,
                    fuel: 'дизель,бензин',
                    image: 'img/20.jpg',
                    about: 'модель:',
                    speed:'190km/h',
                },
                 {
                    name: 'Audi',
                    model: 'audi a8 2019 ',
                    year: '2014-2024',
                    color: 'white,black,yelow, ...',
                    price: 65000,
                    fuel: 'дизель,бензин',
                    image: 'img/21.jpg',
                    about: 'модель:',
                    speed:'220km/h',
                },
                {
                    name: 'Lexus',
                    model: 'Lexus Lx 600 3.5 AT AWD ULTRA ',
                    year: '2021- до тепер',
                    color: 'white,black,yelow, ...',
                    price: 70000,
                    fuel: 'дизель,бензин',
                    image: 'img/30.jpg',
                    about: 'модель:',
                    speed:'240km/h',
                },{
                    name: 'Lexus',
                    model: 'Lexus Lc 500 ',
                    year: '2020-2024',
                    color: 'white,black,yelow, ...',
                    price: 80000,
                    fuel: 'дизель,бензин',
                    image: 'img/31.jpg',
                    about: 'модель:',
                    speed:'240km/h',
                },
                {
                    name: 'Lexus',
                    model: 'Lexus LX 2022',
                    year: '2022-2024',
                    color: 'white,black,yelow, ...',
                    price: 119000,
                    fuel: 'дизель,бензин',
                    image: 'img/33.jpg',
                    about: 'модель:',
                    speed:'200km/h',
                },
                {
                    name: 'Toyota',
                    model: 'Toyota Land Cruiser',
                    year: '2024- до тепер',
                    color: 'white,black,...',
                    price: 70000,
                    fuel: 'дизель,бензин',
                    image: 'img/40.jpg',
                    about: 'модель:',
                    speed:'180km/h',
                },{
                    name: 'Toyota',
                    model: 'Toyota Land Cruiser 200',
                    year: '2007-2021',
                    color: 'white,black,yelow, ...',
                    price: 88000,
                    fuel: 'дизель,бензин',
                    image: 'img/41.jpg',
                    about: 'модель:',
                    speed:'230km/h',
                },{
                    name: 'Toyota',
                    model: 'Toyota Land Cruiser 300',
                    year: '2022-2024',
                    color: 'white,black,yelow, ...',
                    price: 98000,
                    fuel: 'дизель,бензин',
                    image: 'img/45.jpg',
                    about: 'модель:',
                    speed:'220km/h',
                },
                {
                    name: 'Tesla',
                    model: 'Tesla cyber track',
                    year: '2020-2024',
                    color: 'white,black,yelow, ...',
                    price: 69000,
                    fuel: 'електро мобіль',
                    image: 'img/51.jpg',
                    about: 'модель:',
                    speed:'170km/h',
                },
                {
                    name: 'Tesla',
                    model: 'Tesla model S',
                    year: '2019-2024',
                    color: 'white,black,yelow, ...',
                    price: 60000,
                    fuel: 'електро мобіль',
                    image: 'img/52.jpg',
                    about: 'модель:',
                    speed:'170km/h',
                },
                {
                    name: 'Tesla',
                    model: 'Toyota model X',
                    year: '2018-2024',
                    color: 'white,black,yelow, ...',
                    price: 67000,
                    fuel: 'електро мобіль',
                    image: 'img/55.jpg',
                    about: 'модель:',
                    speed:'160km/h',
                },
                
            ],
            chooseName: markNote[0],
            chooseIndex:0,
            chooseNotebooks:[],
            search: "",
            currentIndex:0,
        }
    },
    methods: {
        showNotebook(index){
            this.chooseNotebooks.length = 0;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr){
                if (elem.name == this.chooseName){
                    this.chooseNotebooks.push(elem);
                }
            }
            this.currentIndex = index;
        },
        searchFunction(){

        },
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();
            
            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.model.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                   this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container')