import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List, ReferenceField,
  ReferenceInput, SelectInput, SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';

export const UtiBureauIcon = AssignmentIndIcon;

export const UtiBureauList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label="Bureau" source="bureauId" reference="bureaux" link="show">
          <TextField source="nombureau" />
        </ReferenceField>
        <ReferenceField label="Utilisateur" source="utilisateurId" reference="utilisateurs">
          <TextField source="username" />
        </ReferenceField>
        <EditButton basePath="/uti-bureaux" label="Modifier"/>
        <DeleteButton basePath="/uti-bureaux" label="Supprimer" mutationMode="pessimistic" />
      </Datagrid>
    </List>
  );
}


export const UtiBureauEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Edit Utilisateur Bureau" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth>
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
        <ReferenceInput label="Utilisateur" source="utilisateurId" reference="utilisateurs" fullWidth>
          <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput source="utilisateurId" label="Utilisateur ID" fullWidth disabled />
      </SimpleForm>
    </Edit >
  );
}

export const UtiBureauCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Create Utilisateur Bureau" {...props}>
      <SimpleForm>
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth >
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
        <ReferenceInput label="Utilisateur" source="utilisateurId" reference="utilisateurs" fullWidth>
          <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput source="utilisateurId" label="Utilisateur ID" fullWidth disabled />
      </SimpleForm>
    </Create>
  );
}
