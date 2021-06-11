import * as React from "react";
import { Title } from 'react-admin';
import {Link} from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import Logo from './icons/insight.png';
import iconBureau from './icons/bureau.png';
import iconProduit from './icons/produit.png';
import iconUser from './icons/user.png';
import iconBanque from './icons/banque.png';
import iconDevise from './icons/devise.png';
import iconPays from './icons/pays.png';
import forex from './icons/forex.jpg';

export default () => (
    <div>
    <Title title="Home" />
        <div class="row">
            <div class="col-5 col-md-3">
                <div className="dash-aside">
                    <div className="image"><img src={Logo} alt="nope"/></div>
                    <div className="img-forex"><img src={forex} alt="nope"/></div>
                    <h5>Dashboard Administrateur de Insight+</h5>
                    <p>Vous pouvez commencer à gérer vos données
                        
                    </p>

                </div>
                
            </div>
            <div class="col-7 col-md-9">
                <div class=" d-flex flex-wrap">
                <Link href="#/bureaux" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconBureau}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Bureaux de Changes</h3>
                            <p>Total : 2</p>
                        </div>
                    </div>
                </Link>
                <Link href="#/produits" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconProduit}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Produits</h3>
                            <p>Total : 2</p>
                        </div>
                    </div>
                </Link>
                <Link href="#/utilisateurs" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconUser}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Utilisateurs</h3>
                            <p>Total : 6</p>
                        </div>
                    </div>
                </Link>
                <Link href="#/devises" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconDevise}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Devises</h3>
                            <p>Total : 6</p>
                        </div>
                    </div>
                </Link>
                <Link href="#/banques" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconBanque}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Banques</h3>
                            <p>Total : 4</p>
                        </div>
                    </div>
                </Link>
                <Link href="#/pays" underline="none">
                    <div className="dash-item">
                        <div className="dash-item-logo">
                            <img src={iconPays}/>
                        </div>
                        <div className="dash-item-body">
                            <h3>Pays</h3>
                            <p>Total : 6</p>
                        </div>
                    </div>
                </Link>
                </div>

            </div>
            

        </div>
        
    </div>
);