/**
 * Created by jagaa on 8/20/15.
 */
import {Component, View, Inject} from 'angular2/angular2';
import {routerDirectives, RouteParams} from 'angular2/router';


@Component({
    selector: 'party-details'
})
@View({
    templateUrl: 'client/party-details/party-details.ng.html',
    directives: [routerDirectives]
})
export class PartyDetailsCmp {
    constructor(@Inject(RouteParams) routeParams:RouteParams) {
        Tracker.autorun(zone.bind(() => {
            this.selected_party = PartiesData.find(routeParams.params.partyId).fetch()[0];
        }));
    }
}