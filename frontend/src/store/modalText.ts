import { makeAutoObservable } from 'mobx'

class ModalText {
	isOpen = false;
	text = ''
	success = false

	constructor(){
		makeAutoObservable(this);
	}

	run(success: boolean, message: string){
		this.isOpen = true;
		this.success = success
		this.text = message;
	}
}

export const modal = new ModalText()