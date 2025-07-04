import { ApplicationConfig } from '@angular/core';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: []
};

export const config = Object.assign({}, appConfig, serverConfig);
