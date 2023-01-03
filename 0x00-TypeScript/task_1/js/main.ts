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

