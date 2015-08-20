///<reference path="../typings/typings.d.ts"/>

import {Component, NgFor, View, bootstrap} from 'angular2/angular2';
import {PartyForm} from 'client/party-form/party-form';


@Component({
    selector: 'socially'
})
@View({
    //template: "<p>Hello World!</p>"
    templateUrl: 'client/socially.ng.html',
    directives: [NgFor, PartyForm]
})

class Socially {

    //party: IParty[];

    constructor(){
        Tracker.autorun(zone.bind(() => {
            this.parties = Parties.find().fetch();
        }));
    }
    remove(party){
        Parties.remove(party._id);
    }
}

bootstrap(Socially);