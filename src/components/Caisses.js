import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalAtm from '@material-ui/icons/LocalAtm';
import * as React from "react";
import {
  BooleanField,
  ChipField, Datagrid,
  List, NumberField,
  ReferenceField, TextField,
  useAuthenticated
} from 'react-admin';

export const CaissesIcon = LocalAtm;

export const CaissesList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="nom" />
        <NumberField source="money" />
        <BooleanField source="active" />
        <ReferenceField label="Bureau" source="bureauId" reference="bureaux">
          <ChipField source="name" avatar={AccountCircleIcon} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
}


