import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io'

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public socketStatus: boolean = false;


  constructor(private socket: Socket ) {
    this.ckeckStatus();
   }



  ckeckStatus() {
    this.socket.on( 'connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });


    this.socket.on( 'disconnect', () => {
      console.log('Desconectado al servidor');
      this.socketStatus = false;
    });
}


// EMITE CUALQUIER EVENTO
  emit( evento: string, payload?: any, callback?: Function ) {

    console.log('Emitiendo mensaje')
    this.socket.emit( evento, payload, callback );
}

// ESCUCHA CUALQUIER EVENTO

listen ( evento: string ) {
  return this.socket.fromEvent( evento );
}

}
