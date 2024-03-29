import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import WorkIcon from '@material-ui/icons/Work';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import * as React from "react";
import {
  BooleanField,
  BooleanInput,
  Button,
  Create, Datagrid,
  DateField,
  DeleteButton, Edit, EditButton, Link,
  List, ListButton, NumberField, ReferenceField, ReferenceManyField, Show,
  ShowButton,
  SimpleForm, Tab, TabbedShowLayout, TabbedShowLayoutTabs,
  TextField, TextInput,
  TopToolbar,
  useAuthenticated
} from 'react-admin';



export const BureauxIcon = WorkIcon;

const CreateUserButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/uti-bureaux/create',
      search: `?source=${JSON.stringify({ bureauId: record.id })}`,
    }}
  >
    <div>
      <PersonAddIcon />
    </div>
  </Button>
);

const CreateLigCaiBurButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/ligcaiburs/create',
      search: `?source=${JSON.stringify({ bureauId: record.id })}`,
    }}
  >
    <div style={{ width: '200px' }}>
      <MonetizationOnIcon />
      <span style={{ fontSize: '12px', position: 'relative', bottom: '7px', left: '5px' }}>
        Ajouter une Ligne Caisse
      </span>
    </div>
  </Button>
);

const AssocierButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/associations/create',
      search: `?source=${JSON.stringify({ bureauId: record.id })}`,
    }}
  >
    <div>
      <AddShoppingCartIcon />
    </div>
  </Button>
);
const BureauxShowNom = ({ record }) => {
  return <span>Bureau  {record ? `"${record.nombureau}"` : ''}</span>;
};
const BureauxShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath="/bureaux" label="Bureaux" />
    <EditButton basePath="/bureaux" label="Modifier" record={data} />
    <DeleteButton basePath="/bureaux" label="Supprimer" record={data}  mutationMode="pessimistic"/>
  </TopToolbar>
);
export const BureauxShow = (props) => {
  useAuthenticated();
  return (
    <Show title={<BureauxShowNom />} actions={<BureauxShowActions />} {...props}>
      <TabbedShowLayout syncWithLocation={false} tabs={<TabbedShowLayoutTabs variant="scrollable" {...props} />}>
        <Tab label="Bureau">
          <TextField source="id" label="ID Système" />
          <TextField source="idbct" label="ID BCT" />
          <TextField source="nombureau" label="Nom Bureau" />
          <TextField source="adresse" label="Adresse" />
        </Tab>
        <Tab label="Chef de Bureau">
          <TextField source="nom" label="Nom" />
          <TextField source="prenom" label="Prenom" />
          <TextField source="email" label="Email" />
          <TextField source="cin" label="CIN" />
          <TextField source="mdp" label="Mot de Passe" type="password" />
        </Tab>
        <Tab label="Caisse">
          <BooleanField source="actif" />
          <BooleanField source="visible" />
        </Tab>
        <Tab label="Ligne Caisses">
          <ReferenceManyField label="Lignes Caisses" reference="ligcaiburs" target="bureauId">
            <Datagrid fullWidth>
              <ReferenceField label="Devise" source="deviseId" reference="devises" link={false}>
                <TextField source="nom" />
              </ReferenceField>
              <NumberField source="montant" />
              <EditButton basePath="/ligcaiburs" label="Modifier" />
              <DeleteButton basePath="/ligcaiburs" label="Supprimer"  mutationMode="pessimistic"/>
            </Datagrid>
          </ReferenceManyField>
          
          <CreateLigCaiBurButton />
        </Tab>
        <Tab label="Statistiques">
        <ReferenceManyField label="Statistiques" reference="stats" target="bureauId">
            <Datagrid fullWidth>
              <ReferenceField label="Produit" source="associationId" reference="associations" link={false}>
                <ReferenceField source="produitId" reference="produits">
                  <TextField source="nom" />
                </ReferenceField>
              </ReferenceField>
              <ReferenceField label="Prix" source="associationId" reference="associations" link={false}>
                <ReferenceField source="produitId" reference="produits" link={false}>
                  <NumberField source="prix" />
                </ReferenceField>
              </ReferenceField>
              <ReferenceField label="Date d'échéance" source="associationId" reference="associations" link={false}>
                <DateField source="dateecheance"/>
              </ReferenceField>
              <ReferenceField label="Remise" source="associationId" reference="associations" link={false}>
                <TextField source="remise" />
              </ReferenceField>
              <BooleanField source="datevalide" label="Payé à l'avance"/>
            </Datagrid>
          </ReferenceManyField>

        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export const BureauxList = (props) => {
  useAuthenticated();
  return (
    <List title="Bureaux de changes"{...props}>
      <Datagrid>
        <ShowButton label="Afficher"/>
        <TextField source="idbct" label="ID BCT" />
        <TextField source="nombureau" label="Nom Bureau" />
        <TextField source="nom" label="Responsable" />
        <TextField source="prenom" label="Prenom" />
        <BooleanField source="actif" />
        <CreateUserButton label="Utilisateurs" />
        <AssocierButton label="Produits" />
        <EditButton basePath="/bureaux" label="Modifier" />
        <DeleteButton basePath="/bureaux" label="Supprimer"  mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const BureauxEdit = (props) => {
  useAuthenticated();
  return (
    <Edit  mutationMode="pessimistic" title="Modifier Bureau de Change" {...props}>
      <SimpleForm>
        <TextInput source="id" disabled fullWidth />
        <TextInput source="idbct" label="ID BCT" fullWidth />
        <TextInput source="adresse" label="Adresse" fullWidth />
        <TextInput source="nombureau" label="Nom Bureau" fullWidth />
        <TextInput source="nom" label="Nom" fullWidth />
        <TextInput source="prenom" label="Prenom" fullWidth />
        <TextInput source="email" label="Email" fullWidth type="email" />
        <TextInput source="mdp" label="MDP" fullWidth type="password" />
        <TextInput source="cin" label="CIN" fullWidth />
        <BooleanInput source="actif" />
        <BooleanInput source="visible" />
      </SimpleForm>
    </Edit>
  );
}

export const BureauxCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Bureau de Change" {...props}>
      <SimpleForm>
        <TextInput source="idbct" label="ID BCT" fullWidth />
        <TextInput source="adresse" label="Adresse" fullWidth />
        <TextInput source="nombureau" label="Nom Bureau" fullWidth />
        <TextInput source="nom" label="Nom" fullWidth />
        <TextInput source="prenom" label="Prenom" fullWidth />
        <TextInput source="email" label="Email" fullWidth type="email" />
        <TextInput source="mdp" label="MDP" fullWidth type="password" />
        <TextInput source="cin" label="CIN" fullWidth />
        <BooleanInput source="actif" />
        <BooleanInput source="visible" />
      </SimpleForm>
    </Create>
  );
}
