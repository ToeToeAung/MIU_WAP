
let students: Student[] = [
  {
      "studentId": "610001",
      "firstname": "John",
      "lastname": "Smith",
      "courses": [
          {
              "courseId": "CS303",
              "coursename": "Web Application Programming in JavaScript",
              "semester": "2021-Spring",
              "grade": 99
          },
          {
              "courseId": "CS445",
              "coursename": "Modern Asynchronous Programming",
              "semester": "2021-Spring",
              "grade": 95
          }
      ]
  },
  {
      "studentId": "610002",
      "firstname": "Edward",
      "lastname": "Jack",
      "courses": [
          {
              "courseId": "CS472",
              "coursename": "Web Application Programming",
              "semester": "2021-Spring",
              "grade": 82
          },
          {
              "courseId": "CS544",
              "coursename": "Web Application Architecture",
              "semester": "2021-Spring",
              "grade": 88
          }
      ]
  }
];


interface Courses {
  courseId: string;
  coursename: string;
  semester: string;
  grade : number;
}

export default class Student {
    constructor(public studentId: string, public firstname: string, public lastname: string, public courses: Courses[]) {
    }

    static getAllStudents(){
        return students;
    }

    static getStudenttById(studentId: string){       
        const student = students.find(s => s.studentId === studentId);
        if(!student){
            throw new Error(`Student doesn't exist with ID : ${studentId}`)
        }
        return student;
    }
 
    static deleteStudentById(studentId : string){
      const index = students.findIndex(s => s.studentId === studentId);
      if(index > -1){
        students.splice(index,1);
      }else{
        throw new Error(`Student doesn't exist with ID : ${studentId}`)
      }
      return students;
    }

    static getAverage(studentId: string, query: {semester?: string}){
        const semesterId= query.semester;
        console.log(semesterId)
        const student = students.find(s => s.studentId === studentId);
        if(student){   
            let courses =student.courses;
           if(semesterId){
             courses = courses.filter(course => course.semester === semesterId);             
           }else{
            throw new Error(`couldn’t find semester" ${semesterId}`)
           }

           if(courses.length === 0){
            throw new Error(`couldn’t find semester" ${semesterId}`)
           }else{
            const averageGrade = courses.reduce((sum,current) => sum + current.grade/courses.length,0);             
            return averageGrade;
           }           

        }else{
            throw new Error(`No student found with student ID ${studentId}`)
        }
    }
}