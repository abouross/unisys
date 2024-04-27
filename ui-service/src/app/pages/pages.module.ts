import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayoutComponent } from './layout/layout.component';
import {
  NbActionsModule,
  NbContextMenuModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule, NbSidebarModule, NbSpinnerModule,
  NbUserModule
} from "@nebular/theme";
import {NbEvaIconsModule} from "@nebular/eva-icons";


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    NbActionsModule,
    NbUserModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbSpinnerModule,
    NbSidebarModule.forRoot(),
    NgOptimizedImage
  ]
})
export class PagesModule { }
