'use strict';
// Фэйк АПИ
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

let app = new Vue ({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'http://placehold.it/250x150'
    },
    methods: {
        getJson (url) {
            return fetch (url)
                .then (result => result.json ())
                .catch (error => {
                    console.log (error)
                })
        },
        addProduct (product) {
            console.log (product.id_product);
        }
    },
    mounted () {
        this.getJson (`${API + this.catalogUrl}`)
            .then (data => {
                for (let el of data) {
                    this.products.push (el)
                }
            });
        this.getJson (`getProducts.json`)
            .then (data => {
                for (let el of data) {
                    this.products.push (el)
                }
            });
    }
});