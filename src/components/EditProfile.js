import React from 'react';
import { Edit, EmailInput, SimpleForm, required, PasswordInput, TextInput, ImageInput, ImageField } from 'react-admin';

const ProfileEdit = ({ staticContext, ...props }) => {
    return (
        <Edit
            redirect={false} // I don't need any redirection here, there's no list page
            {...props}
        >
            <SimpleForm>
                <EmailInput source="email" validate={required()} />
                <TextInput label="Username" source="username" validate={required()}/>
                <ImageInput label="Avatar" source="additionalProp1" accept="image/*" placeholder={<p>Choisir Avatar</p>}>
                    <ImageField source="src" title="title" />
                </ImageInput>
                <PasswordInput source="password" label="Mot de Passe"/>
                <PasswordInput source="password" label="Confirmer mot de Passe"/>
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;

// in profile/index.js
import ProfileEdit from './ProfileEdit';

export default {
    edit: ProfileEdit
};