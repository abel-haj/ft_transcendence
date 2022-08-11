import {
	SubscribeMessage,
	WebSocketGateway,
	OnGatewayInit,
	WsResponse,
	OnGatewayConnection,
	OnGatewayDisconnect,
	WebSocketServer} from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Socket, Server } from 'socket.io';
  
  @WebSocketGateway({
	  cors: {
		  origin: "*"
	  }
  })
  export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  
	@WebSocketServer() wss: Server;
  
	private logger: Logger = new Logger('AppGateway');
  
	afterInit(server: Server) {
	  this.logger.log('Initialized!');
	}
  
	handleDisconnect(client: Socket) {
	  this.logger.log(`Client disconnected: ${client.id}`);
	}
  
	handleConnection(client: Socket, ...args: any[]) {
	  this.logger.log(`Client connected:    ${client.id}`);
	}
  
	@SubscribeMessage('msgToServer')
	handleMessage(client: Socket, text: string): WsResponse<string> {
	  this.logger.log(`Received message from: ${client.id}, content: ${text}`);
	//   this.wss.emit('msgToClient', text);
	  return { event: 'msgToClient', data: text };
	}
	// @SubscribeMessage('msgToServer')
	// handleMessage(client: Socket, text: string): void {
	//   this.logger.log(`Received message from: ${client.id}, content: ${text}`);
	//   this.wss.emit('msgToClient', text);
	// //   return { event: 'msgToClient', data: text };
	// }
  
  }	