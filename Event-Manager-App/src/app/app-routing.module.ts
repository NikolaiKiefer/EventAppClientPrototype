import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MediaGalleryComponent } from './media-gallery/media-gallery.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'gallery', component: MediaGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
