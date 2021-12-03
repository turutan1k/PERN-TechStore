// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";
// import ListGroup from "react-bootstrap/ListGroup";

// const DeviceNameBar = observer(() => {
//     const {device} = useContext(Context)
//     return (
//         <ListGroup>
//             {device.deviceNames.map((deviceName) => (
//             <ListGroup.Item 
//                 style={{cursor:'pointer'}}
//                 active={deviceName.id === device.selectedDeviceName.id} 
//                 onClick={() => device.setSelectedDeviceName(deviceName)} 
//                 key = {deviceName.id}
//             >
//                 {deviceName.name}
//             </ListGroup.Item>
//             ))}
//         </ListGroup>
//     );
// });

// export default DeviceNameBar;
import React from 'react';

const DeviceNameBar = () => {
    return (
        <div>
            
        </div>
    );
};

export default DeviceNameBar;