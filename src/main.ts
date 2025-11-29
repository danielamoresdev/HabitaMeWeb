import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Router } from '@angular/router';

bootstrapApplication(App, appConfig)
  .then(appRef => {
    const router = appRef.injector.get(Router);
    
    router.events.subscribe(() => {
      const fragment = router.routerState.snapshot.root.fragment;
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    });
  })
  .catch((err) => console.error(err));
