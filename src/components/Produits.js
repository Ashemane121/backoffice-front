import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as React from "react";
import {
  Button,
  Create, Datagrid,
  DeleteButton, Edit, EditButton, Link,
  List, NumberField, NumberInput,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated
} from 'react-admin';

const AssocierButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/associations/create',
      search: `?source=${JSON.stringify({ produitId: record.id })}`,
    }}
  >
    <div>
      <AccountBalanceIcon />
    </div>
  </Button>
);

export const ProduitsIcon = ShoppingCartIcon;

export const ProduitsList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="nom" />
        <NumberField source="prix" />
        <AssocierButton label="Associer à un Bureau" />
        <EditButton basePath="/produits" label="Modifier" />
        <DeleteButton basePath="/produits" label="Supprimer"  mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const ProduitsEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Produit" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nom" />
        <NumberInput source="prix" />
      </SimpleForm>
    </Edit>
  );
}

export const ProduitsCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Create bureau" {...props}>
      <SimpleForm>
        <TextInput source="nom" />
        <NumberInput source="prix" />
      </SimpleForm>
    </Create>
  );
}
