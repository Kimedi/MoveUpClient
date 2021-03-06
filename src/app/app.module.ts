import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActivityComponent } from './activity/activity.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PriceComponent } from './price/price.component';
import { ResourcesComponent } from './resources/resources.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NotificationComponent } from './component/notification/notification.component';
import { NotificationsComponent } from './component/notifications/notifications.component';

import {NotificationService} from "./service/notification/notification.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActivityComponent,
    GalleryComponent,
    PriceComponent,
    ResourcesComponent,
    TimetableComponent,
    NotificationComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
