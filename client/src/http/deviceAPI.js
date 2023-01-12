import {$authHost, $host} from "./index";

export const createDeviceName = async (deviceName) => {
    const {data} = await $authHost.post('api/deviceName', deviceName)
    return data
}

export const fetchDeviceNames = async () => {
    const {data} = await $host.get('api/deviceName')
    return data
}

export const createManufacturer = async (manufacturer) => {
    const {data} = await $authHost.post('api/manufacturer', manufacturer)
    return data
}

export const fetchManufacturers = async () => {
    const {data} = await $host.get('api/manufacturer')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device')
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $authHost.get('api/device/' + id)
    return data
}

export const fetchConsignment = async () => {
    const {data} = await $host.get('api/consignment/')
    return data
}
