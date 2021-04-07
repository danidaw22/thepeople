import { UploadNewComponent } from './upload-new/upload-new.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { PeopleComponent } from './people/people.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "search", component: SearchComponent },
  { path: "detail/:id", component: PeopleComponent },
  { path: "404", component: NotFoundComponent },
  { path:"upload-new", component:UploadNewComponent},
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
