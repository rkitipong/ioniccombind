import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CoursePage } from '../course/course';
import { ServicePage } from '../service/service';
import { ContactPage } from '../contact/contact';
import { ArticlePage } from '../article/article';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root:any = HomePage;
  tab2Root:any = CoursePage;
  tab3Root:any = ServicePage;
  tab4Root:any = ArticlePage;
  tab5Root:any = ContactPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
