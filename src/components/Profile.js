import MoneyIcon from '@material-ui/icons/Money';
import * as React from "react";
import {
    Edit, 
    SimpleForm,required,
    TextInput,
    useAuthenticated
} from 'react-admin';

export const ProfileIcon = MoneyIcon;


export const ProfileEdit = (props) => {
    useAuthenticated();
    return (
        <Edit title="My profile" {...props}>
            <SimpleForm>
                <TextInput source="email" validate={required()} />
            </SimpleForm>
        </Edit>
    );
}