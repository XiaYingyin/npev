import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

//import {IPlan} from '../interfaces/iplan';
import {HighlightType, ViewMode} from '../enums';
import {IPlan, PlanService} from '../services/plan-service';
import {SyntaxHighlightService} from '../services/syntax-highlight-service';

@Component({
    selector: 'plan-view',
    templateUrl: './plan-view.html',
    providers: [PlanService, SyntaxHighlightService],
    //pipes: [DurationPipe, DurationUnitPipe]
})
export class PlanView {
    id: string;
    plan: IPlan;
    rootContainer: any;
    hideMenu: boolean = true;

    viewOptions: any = {
        showPlanStats: true,
        showHighlightBar: true,
        showPlannerEstimate: false,
        showTags: true,
        highlightType: HighlightType.NONE,
        viewMode: ViewMode.FULL
    };

    showPlannerEstimate: boolean = true;
    showMenu: boolean = false;

    highlightTypes = HighlightType; // exposing the enum to the view
    viewModes = ViewMode;

    constructor(private _planService: PlanService, routeParams: ActivatedRoute) {
        this.id = routeParams.snapshot.params['id'];
    }

    getPlan() {
        if (!this.id) {
            return;
        }

        this.plan = this._planService.getPlan(this.id);
        this.rootContainer = this.plan.content;
        this.plan.planStats = {
            executionTime: this.rootContainer['Execution Time'] || this.rootContainer['Total Runtime'],
            planningTime: this.rootContainer['Planning Time'] || 0,
            maxRows: this.rootContainer[this._planService.MAXIMUM_ROWS_PROP] || 0,
            maxCost: this.rootContainer[this._planService.MAXIMUM_COSTS_PROP] || 0,
            maxDuration: this.rootContainer[this._planService.MAXIMUM_DURATION_PROP] || 0
        };
    }

    ngOnInit() {
        this.getPlan();
    }

    toggleHighlight(type: HighlightType) {
        this.viewOptions.highlightType = type;
    }

    analyzePlan() {
        this._planService.analyzePlan(this.plan);
    }
}
