import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  NumberField,
  NumberInput,
  ReferenceField,
  ReferenceInput, SelectInput,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';


export const LigCaiBursIcon = MonetizationOnIcon;

export const LigCaiBursList = (props) => {
  useAuthenticated();
  return (
    <List title="Lignes Caisses des Bureaux de changes"{...props}>
      <Datagrid>
        <TextField source="devise" label="Devise" />
        <NumberField source="montant" label="Montant" />
        <ReferenceField label="Bureau" source="bureauId" reference="bureaux" link="show">
          <TextField source="nombureau" />
        </ReferenceField>
        <EditButton basePath="/ligcaiburs" label="Modifier" />
        <DeleteButton basePath="/ligcaiburs" label="Supprimer" mutationMode="pessimistic" />
      </Datagrid>
    </List>
  );
}

const choices = [
  { name: 'Dinar Tunisien' },
  { name: 'Euro' },
  { name: 'Pound' },
  { name: 'Dollar' },
];

export const LigCaiBursEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Ligne Caisse de Bureau de Change" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <SelectInput source="devise" label="Devise" fullWidth
          choices={choices} optionText={choice => `${choice.name}`} optionValue="name"
        />
        <NumberInput source="montant" label="Montant" fullWidth />
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth>
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
      </SimpleForm>
    </Edit>
  );
}

export const LigCaiBursCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Ligne Caisse de Bureau de Change" {...props}>
      <SimpleForm>
        <SelectInput source="devise" label="Devise" fullWidth
          choices={choices} optionText={choice => `${choice.name}`} optionValue="name"
        />
        <NumberInput source="montant" label="Montant" fullWidth />
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth>
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
      </SimpleForm>
    </Create>
  );
}
