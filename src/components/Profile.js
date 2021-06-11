import MoneyIcon from '@material-ui/icons/Money';
import * as React from "react";
import {
    Edit, 
    SimpleForm,required,
    TextInput,
    useAuthenticated,ImageInput,ImageField,PasswordInput
} from 'react-admin';

export const ProfileIcon = MoneyIcon;


export const ProfileEdit = (props) => {
    useAuthenticated();
    return (
        <Edit title="My profile" {...props} redirect={false}>
            <SimpleForm>
                <TextInput source="email" validate={required()} />
                <TextInput label="Username" source="username" validate={required()}/>
                <ImageInput label="Avatar" source="additionalProp1" accept="image/*" placeholder={<p>Choisir Avatar</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <PasswordInput source="password" label="Mot de Passe"/>
                <PasswordInput source="password" label="Confirmer mot de Passe"/>
            </SimpleForm>
        </Edit>
    );
}