import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';

import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,Button,Link,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';

export const UtilisateursIcon = AccountBoxIcon;
const AssocierButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/utibureaux/create',
      search: `?source=${JSON.stringify({ utilisateurId: record.id })}`,
    }}
  >
    <div>
      <WorkIcon />
    </div>
  </Button>
);
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
        <AssocierButton label="Associer" />
        <EditButton basePath="/utilisateurs" label="Modifier"/>
        <DeleteButton basePath="/utilisateurs" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const UtilisateursEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier utilisateur" {...props}>
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
    <Create title="Créer un nouvel utilisateur" {...props}>
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
