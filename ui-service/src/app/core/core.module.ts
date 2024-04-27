import {LOCALE_ID, ModuleWithProviders, NgModule, Optional, Provider, SkipSelf} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {LayoutService} from "./services/layout-service.service";

const throwIfAlreadyLoaded = (parentModule: any, moduleName: string) => {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}

const DATA_SERVICES: Provider[] = [LayoutService];
export const CORE_PROVIDERS: Provider[] = [
  ...DATA_SERVICES,
  {
    provide: LOCALE_ID,
    useValue: 'fr'
  }
]

@NgModule({
  declarations: [],
  imports: [],
  exports: [HttpClientModule]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
      ],
    };
  }
}

