import { Component, OnInit } from '@angular/core';

import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/auth/authentication.service';
import { Usuario } from './models/usuario';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
// import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { FCM } from '@ionic-native/fcm/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public usuario: Usuario;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Meus Dados',
      url: '/meudados',
      icon: 'create'
    },
    {
      title: 'Histórico',
      url: '/historico',
      icon: 'time'
    },
    {
      title: 'Notificações',
      url: '/historiconotificacao',
      icon: 'paper-plane'
    },
    {
      title: 'Suporte',
      url: '/suporte',
      icon: 'headset'
    },
    {
      title: 'Configurações',
      url: '/confignotificacao',
      icon: 'construct'
    },
    {
      title: 'Ecotres',
      url: '/ecotres',
      icon: 'link'
    }
  ];
  public labels = ['Sair', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: ActivatedRoute,
    private routerComponent: Router,
    private auth: AuthenticationService,
    public iab: InAppBrowser,
    // public firebaseX: FirebaseX,
    private firebase: Firebase,
    public alertController: AlertController,
    public geolocation: Geolocation,
    public menuCtrl: MenuController


  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.auth.currentUser
      .subscribe(arg => {
        this.usuario = arg;

      });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.routerComponent.navigate(['/login']);
      if (this.auth.hasSession()) {
        this.usuario = this.auth.currentUserValueDecrypt;
        if (this.usuario.user_id > 0) {
          this.auth.updateUser(this.usuario);
          this.routerComponent.navigate(['/home']);
        } else {
          this.routerComponent.navigate(['/login']);
        }
      } else {
        this.routerComponent.navigate(['/login']);
      }
      this.inializeFCM();
      this.iniciarListenerDeNotificacoes();
      this.inializeGeo();

    });


  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  abrirEcotres() {
    const browser = this.iab.create('https://ecotres.com.br/');
  }
  sair() {
    //this.auth.logout();
    if (this.usuario.user_id != 741) {
      localStorage.removeItem('user');
      this.menuCtrl.toggle();
      //App.exitApp();
      //navigator['app'].exitApp();
      this.routerComponent.navigate(['/login']);
    } else {
      alert("inicio");
      this.firebase.getToken().then(token => {
        alert(token);
      }, (error) => {
        alert(error);
      });
    }
  }

  inializeGeo() {
    this.geolocation.getCurrentPosition().then((resp) => {

    }).catch((error) => {
      this.presentAlert("Erro : ", error);
    });
  }

  inializeFCM() {
    // // this.firebase.getToken().then(token => {alert(token); this.token = token;});
    // this.firebaseX.onMessageReceived().subscribe(data => {
    //   //var myJSON = JSON.stringify(data.title);
    //   this.presentAlert(data.title, data.body);
    // });
  }

  async presentAlert(header, text) {
    const alert = await this.alertController.create({
      header: header,
      message: text,
      buttons: ['OK']
    });

    await alert.present();
  }


   
  solicitarTokenDoFirebase() {
 
    this.firebase.getToken()
      .then(token => {
        this.iniciarListenerDeNotificacoes();
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => {
        console.error('Error getting token', error)
      });
 
  }
 
  iniciarListenerDeNotificacoes() {
 
    this.firebase.onNotificationOpen().subscribe((notification: any) => {
      this.presentAlert(notification.title, notification.body);
    })
 
  }



}
