import { Admin, Resource  } from 'react-admin';
import { Route } from "react-router";
import authProvider from './authProvider';
import { AgencesCreate, AgencesEdit, AgencesIcon, AgencesList } from './components/Agences';
import { AssociationCreate, AssociationEdit, AssociationIcon, AssociationList } from './components/Associations';
import { BureauxCreate, BureauxEdit, BureauxIcon, BureauxList, BureauxShow } from './components/Bureaux';
import { BanquesCreate, BanquesEdit, BanquesIcon, BanquesList, BanquesShow } from './components/Banques';
import { CoupuresCreate, CoupuresEdit, CoupuresIcon, CoupuresList } from './components/Coupures';
import { DevisesCreate, DevisesEdit, DevisesIcon, DevisesList, DevisesShow } from './components/Devises';
import { LigCaiBursCreate, LigCaiBursEdit, LigCaiBursIcon, LigCaiBursList } from './components/LigCaiBurs';
import MyLoginPage from './components/MyLoginPage';
import { PaysCreate, PaysEdit, PaysIcon, PaysList } from './components/Pays';
import { ProduitsCreate, ProduitsEdit, ProduitsIcon, ProduitsList } from './components/Produits';
import { UtiBureauCreate, UtiBureauEdit, UtiBureauIcon, UtiBureauList } from './components/Utibureaux';
import { UtilisateursCreate, UtilisateursEdit, UtilisateursIcon, UtilisateursList } from './components/Utilisateurs';
import myDataProvider from './dataProvider';
import Dashboard from './components/Dashboard';
import { ProfileEdit } from './components/Profile'
import MyLayout from './components/MyLayout';





function App() {

  return (
    <div>
      <Admin
        title="Insight+"
        dashboard={Dashboard}
        dataProvider={myDataProvider('http://localhost:5000')}
        authProvider={authProvider}
        loginPage={MyLoginPage}
        //logoutButton={MyLogoutButton}
        appLayout={MyLayout}
        
      >
        <Resource
          name='bureaux'
          show={BureauxShow}
          list={BureauxList}
          edit={BureauxEdit}
          create={BureauxCreate}
          icon={BureauxIcon}
          options={{ label: 'Bureaux' }}
        />
        <Resource
          name='utilisateurs'
          list={UtilisateursList}
          edit={UtilisateursEdit}
          create={UtilisateursCreate}
          icon={UtilisateursIcon}
          options={{ label: 'Utilisateurs' }}
        />
        <Resource
          name='uti-bureaux'
          list={UtiBureauList}
          edit={UtiBureauEdit}
          create={UtiBureauCreate}
          icon={UtiBureauIcon}
          options={{ label: 'Staff' }}
        />
        <Resource
          name='produits'
          list={ProduitsList}
          edit={ProduitsEdit}
          create={ProduitsCreate}
          icon={ProduitsIcon}
          options={{ label: 'Produits' }}
        />
        <Resource
          name='associations'
          list={AssociationList}
          edit={AssociationEdit}
          create={AssociationCreate}
          icon={AssociationIcon}
          options={{ label: 'Associer Produit' }}
        />
        <Resource
          name='ligcaiburs'
          list={LigCaiBursList}
          edit={LigCaiBursEdit}
          create={LigCaiBursCreate}
          icon={LigCaiBursIcon}
          options={{ label: 'Ligne Caisses Bureaux' }}
        />
        <Resource
          name='banques'
          show={BanquesShow}
          list={BanquesList}
          edit={BanquesEdit}
          create={BanquesCreate}
          icon={BanquesIcon}
          options={{ label: 'Banques' }}
        />
        <Resource
          name='agences'
          list={AgencesList}
          edit={AgencesEdit}
          create={AgencesCreate}
          icon={AgencesIcon}
          options={{ label: 'Agences' }}
        />
        <Resource
          name='devises'
          show={DevisesShow}
          list={DevisesList}
          edit={DevisesEdit}
          create={DevisesCreate}
          icon={DevisesIcon}
          options={{ label: 'Devises' }}
        />
        <Resource
          name='coupures'
          list={CoupuresList}
          edit={CoupuresEdit}
          create={CoupuresCreate}
          icon={CoupuresIcon}
          options={{ label: 'Coupures' }}
        />
        <Resource
          name='pays'
          list={PaysList}
          edit={PaysEdit}
          create={PaysCreate}
          icon={PaysIcon}
          options={{ label: 'Pays' }}
        />
        <Resource name="users"
          edit={ProfileEdit}
        />
      </Admin>
      {console.log(localStorage.getItem('decodedToken'))}
    </div>

  );
}

export default App;
