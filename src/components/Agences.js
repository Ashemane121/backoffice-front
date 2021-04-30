import StoreIcon from '@material-ui/icons/Store';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  ReferenceField,
  ReferenceInput, SelectInput,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';


export const AgencesIcon = StoreIcon;

export const AgencesList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label="Nom de la Banque" source="banqueId" reference="banques" link="show">
          <TextField source="nom"/>
        </ReferenceField>
        <ReferenceField label="Code de la Banque" source="banqueId" reference="banques" link={false}>
          <TextField source="code"/>
        </ReferenceField>
        <TextField source="adresse" label="Adresse de l'Agence" />
        <EditButton basePath="/agences" label="Modifier" />
        <DeleteButton basePath="/agences" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const AgencesEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier une Agence" {...props} >
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <ReferenceInput label="Banque" source="banqueId" reference="banques" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.code}`} />
        </ReferenceInput>
        <TextInput source="banqueId" label="Banque ID" fullWidth disabled />
        <TextInput source="adresse" label="Adresse" fullWidth />
      </SimpleForm>
    </Edit>
  );
}

export const AgencesCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Ajouter une Agence" {...props}>
      <SimpleForm>
        <ReferenceInput label="Banque" source="banqueId" reference="banques" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.code}`} />
        </ReferenceInput>
        <TextInput source="banqueId" label="Banque ID" fullWidth disabled />
        <TextInput source="adresse" label="Adresse" fullWidth />
      </SimpleForm>
    </Create>
  );
}
