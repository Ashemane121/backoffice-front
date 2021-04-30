import FlagIcon from '@material-ui/icons/Flag';
import * as React from "react";
import {
  Create, Datagrid,
  DeleteButton, Edit, EditButton,
  ImageInput,ImageField,
  List,
  SimpleForm,
  TextField,
  TextInput,
  useAuthenticated
} from 'react-admin';
import './Styles.css';

export const PaysIcon = FlagIcon;

export const PaysList = (props) => {
  useAuthenticated();
  return (
    <List {...props}>
      <Datagrid>
        <ImageField label="Drapeau" source="drapeau.src" title="nom" className="flag"/>
        <TextField label="Nom" source="nom" />
        <TextField label="Code Iso Numérique" source="codeisonum"/>
        <TextField label="Code Iso Alphanumérique" source="codeisoalpha"/>
        <EditButton basePath="/pays" label="Modifier"/>
        <DeleteButton basePath="/pays" label="Supprimer" mutationMode="pessimistic"/>
      </Datagrid>
    </List>
  );
}


export const PaysEdit = (props) => {
  useAuthenticated();
  return (
    <Edit mutationMode="pessimistic" title="Modifier Pays" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" fullWidth/>
        <TextInput label="Nom" source="nom" fullWidth/> 
        <ImageInput label="Dreapeau" source="drapeau" accept="image/*" placeholder={<p>Choisir l'image du Dreapeau</p>}>
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput label="Code Iso Numérique" source="codeisonum" fullWidth/>
        <TextInput label="Code Iso Alphanumérique" source="codeisoalpha" fullWidth/>
      </SimpleForm>
    </Edit>
  );
}

export const PaysCreate = (props) => {
  useAuthenticated();
  return (
    <Create title="Créer Pays" {...props}>
      <SimpleForm>
        <TextInput label="Nom" source="nom" fullWidth/> 
        <ImageInput label="Dreapeau" source="drapeau" accept="image/*" placeholder={<p>Choisir l'image du Dreapeau</p>}>
          <ImageField source="src" title="title" />
        </ImageInput>
        <TextInput label="Code Iso Numérique" source="codeisonum" fullWidth/>
        <TextInput label="Code Iso Alphanumérique" source="codeisoalpha" fullWidth/>
      </SimpleForm>
    </Create>
  );
}
