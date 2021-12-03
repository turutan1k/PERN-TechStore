// import React, {useContext} from 'react';
// import {observer} from "mobx-react-lite";
// import {Context} from "../index";

// const ManufacturerBar = observer(() => {
//     const {device} = useContext(Context)

//     return (
//         <Row className="d-flex">
//             {device.manufacturers.map(manufacturer =>
//                 <Card body
//                     style={{cursor:'pointer'}}
//                     key={manufacturer.id}
//                     className="p-3"
//                     onClick={() => device.setSelectedManufacturer(manufacturer)}
//                     border={manufacturer.id === device.selectedManufacturer.id ? 'danger' : 'light'}
//                 >
//                     {manufacturer.name}
//                 </Card>
//             )}
//         </Row>
//     );
// });

// export default ManufacturerBar;
import React from 'react';

const ManufacturerBar = () => {
    return (
        <div>
            
        </div>
    );
};

export default ManufacturerBar;