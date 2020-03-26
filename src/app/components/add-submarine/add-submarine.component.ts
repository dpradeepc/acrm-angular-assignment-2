import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { SubmarineService} from './../../services/submarine.service'


@Component({
  selector: 'app-add-submarine',
  templateUrl: './add-submarine.component.html',
  styleUrls: ['./add-submarine.component.css']
})
export class AddSubmarineComponent implements OnInit {

  public newSubmarineForm;

  constructor(private submarineService: SubmarineService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.newSubmarineForm = new FormGroup({
      name: new FormControl('HHHHH', [Validators.required, Validators.pattern("([^\s][A-z0-9À-ž\s]+)")]),
      description: new FormControl('', Validators.required),
      isVisible: new FormControl(true),
      isRegistered: new FormControl(false),
    });
  }

  onFormSubmit(){
    this.submarineService.addSubmarine(this.newSubmarineForm.value);
    console.log(this.newSubmarineForm);
  }
  

}
