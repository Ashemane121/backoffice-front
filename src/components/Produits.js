import WorkIcon from '@material-ui/icons/Work';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import * as React from "react";
import {
  Button,
  Create, Datagrid,
  DeleteButton, Edit, EditButton, Link,
  List, NumberField, NumberInput,
  SimpleForm,
  TextField, TextInput,
  useAuthenticated,
  ShowButton,ListButton,Show,TopToolbar, TabbedShowLayout, TabbedShowLayoutTabs, Tab
} from 'react-admin';

export const ProduitsIcon = ShoppingCartIcon;

const AssocierButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/associations/create',
      search: `?source=${JSON.stringify({ produitId: record.id })}`,
    }}
  >
    <div>
      <WorkIcon />
    </div>
  </Button>
);

const ProduitShowNom = ({ record }) => {
  return <span>Produit  {record ? `"${record.nom}"` : ''}</span>;
};
const ProduitShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath="/produits" label="Produits" />
    <EditButton basePath="/produits" label="Modifier" record={data} />
    <DeleteButton basePath="/produits" label="Supprimer" record={data}  mutationMode="pessimistic"/>
  </TopToolbar>
);
export const ProduitShow = (props) => {
  useAuthenticated();
  return (
    <Show title={<ProduitShowNom />} actions={<ProduitShowActions />} {...props}>
      <TabbedShowLayout syncWithLocation={false} tabs={<TabbedShowLayoutTabs variant="scrollable" {...props} />}>
        <Tab label="Produit">
          <TextField source="id" label="ID Système" />
          <TextField source="nom" />
          <NumberField source="prix" />
        </Tab>
        
        <Tab label="Statistiques">

        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export const ProduitsList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ShowButton label="Afficher"/>
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
