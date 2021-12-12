import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._deviceNames = [
            {id:1, name:'Холодильники'},
            {id:2, name:'Смартфоны'},
            {id:3, name:'Ноутбуки'},
            {id:4, name:'Телевизоры'},
            {id:5, name:'Телевизоры'},
            {id:6, name:'Телевизоры'},
            {id:7, name:'Телевизоры'},
            {id:8, name:'Телевизоры'},
            {id:9, name:'Телевизоры'},
            {id:10, name:'Телевизоры'},
            {id:11, name:'Телевизоры'},
            {id:12, name:'Телевизоры'},
            {id:13, name:'Телевизоры'},
            {id:14, name:'Телевизоры'}

        ]
        this._manufacturers = [
            {id:1, name:"Samsung"},
            {id:2, name:"Apple"},
            {id:3, name:"Lenovo"},
            {id:4, name:"Asus"},
            {id:5, name:"Asus"},
            {id:6, name:"Asus"},
            {id:7, name:"Asus"},
            {id:8, name:"Asus"},
            {id:9, name:"Asus"},
            {id:10, name:"Asus"},
            {id:12, name:"Asus"},
            {id:13, name:"Asus"},
            {id:14, name:"Asus"},
            {id:15, name:"Asus"},
            {id:16, name:"Asus"},
            {id:17, name:"Asus"},
            {id:18, name:"Asus"},
            {id:19, name:"Asus"},
            {id:20, name:"Asus"},
            {id:21, name:"Asus"},
            {id:22, name:"Asus"},

        ]
        this._devices = [
            {id:1, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"},
            {id:2, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"},
            {id:3, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"},
            {id:4, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"},
            {id:5, model:"12 pro", releaseDate:"2021-03-05", guaranteePeriod:"12 месяцев", price:"3049", img:"https://shop.by/images/apple_iphone_12_pro_dual_sim_256gb_blue_1.jpg", deviceNameId:"2", manufacturerId:"2"}
        ]
        this._selectedDeviceName = {}
        this._selectedManufacturer = {}
        makeAutoObservable(this)
    }

    setDevices(devices){
        this._Devices = devices
    }
    setDeviceNames(deviceNames){
        this._DeviceNames = deviceNames
    }
    setManufacturers(manufacturers){
        this._Manufacturers = manufacturers
    }
    setSelectedDeviceName(deviceName){
        this._selectedDeviceName = deviceName
    }
    setSelectedManufacturer(manufacturer){
        this._selectedManufacturer = manufacturer
    }

    get devices(){
        return this._devices
    }
    get deviceNames(){
        return this._deviceNames
    }
    get manufacturers(){
        return this._manufacturers
    }
    get selectedDeviceName(){
        return this._selectedDeviceName
    }
    get selectedManufacturer(){
        return this._selectedManufacturer
    }
}