import { Routes } from '@angular/router';
import { About } from './about/about';
import { App } from './app';
import { Services } from './services/services';
import { Contact } from './contact/contact';
import { PageNotFound } from './page-not-found/page-not-found';
import { Home } from './home/home';
import { User } from './user/user';

export const routes: Routes = [
    {path:"", component: Home},
    {path:"about", component: About},
    {path:"service", component: Services},
    {path:"contact", component: Contact},
    {path:"user/:id", component: User},

    {path:"**", component: PageNotFound},

];
