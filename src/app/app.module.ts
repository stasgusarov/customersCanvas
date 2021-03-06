import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CciframeComponent } from './cc/cciframe/cciframe.component';
import { EmbeddedComponent } from './cc/embedded/embedded.component';

import { DesignEditorIframeModule } from 'projects/design-editor-iframe/src/public-api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CcNewappClientModule } from 'projects/cc-newapp-client/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    CciframeComponent,
    EmbeddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    DesignEditorIframeModule,
    CcNewappClientModule
  ],
  providers: [EmbeddedComponent, CciframeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
