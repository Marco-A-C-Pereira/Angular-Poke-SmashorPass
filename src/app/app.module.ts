import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadderComponent } from './components/shared/headder/headder.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { PokeTypeComponent } from './components/shared/poke-type/poke-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    FooterComponent,
    HomeComponent,
    TestCardComponent,
    PokeTypeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
