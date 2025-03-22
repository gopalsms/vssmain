export class Blooddonors {
  slno: number;
  name: string;
  age: number;
  contactno: string;
  bloodgroup: string;
  address: string;
  donationdate: string;
  venue: string;

  constructor(slno: number,name: string,age: number,contactno: string,bloodgroup: string,address: string,donationdate: string,venue: string)
  {
    this.slno=slno;
    this.name=name;
    this.age=age;
    this.contactno=contactno;
    this.bloodgroup=bloodgroup;
    this.address=address;
    this.donationdate=donationdate;
    this.venue=venue;
  }


}
