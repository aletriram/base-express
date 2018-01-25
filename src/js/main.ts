
declare function require(moduleName: string): any;


import 'jquery';
import 'bootstrap';

// const bootstrap: any = require('bootstrap/dist/js/bootstrap.bundle.min.js');

class Main {

	// private _Montadores: any;

	// get Montadores (): any {

	// 	if (! this._Montadores) {
	// 		let Montadores   = require ('./montadores');
	// 		this._Montadores = new Montadores ();
	// 	}
	// 	return this._Montadores;
	// }
}


(<any>window).Main = new Main ();
