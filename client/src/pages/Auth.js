// import React from 'react';
// import { NavLink, useLocation} from 'react-router-dom';
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from './../utils/consts';
// import {Formik, Form, ErrorMessage, Field} from 'formik';

// const Auth = () => {
//     const location = useLocation() //Маршрут в строке запроса (ХУК)
//     const isLogin = location.pathname===LOGIN_ROUTE

//     return (
//         <Container
//             style={{height: window.innerHeight - 54}}
//         >
//             <Form className="formContainer"style={{width: 600}}>
//                 <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
//                 <Form className="d-flex flex-column">
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш email..."
//                     />
//                     <Form.Control
//                         className="mt-3"
//                         placeholder="Введите ваш пароль..."
//                     />
//                     <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
//                     <Button className="align-self-end"
//                             variant={"outline-success"}
//                         >
//                         {isLogin ? 'Войти' : 'Регистрация'}
//                     </Button>
//                             {isLogin ? 
//                             <div className="mt-3">
//                                 Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
//                             </div>
//                             :
//                             <div className="mt-3">
//                                 Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти!</NavLink>
//                             </div>
//                             }
//                     </Row>

//                 </Form>
//             </Form>
//         </Container>
//     );
// };

// export default Auth;
import React from 'react';

const Auth = () => {
    return (
        <div className="auth">
            <form>
                <h1>Регистрация</h1>
                <input name="email" type="text" placeholder="Введите ваш email....."/>
                <input name="email" type="password" placeholder="Введите ваш пароль....."/>
                <button type="submit">Зарегестрироваться</button>
            </form>
        </div>
    );
};

export default  Auth;