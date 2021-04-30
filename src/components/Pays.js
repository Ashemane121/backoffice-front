import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  SimpleForm,
  TextInput,
  useAuthenticated
} from 'react-admin';

export const PaysIcon = ShoppingCartIcon;

export const PaysList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <EditButton basePath="/pays" />
        <DeleteButton basePath="/pays" />
      </Datagrid>
    </List>
  );
}


export const PaysEdit = (props) => {
  useAuthenticated();
  return (
    <Edit title="Modifier Pays" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
      </SimpleForm>
    </Edit>
  );
}

export const PaysCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Pays" {...props}>
      <SimpleForm>
      </SimpleForm>
    </Create>
  );
}
