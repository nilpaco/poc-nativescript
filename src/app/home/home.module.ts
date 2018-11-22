import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { CoreModule } from 'core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

@NgModule({
	imports: [ NativeScriptCommonModule, HomeRoutingModule, CoreModule ],
	declarations: [ HomeComponent ],
	schemas: [ NO_ERRORS_SCHEMA ]
})
export class HomeModule {}
