import {Component} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';

//import {IPlan} from '../interfaces/iplan';
import {IPlan, PlanService} from '../services/plan-service';

@Component({
    selector: 'plan-list',
    templateUrl: './plan-list.html',
    providers: [PlanService]
})
export class PlanList {
    plans: Array<IPlan>;
    newPlanName: string;
    newPlanContent: any;
    newPlanId: string;
    openDialog: boolean = false;
    planToDelete: IPlan;

    constructor(private _planService: PlanService) { }

    ngOnInit() {
        this.plans = this._planService.getPlans();
    }

    requestDelete(plan: IPlan) {
        this.openDialog = true;
        this.planToDelete = plan;
    }

    deletePlan() {
        this.openDialog = false;
        console.log(this.planToDelete);
        this._planService.deletePlan(this.planToDelete);
        this.plans = this._planService.getPlans();
    }

    cancelDelete() {
        this.openDialog = false;
    }

    deleteAllPlans() {
        this._planService.deleteAllPlans();
    }
}
