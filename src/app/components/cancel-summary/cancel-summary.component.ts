import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-summary',
  template: `

     <clr-modal [(clrModalOpen)]="opened">
        <h3 class="modal-title">Выберите причину отказа</h3>
        <div class="modal-body">
        <div class="form-group">  
          <div class="select">
              <label for="cancel-reason">Причина:</label>
              <select id="cancel-reason">
                <option>Не интересует</option>
                <option>Уже подключен</option>
                <option>Высокая цена</option>
                <option value="other">Другое</option>
              </select>
            </div>
          <div>  
            <label for="cancel-reason">Подробнее:</label>
            <textarea id="cancel-explain" rows="5"></textarea>
          </div>
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
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.opened = false;
    console.log('CLOSE');
  }
}
