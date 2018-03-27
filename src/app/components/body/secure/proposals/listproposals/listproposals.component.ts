import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Component({
    selector: 'app-listproposals',
    templateUrl: './listproposals.component.html',
    styleUrls: ['./listproposals.component.css']
})
export class ListproposalsComponent implements OnInit {


    private baseUrl: string = 'http://localhost:8080';
    public submitted: boolean;
    proposals: Proposal[];

    constructor(private http: Http) { }

    ngOnInit() {

        console.log('Llamada desde listproposals.component.ts ');
        //this.proposals = this.getAll();
        this.getAll()
            .subscribe(
            proposals => this.proposals = proposals,
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    onSubmit({value, valid}: { value: Proposal, valid: boolean }) {
        //onSubmit(
        this.getAll()
            .subscribe(
            proposals => this.proposals = proposals,
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    getAll(): Observable<Proposal[]> {
        return this.http.get(this.baseUrl + '/proposal/listproposals').map(this.mapProposal);
    }

    mapProposal(response: Response): Proposal[] {
        return response.json().content;
    }
}

export interface Proposal {
    id: string;
    creationDate: string;
    functionality: string;
    release: string;
    proposalType: string;
    links: string;
}

//var PROPOSALS: Proposal[] = [
//
//    {
//        "id": "10",
//        "creationDate": "10-10-2018",
//        "functionality": "Desde el ARRAY en JSON del TypeScript",
//        "release": "00-10-2018",
//        "proposalType": "ESTUDIO",
//        "links": ""
//    },
//        {
//        "id": "11",
//        "creationDate": "11-10-2018",
//        "functionality": "Desde el ARRAY en JSON del TypeScript 11",
//        "release": "01-10-2018",
//        "proposalType": "ESTUDIO",
//        "links": ""
//    },
//            {
//        "id": "12",
//        "creationDate": "12-10-2018",
//        "functionality": "Desde el ARRAY en JSON del TypeScript 12",
//        "release": "02-10-2018",
//        "proposalType": "ESTUDIO",
//        "links": ""
//    },
//                {
//        "id": "13",
//        "creationDate": "13-10-2018",
//        "functionality": "Desde el ARRAY en JSON del TypeScript 13",
//        "release": "03-10-2018",
//        "proposalType": "ESTUDIO",
//        "links": ""
//    }
//
//]
