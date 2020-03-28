import { Component, ViewChild } from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';

//import {IPlan} from '../interfaces/iplan';
import { IPlan, PlanService } from '../services/plan-service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DeleteDialogComponent, DialogData, ConfirmDialogModel } from './modals/delete-dialog.component';

@Component({
    selector: 'plan-list',
    templateUrl: './plan-list.html',
    styleUrls: ['./plan-list.css'],
    providers: [PlanService]
})
export class PlanList {
    plans: Array<IPlan>;
    newPlanName: string;
    newPlanContent: any;
    newPlanId: string;
    //openDialog: boolean = false;
    planToDelete: IPlan;

    displayedColumns: string[] = ['name', 'date', 'delete'];
    dataSource = new MatTableDataSource<IPlan>();

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    //dialog: any;

    animal: string;
    name: string;

    constructor(private _planService: PlanService, public dialog: MatDialog) {

    }

    ngOnInit() {
        this.plans = this._planService.getPlans();
        this.dataSource = new MatTableDataSource<IPlan>(this.plans);
        this.dataSource.paginator = this.paginator;
    }

    requestDelete(plan: IPlan) {
        //this.openDialog = true;
        this.planToDelete = plan;
        //this.openDialog();
        //this.deletePlan();
    }

    deletePlan(plan: IPlan) {
        this._planService.deletePlan(plan);
        this.plans = this._planService.getPlans();
        this.dataSource = new MatTableDataSource<IPlan>(this.plans);
        console.log(plan.name);
        this.dataSource.paginator = this.paginator;
    }

    cancelDelete() {
        //this.openDialog = false;
    }

    deleteAllPlans() {
        this._planService.deleteAllPlans();
    }

    result: string;
    openDialog(plan: IPlan) {
        const message = `You're about to delete ` + plan.name + ` Are you sure?`;

        const dialogData = new ConfirmDialogModel("Confirm", message);

        const dialogRef = this.dialog.open(DeleteDialogComponent, {
            maxWidth: "400px",
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result) {
                this.deletePlan(plan);
            }
            console.log(this.result);
        });
    }
}
