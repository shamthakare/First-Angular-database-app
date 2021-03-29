import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Policy } from 'src/app/policy.model';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-policylist',
  templateUrl: './policylist.component.html',
  styleUrls: ['./policylist.component.css']
})
export class PolicylistComponent implements OnInit {
  policies: Policy[];

  constructor(private policyService: PolicyService) { }
 
  addpolicy = new FormGroup({
    policyNumber: new FormControl('', Validators.required),
    creationDate: new FormControl('', Validators.required),
    effectiveDate: new FormControl('', Validators.required),
    expireDate: new FormControl('', Validators.required),
    paymentOption: new FormControl('', Validators.required),
    policyAmount: new FormControl('', Validators.required),
    extraInfo: new FormControl('', Validators.required),
  });
 
 
  ngOnInit(): void {
    this.policyService.getPolicies().subscribe(data => {
      this.policies = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Policy;
      })
    });
  }


  create(policy: Policy) {
    this.policyService.createPolicy(policy);
  }
  update(policy: Policy) {
    this.policyService.updatePolicy(policy);
  }

  delete(id: string) {
    this.policyService.deletePolicy(id);
  }
}


// policies: Policy[];
// constructor(private policyService: PolicyService) { }

// ngOnInit() {
//   this.policyService.getPolicies().subscribe(data => {
//     this.policies = data.map(e => {
//       return {
//         id: e.payload.doc.id,
//         ...e.payload.doc.data()
//       } as Policy;
//     })
//   });
// }

// create(policy: Policy){
//   this.policyService.createPolicy(policy);
// }

// update(policy: Policy) {
//   this.policyService.updatePolicy(policy);
// }

// delete (id: string) {
//   this.policyService.deletePolicy(id);
// }
// }






  
 
 
 
 