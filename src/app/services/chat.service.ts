import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


import { Injectable } from '@angular/core';
import { Mensaje } from '../interfaces/mensaje.interface';
import { map } from 'rxjs/operators';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats:Mensaje[]=[];
  public usuario:any={};

  private itemsCollection: AngularFirestoreCollection<Mensaje>;



  constructor(private afs: AngularFirestore,
              public auth: AngularFireAuth) {


                this.auth.authState.subscribe(user =>{ 

                  console.log('estado del usuario:', user);
                  if( !user ){return;}

                  this.usuario.nombre = user.displayName;
                  this.usuario.uid= user.uid;
                })
    
   }
   login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  
  logout() {
    this.usuario={};
    this.auth.signOut();
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref=>ref.orderBy('fecha', 'desc').limit(10))  ;

    return this.itemsCollection.valueChanges().
    pipe(map((mensajes:Mensaje[])=>{ 
      console.log(mensajes);
      this.chats=[];

      for (let mensaje of mensajes) {
        this.chats.unshift(mensaje);
      }
    
      return this.chats;
    }  ))

  }

  agregarMensaje(texto:string){

    //falta el UID del usuario!!
    let mensaje:Mensaje={
      nombre: this.usuario.nombre,
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    }

   return this.itemsCollection.add(mensaje);

  }
}