import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import StoreIcon from '@material-ui/icons/Store';
import * as React from "react";
import {
  Create, Datagrid,Button, Link, TopToolbar, ListButton,Show,
  DeleteButton, Edit, EditButton,
  List,ReferenceManyField,ShowButton,
  SimpleForm,Tab, TabbedShowLayout, TabbedShowLayoutTabs,
  TextInput,TextField,
  useAuthenticated
} from 'react-admin';

export const BanquesIcon = AccountBalanceIcon;

const CreateAgenceButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/agences/create',
      search: `?source=${JSON.stringify({ banqueId: record.id })}`,
    }}
  >
    <div style={{ width: '200px' }}>
      <StoreIcon />
      <span style={{ fontSize: '12px', position: 'relative', bottom: '7px', left: '5px' }}>
        Ajouter une Agence
      </span>
    </div>
  </Button>
);
const BanquesShowNom = ({ record }) => {
  return <span>Bureau  {record ? `"${record.nombureau}"` : ''}</span>;
};
const BanquesShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath="/banques" label="Banques" />
    <EditButton basePath="/banques" label="Modifier" record={data} />
    <DeleteButton basePath="/banques" label="Supprimer" record={data} mutationMode="pessimistic"/>
  </TopToolbar>
);
export const BanquesShow = (props) => {
  useAuthenticated();
  return (
    <Show title={<BanquesShowNom />} actions={<BanquesShowActions />} {...props}>
      <TabbedShowLayout syncWithLocation={false} tabs={<TabbedShowLayoutTabs variant="scrollable" {...props} />}>
        <Tab label="Banque">
          <TextField source="id" label="ID Système" />
          <TextField source="nom" label="Nom Banque" />
          <TextField source="code" label="Code Banque" />
        </Tab>
        <Tab label="Agences">
          <ReferenceManyField label="Agences" reference="agences" target="banqueId">
            <Datagrid fullWidth>
              <TextField source="adresse" />
              <EditButton basePath="/agences" label="Modifier" />
              <DeleteButton basePath="/agences" label="Supprimer" mutationMode="pessimistic"/>
            </Datagrid>
          </ReferenceManyField>
          <CreateAgenceButton />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export const BanquesList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ShowButton label="Afficher" />
        <TextField source="nom" label="Nom" />
        <TextField source="code" label="Code" />
        <EditButton basePath="/banques" label="Modifier"/>
        <DeleteButton basePath="/banques" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const BanquesEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Banque" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" fullWidth/>
        <TextInput source="nom" label="Nom" fullWidth/>
        <TextInput source="code" label="Code" fullWidth/>
      </SimpleForm>
    </Edit>
  );
}

export const BanquesCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Banque" {...props}>
      <SimpleForm>
        <TextInput source="nom" label="Nom" fullWidth/>
        <TextInput source="code" label="Code" fullWidth/>
      </SimpleForm>
    </Create>
  );
}
