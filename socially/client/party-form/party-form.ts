import {Component, View} from 'angular2/angular2';
//import {formDirectives, Control, ControlGroup, Validators} from 'angular2/angular2';

@Component({
    selector: 'party-form'
})
@View({
    templateUrl: "client/party-form/party-form.ng.html"
})

export class PartyForm {

    constructor(){
        this.name = "";
        this.desc = "";
    }

    addParty(name: String, desc: String) {
        alert("clicked :" + name +", " + desc);
        Parties.insert({
            name: name,
            description: desc
        });
    }
}