import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@application/modules/app/app.module';
import { ENVIRONMENT } from '../../environments/environment';

if (ENVIRONMENT.production) enableProdMode();

platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((err: Error) => {
		throw err;
	});

