import { makeAutoObservable } from 'mobx'

class ServerRes {
	text: string = '';

	constructor(){
		makeAutoObservable(this);
	}

	setText(text: string){	
		this.text = text;
	}
}

export const serverRes = new ServerRes();