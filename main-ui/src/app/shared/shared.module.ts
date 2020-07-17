import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopNotificationBarComponent } from './components/top-notification-bar/top-notification-bar.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';

@NgModule({
  declarations: [
      TopNotificationBarComponent,
      MainHeaderComponent,
      MainFooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
  exports: [
      TopNotificationBarComponent,
      MainHeaderComponent,
      MainFooterComponent
  ]

})
export class SharedModule { }
