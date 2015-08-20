/**
 * Created by jagaa on 8/20/15.
 */
import {Component, View, NgFor} from 'angular2/angular2';
import {routerDirectives} from 'angular2/router';

import {PartyForm} from 'client/party-form/party-form';

@Component({
    selector: 'parties'
})
@View({
    templateUrl: 'client/parties/parties.ng.html',
    directives: [NgFor, routerDirectives, PartyForm]
})
export class PartiesCmp {
    constructor() {
        Tracker.autorun(zone.bind(() => {
            this.parties = PartiesData.find().fetch();
        }));
    }
}