import React from 'react';
import { Edit, EmailInput, SimpleForm, required } from 'react-admin';

const ProfileEdit = ({ staticContext, ...props }) => {
    return (
        <Edit
            redirect={false} // I don't need any redirection here, there's no list page
            {...props}
        >
            <SimpleForm>
                <EmailInput source="email" validate={required()} />
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