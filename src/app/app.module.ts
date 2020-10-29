import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { YellowDirective } from './diretivas/yellow.directive';
import { HighlightMouseDirective } from './diretivas/highlight-mouse.directive';
import { HighlightCustomizavelDirective } from './diretivas/highlight-customizavel.directive';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    DiretivasComponent,
    YellowDirective,
    HighlightMouseDirective,
    HighlightCustomizavelDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
