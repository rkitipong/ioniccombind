import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { CoursePage } from '../../pages/course/course';
import { ServicePage } from '../../pages/service/service';
import { ArticlePage } from '../../pages/article/article';
import { ContactPage } from '../../pages/contact/contact';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
