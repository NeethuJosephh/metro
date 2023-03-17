import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut} from '@angular/fire/auth';
import { Firestore,collectionData, collection ,addDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private auth:Auth,private router:Router,private fire:Firestore) { }
  Signin(email:string,pass:string){
    signInWithEmailAndPassword(this.auth,email,pass).then(res=>{
      alert("login successfully")
      this.router.navigate(['/payment'])
    }).catch(err=>{
      alert(err)
    })
}
logout(){
  signOut(this.auth).then(res=>{
    alert("logout successfully")
    this.router.navigate(['/login'])
  }).catch(err=>{
    alert(err)
  })
  }
signup(email:string,pass:string,fname:any){
  createUserWithEmailAndPassword(this.auth,email,pass).then(res=>{
    alert("signup successfully")
    this.router.navigate(['/payment'])
  }).catch(err=>{
    alert(err)
  })
}
contact(data:any){
  const contactCollection=collection(this.fire,'contactDetails')
addDoc(contactCollection,data).then(res=>{
  alert("data added successfully")
}).catch(err=>{
  alert(err)
})
}
//get contact
getContact(){
  const contactCollection=collection(this.fire,'contactDetails')
  return collectionData(contactCollection)
}
addData(f:any){
  const bookCollection=collection(this.fire,'booking')
  addDoc(bookCollection,f).then(res=>{
    alert("data added successfully")
  }).catch(err=>{
    alert(err)
  })
}
// paynow(email:string,fname:string,cd:any,pay:any,card:any,cvc:any){
//   createUserWithEmailAndPassword(this.auth,email,fname).then(res=>{
//     alert("signup successfully")
//     this.router.navigate(['/'])
//   }).catch(err=>{
//     alert(err)
//   })
// }
paynow(data:any){
  const paynowCollection=collection(this.fire,'paynowDetails')
addDoc(paynowCollection,data).then(res=>{
  alert("payment successfully")
  this.router.navigate(['/about'])
}).catch(err=>{
  alert(err)
})
}
getpaynow(){
  const paynowCollection=collection(this.fire,'paynowDetails')
  return collectionData(paynowCollection)
}
  }
