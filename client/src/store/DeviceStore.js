import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Laptop'},
            {id: 2, name: 'Desktop'},
            {id: 3, name: 'Smartphone'},
            {id: 4, name: 'Tablet'},
            {id: 5, name: 'TV'},
        ];
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ];
        this._devices = [
            {id: 1, name: 'iPhone 13 Pro', price: 2500, rating: 5, img: `https://shop.mts.by/upload/resize_cache/iblock/311/600_900_1/iPhone_13_Pro_gold_1.jpg`},
            {id: 2, name: 'iPhone 13 Pro', price: 2500, rating: 5, img: `https://shop.mts.by/upload/resize_cache/iblock/479/600_900_1/iPhone_13_Pro_silver_1.jpg`},
            {id: 3, name: 'iPhone 12 Pro', price: 2500, rating: 5, img: `https://shop.mts.by/upload/resize_cache/iblock/07e/600_900_1/iphone-12-pro-pacific-blue_1.jpg`},
            {id: 4, name: 'iPhone 12 Pro', price: 2500, rating: 5, img: `https://shop.mts.by/upload/resize_cache/iblock/def/600_900_1/iphone-12-pro-graphite_1.jpg`},
            {id: 5, name: 'iPhone 12 Pro', price: 2500, rating: 5, img: `https://shop.mts.by/upload/resize_cache/iblock/05a/600_900_1/iphone-12-pro-max-gold_1.jpg`},

        ];
        this._selectedType = {}
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }
    setSelectedType(type) {
        this._selectedType = type;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
}