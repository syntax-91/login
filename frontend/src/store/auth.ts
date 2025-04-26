import { makeAutoObservable } from 'mobx'

class AuthUser {
	isAuth: boolean = false;

	constructor(){
		makeAutoObservable(this);
	}

}

export const auth = new AuthUser