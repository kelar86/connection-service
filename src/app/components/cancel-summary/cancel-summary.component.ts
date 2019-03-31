import { StorageService } from './../../storage.service';
import { ClientCall } from './../../models/client-call.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cancel-summary',
  template: `

     <clr-modal [(clrModalOpen)]="opened" [clrModalClosable]="false">
        <h3 class="modal-title">Выберите причину отказа</h3>
        <div class="modal-body">
        <div class="form-group"> 
          <label for="cancel-reason">Причина:</label> 
          <div class="select">
              <select id="cancel-reason" [(ngModel)]="cancelReason">
                <option value="Уже подключен">Уже подключен</option>
                <option value="Не интересует">Не интересует</option>
                <option value="Высокая цена">Высокая цена</option>
                <option value="Другое">Другое</option>
              </select>
            </div>
          </div>
          <div>  
            <label for="cancel-reason">Подробнее:</label>
              <textarea id="cancel-explain" rows="5" [(ngModel)]="cancelReasonComment"></textarea>
          </div>
        </div> 

        <div class="modal-footer">
            <button type="button" class="btn btn-primary" (click)="onClose()">СОХРАНИТЬ</button>
        </div>
    </clr-modal>
  `,
  styles: []
})
export class CancelSummaryComponent implements OnInit {

  opened = true;
  clientCall: ClientCall;
  cancelReason;
  cancelReasonComment;

  constructor(private route: ActivatedRoute, private storage: StorageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.clientCall = new ClientCall().deserialize(params);
    });

  }

  onClose() {
    this.clientCall.cancelReason = this.cancelReason;
    this.clientCall.cancelReasonComment = this.cancelReasonComment;  
    this.storage.saveCall(this.clientCall);
    this.opened = false;

  }
}
