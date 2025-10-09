import { Routes } from '@angular/router';
import { About } from './about/about';
import { App } from './app';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';
import { Home } from './home/home';
import { User } from './user/user';
import { Profile } from './profile/profile';
import { Signup } from './signup/signup';
import { ParentComponent } from './parent-component/parent-component';
import { ProductsPage } from './products-page/products-page';

export const routes: Routes = [
    {path:"", component: Home},
    {path:"about", component: About},
    {path:"service", component: Services},
    {path:"contact", component: Contact},
    {path:"user/:id", component: User},
    {path:"profile", component: Profile},
    {path:"signup", component: Signup},
    {path:"parentChild", component: ParentComponent},
    {path:"products", component: ProductsPage},
    {path:"**", component: PageNotFound},

];
