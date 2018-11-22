import * as dialogs from 'tns-core-modules/ui/dialogs';

import { Component, OnInit } from '@angular/core';

import { CoreService } from 'core';

@Component({
	selector: 'Home',
	moduleId: module.id,
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	pet = '';
	petsName: string[] = [];
	constructor(private service: CoreService) {}

	ngOnInit(): void {
		this.service.getPetById(122).subscribe((res) => {
			this.pet = res;
		});
		this.service.findPetByStatus('sold').subscribe((res) => {
			console.log('this', res);
			this.petsName = res;
		});
	}
}
