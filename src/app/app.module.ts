import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { ContentComponent } from './home/content/content.component';


import { FormsModule } from '@angular/forms';
import { MydirectiveDirective } from './mydirective.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppPipePipe } from './app-pipe.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ClientComponent } from './client/client.component';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { EmployeComponent } from './employe/employe.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ReportingComponent } from './reporting/reporting.component';

const routes: Routes= [
{path : 'client' , component:ClientComponent} ,
{path : 'liste-client' , component:ListeClientComponent},
{path : 'liste-produit' , component:ListeProduitComponent},
{path : 'produit' , component:ProduitComponent},
{path : 'employe' , component:EmployeComponent},
{path : 'liste-employe' , component:ListeEmployeComponent} ,
{path : 'categorie' , component:CategorieComponent},
{path : 'reporting' , component:ReportingComponent}

]
  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    MydirectiveDirective,
    AppPipePipe,
    ClientComponent,
    ListeClientComponent,
    ListeProduitComponent,
    ProduitComponent,
    EmployeComponent,
    ListeEmployeComponent,
    CategorieComponent,
    ReportingComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
