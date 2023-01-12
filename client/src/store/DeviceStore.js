import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
    constructor(){
        this._deviceNames = []
        this._manufacturers = []
        this._devices = []
        this._selectedDeviceName = {}
        this._selectedManufacturer = {}
        makeAutoObservable(this)
    }

    setDevices(devices){
        this._devices = devices
    }
    setDeviceNames(deviceNames){
        this._deviceNames = deviceNames
    }
    setManufacturers(manufacturers){
        this._manufacturers = manufacturers
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