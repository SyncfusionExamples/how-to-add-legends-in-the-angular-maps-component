import { bootstrapApplication } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { AppComponent } from './app/app.component';

registerLicense("ORg4AjUWIQA/Gnt2V1hhQlJAfVhdXGdWfFN0RnNYfVR1cV9HZ0wxOX1dQl9gSXhRcUVgWH9dcH1VQmk=");

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
