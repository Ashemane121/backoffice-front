import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import * as React from "react";
import {
  Create, Datagrid,

  DateField, DateInput,
  DeleteButton, Edit, EditButton,
  List, NumberField, NumberInput, ReferenceField,
  ReferenceInput, SelectInput, SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';

export const AssociationIcon = AddShoppingCartIcon;

export const AssociationList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ReferenceField label="Bureau" source="bureauId" reference="bureaux">
          <TextField source="nombureau" />
        </ReferenceField>
        <ReferenceField label="Produit" source="produitId" reference="produits">
          <TextField source="nom" />
        </ReferenceField>
        <ReferenceField label="Prix" source="produitId" reference="produits" link={false}>
          <NumberField source="prix" />
        </ReferenceField>
        <TextField label="Remise" source="remise" />
        <DateField label="Date d'échéance" source="dateecheance" />
        <EditButton basePath="/associations" label ="Modifier"/>
        <DeleteButton basePath="/associations" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const AssociationEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Association" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth>
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
        <ReferenceInput label="Produit" source="produitId" reference="produits" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.prix}DT`} />
        </ReferenceInput>
        <TextInput source="produitId" label="Produit ID" fullWidth disabled />
        <NumberInput source="remise" label="Remise" fullWidth placeholder="exemple : 20%" />
        <DateInput source="dateecheance" label="Date d'écheance" fullWidth />
      </SimpleForm>
    </Edit >
  );
}

export const AssociationCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Associer un produit à un bureau" {...props}>
      <SimpleForm>
        <ReferenceInput label="Bureau" source="bureauId" reference="bureaux" fullWidth>
          <SelectInput optionText="nombureau" />
        </ReferenceInput>
        <TextInput source="bureauId" label="Bureau ID" fullWidth disabled />
        <ReferenceInput label="Produit" source="produitId" reference="produits" fullWidth>
          <SelectInput optionText={record => `${record.nom}, ${record.prix}DT`} />
        </ReferenceInput>
        <TextInput source="produitId" label="Produit ID" fullWidth disabled />
        <NumberInput source="remise" label="Remise" fullWidth placeholder="exemple : 20%" />
        <DateInput source="dateecheance" label="Date d'écheance" fullWidth />
      </SimpleForm>
    </Create>
  );
}
