interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [possibility: string] : any
};

interface Directors extends Teacher {
  numberOfReports:number;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = function(
  firstName: string,
  lastName: string
  ): string {
  let letter: string = firstName.charAt(0);
  return `${letter}. ${lastName}`
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInter;
}

interface StudentClassInter {
  workOnHomework(): string;
  displayName(): string;
}

export class StudentClass implements StudentClassInter {
  firstName:string;
  lastName:string;
 
  constructor(firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return ('Currently working');
  }

  displayName(): string {
    return (`${this.firstName}`);
  }
}
 
