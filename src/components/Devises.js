import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoneyIcon from '@material-ui/icons/Money';
import * as React from "react";
import {
  Button,Link,TopToolbar,ListButton,Show,TabbedShowLayout,TabbedShowLayoutTabs,Tab,ReferenceManyField,NumberField,
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  List,
  SimpleForm,ShowButton,
  TextInput,TextField,
  useAuthenticated
} from 'react-admin';

export const DevisesIcon = AttachMoneyIcon;

const CreateCoupureButton = ({ record }) => (
  <Button
    component={Link}
    to={{
      pathname: '/coupures/create',
      search: `?source=${JSON.stringify({ deviseId: record.id })}`,
    }}
  >
    <div style={{ width: '200px' }}>
      <MoneyIcon />
      <span style={{ fontSize: '12px', position: 'relative', bottom: '7px', left: '5px' }}>
        Ajouter une Coupure
      </span>
    </div>
  </Button>
);
const DevisesShowNom = ({ record }) => {
  return <span>{record ? `"${record.nom}"` : ''}</span>;
};
const DevisesShowActions = ({ basePath, data, resource }) => (
  <TopToolbar>
    <ListButton basePath="/devises" label="Devises" />
    <EditButton basePath="/devises" label="Modifier" record={data} />
    <DeleteButton basePath="/devises" label="Supprimer" record={data} mutationMode="pessimistic"/>
  </TopToolbar>
);
export const DevisesShow = (props) => {
  useAuthenticated();
  return (
    <Show title={<DevisesShowNom />} actions={<DevisesShowActions />} {...props}>
      <TabbedShowLayout syncWithLocation={false} tabs={<TabbedShowLayoutTabs variant="scrollable" {...props} />}>
        <Tab label="Coupures">
          <ReferenceManyField label="Coupures" reference="coupures" target="deviseId">
            <Datagrid fullWidth>
              <TextField source="nom" label="Nom"/>
              <NumberField source="valeur" label="Valeur"/>
              <EditButton basePath="/coupures" label="Modifier" />
              <DeleteButton basePath="/coupures" label="Supprimer" mutationMode="pessimistic"/>
            </Datagrid>
          </ReferenceManyField>
          <CreateCoupureButton />
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
}

export const DevisesList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="nom" label="Nom" />
        <TextField source="code" label="Code" />
        <ShowButton label="Coupures" />
        <EditButton basePath="/devises" label="Modifier"/>
        <DeleteButton basePath="/devises"  label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const DevisesEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Devise" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="nom" label="Nom" />
        <TextInput source="code" label="Code" />
      </SimpleForm>
    </Edit>
  );
}

export const DevisesCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Devise" {...props}>
      <SimpleForm>
        <TextInput source="nom" label="Nom" />
        <TextInput source="code" label="Code" />
      </SimpleForm>
    </Create>
  );
}
