import AccountBoxIcon from '@material-ui/icons/AccountBox';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';

export const UtilisateursIcon = AccountBoxIcon;

export const UtilisateursList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="ref" label="Réference" />
        <TextField source="username" label="Username" />
        <TextField source="nom" label="Nom" />
        <TextField source="prenom" label="Prenom" />
        <TextField source="email" label="Email" />
        <TextField source="cin" label="CIN" />
        <EditButton basePath="/utilisateurs" label="Modifier"/>
        <DeleteButton basePath="/utilisateurs" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const UtilisateursEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Edit bureau" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="ref" label="Réference" fullWidth />
        <TextInput source="username" label="Username" fullWidth />
        <TextInput source="nom" label="Nom" fullWidth />
        <TextInput source="prenom" label="Prenom" fullWidth />
        <TextInput source="email" label="Email" fullWidth type="email" />
        <TextInput source="cin" label="CIN" fullWidth />
      </SimpleForm>
    </Edit>
  );
}

export const UtilisateursCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Create bureau" {...props}>
      <SimpleForm>
        <TextInput source="ref" label="Réference" fullWidth />
        <TextInput source="username" label="Username" fullWidth />
        <TextInput source="nom" label="Nom" fullWidth />
        <TextInput source="prenom" label="Prenom" fullWidth />
        <TextInput source="email" label="Email" fullWidth type="email" />
        <TextInput source="cin" label="CIN" fullWidth />
      </SimpleForm>
    </Create>
  );
}
