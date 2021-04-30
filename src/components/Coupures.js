import MoneyIcon from '@material-ui/icons/Money';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  SimpleForm,
  TextField,NumberField,ReferenceField,
  TextInput,ReferenceInput,NumberInput,SelectInput,
  useAuthenticated
} from 'react-admin';

export const CoupuresIcon = MoneyIcon;

export const CoupuresList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="nom" label="Nom"/>
        <NumberField source="valeur" label="Valeur"/>
        <ReferenceField label="Devise" source="deviseId" reference="devises" link={false}>
          <TextField source="nom"/>
        </ReferenceField>
        <EditButton basePath="/coupures" label="Modifier"/>
        <DeleteButton basePath="/coupures" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const CoupuresEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Coupure" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nom" label="Nom" fullWidth />
        <NumberInput source="valeur" label="Valeur" fullWidth />
        <ReferenceInput label="Devise" source="deviseId" reference="devises" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.code}`} />
        </ReferenceInput>
        <TextInput source="deviseId" label="Devise ID" fullWidth disabled />
      </SimpleForm>
    </Edit>
  );
}

export const CoupuresCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Coupure" {...props}>
      <SimpleForm><TextInput source="nom" label="Nom" fullWidth />
        <NumberInput source="valeur" label="Valeur" fullWidth />
        <ReferenceInput label="Devise" source="deviseId" reference="devises" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.code}`} />
        </ReferenceInput>
        <TextInput source="deviseId" label="Devise ID" fullWidth disabled />
      </SimpleForm>
    </Create>
  );
}
