import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
    title: string;
    message: string;
}

export class ConfirmDialogModel {
    constructor(public title: string, public message: string) {
    }
}

@Component({
    selector: 'delete-dialog',
    templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
    title: string = "Delete Plan";
    message: string = "You're about to delete this plan. Are you sure?";

    constructor(
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {
        this.title = data.title;
        this.message = data.message;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onConfirm(): void {
        // Close the dialog, return true
        this.dialogRef.close(true);
    }

    onDismiss(): void {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
}