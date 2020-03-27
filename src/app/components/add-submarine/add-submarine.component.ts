import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { SubmarineService } from '@app/services/submarine.service';
import { RealtimeService } from '@app/services/realtime.service'

@Component({
  selector: 'app-add-submarine',
  templateUrl: './add-submarine.component.html',
  styleUrls: ['./add-submarine.component.scss']
})
export class AddSubmarineComponent implements OnInit {

  public newSubmarineForm;
  private submarines;
  public errors = [];

  @Output() public modalClose = new EventEmitter();

  constructor(private submarineService: SubmarineService, private realtimeService:RealtimeService) { }

  ngOnInit(): void {
    this.realtimeService.submarines.subscribe((submarines) => {
      this.submarines = submarines;
      this.initForm();
    });
  }

  initForm() {
    this.newSubmarineForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern("([^\s][A-z0-9À-ž\s]+)")]),
      description: new FormControl('', Validators.required),
      isVisible: new FormControl(true),
      isRegistered: new FormControl(false),
    });
  }

  onModalClose() {
    this.modalClose.emit();
  }

  onFormSubmit() {
    let submitStatus = this.submarineService.addSubmarine(this.newSubmarineForm.value);
    if(submitStatus.status === 'error'){
      this.errors.push(submitStatus);
    }else{
      this.onModalClose();
    }
  }

}
