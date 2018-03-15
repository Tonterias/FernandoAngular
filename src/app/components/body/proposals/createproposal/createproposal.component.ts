import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-createproposal',
    templateUrl: './createproposal.component.html',
    styleUrls: ['./createproposal.component.css']
})
export class CreateproposalComponent implements OnInit {

    public submitted: boolean;
    Proposalsearch : FormGroup;
    constructor() { }

    ngOnInit() {
        this.Proposalsearch = new FormGroup({
            proposaltype: new FormControl(''),
            functionality: new FormControl('')
        });
    }

    onSubmit({value, valid}: { value: Proposalsearch, valid: boolean }) {
        console.log(value);

    }

    createProposal(Proposalsearch:Proposalsearch){
        console.log("Vamos a crear una propuesta...:" + Proposalsearch);
        }

}

export interface Proposalsearch {
    functionality: string;
    proposaltype: string;
}
