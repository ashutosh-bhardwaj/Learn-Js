import App from '../../components/App';
import Auth from '../../components/Auth';

import { LoginRequired } from '../../components/RouteWrappers';
import endPoints from './endpoints';
import { HeaderLayout } from '../../views/Layouts';
import {
    PhoneList,
    PhoneDetail,
    AddPhone,
    EditPhone
} from '../../views/Phones';

export default [
    {
        component: App,
        routes: [
            {
                path: endPoints.signin,
                exact: true,
                component: Auth, // View component
            },
            {
                path: endPoints.default,
                component: LoginRequired,   // Route protector
                routes: [
                    {
                        component: HeaderLayout,
                        routes: [
                            {
                                path: endPoints.signin,
                                exact: true,
                                component: Auth, // View component
                            },
                            {
                                path: endPoints.default,
                                exact: true,
                                component: PhoneList, // View component
                            },
                            {
                                path: endPoints.add,
                                exact: true,
                                component: AddPhone // View component
                            },
                            {
                                path: endPoints.editWithId,
                                component: EditPhone // View component
                            },
                            {
                                path: endPoints.detailWithId,
                                component: PhoneDetail // View component
                            },
                        ]
                    }
                ]
            }
        ]
    }
];