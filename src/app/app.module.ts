import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [ NativeScriptModule, AppRoutingModule, HttpClientModule ],
	declarations: [ AppComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule {}
