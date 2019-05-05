import { NgxCoolDialogsService } from 'ngx-cool-dialogs';

export class DialogService {

    dialogBox: NgxCoolDialogsService;

    confirmDialog(dialogText: string){
        this.dialogBox.alert(dialogText);
    }

}