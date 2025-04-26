import { makeAutoObservable } from 'mobx'

class ModalText {
	isOpen = false;
	text = ''

	constructor(){
		makeAutoObservable(this);
	}

	run(text: string){
		this.isOpen = true;
		this.text = text
	}
}

export const modal = new ModalText()