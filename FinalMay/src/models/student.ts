
let students: Student[] = [
    {
      "id": 1,
      "name": "Josh Smith",
      "major": "MSCS",
      "transcript": [
        { "course": 203, "grade": 90 },
        { "course": 303, "grade": 88 },
        { "course": 335, "grade": 80 },
        { "course": 445, "grade": 82 }
      ]
    },
    {
      "id": 2,
      "name": "Edward Folk",
      "major": "MSCS",
      "transcript": [
        { "course": 201, "grade": 89 },
        { "course": 203, "grade": 81 }
      ]
    },
    {
      "id": 3,
      "name": "Lily Lerman",
      "major": "MSCS",
      "transcript": [
        { "course": 201, "grade": 78 },
        { "course": 301, "grade": 80 },
        { "course": 303, "grade": 85 },
        { "course": 445, "grade": 88 }
      ]
    },
    {
      "id": 4,
      "name": "Emma Angla",
      "major": "MSCS",
      "transcript": [
        { "course": 201, "grade": 96 },
        { "course": 301, "grade": 90 },
        { "course": 303, "grade": 88 },
        { "course": 445, "grade": 87 },
        { "course": 477, "grade": 70 }
      ]
    },
    {
      "id": 5,
      "name": "Tom Jark",
      "major": "MSD",
      "transcript": [
        { "course": 201, "grade": 89 },
        { "course": 301, "grade": 71 },
        { "course": 303, "grade": 98 }
      ]
    }
  ];  

interface Transcript {
    course: number;
    grade: number;
}

export default class Student {
    constructor(public id: number, public name: string, public major: string, public transcript: Transcript[]) {
    }

    static getAllStudents(){
        return students;
    }

    static getStudentTranscriptById(studentId: number){       
        const student = students.find(s => s.id === studentId);
        if(!student){
            throw new Error(`Student doesn't exist with ID : ${studentId}`)
        }
        return student.transcript;
    }
 
    static deleteCourseTranscript(studentId: number, courseId: number){
        const student = students.find(s => s.id === studentId);
        if(student){            
            const courseIndex = student.transcript.findIndex(c => c.course === courseId);
            if(courseIndex > -1){
                student.transcript.splice(courseIndex, 1);
            }else{
                throw new Error(`No course with ID ${courseId} in student ${studentId}'s transcript.`)
            }         
            return students;
        }else{
            throw new Error(`No student found with student ID ${studentId}`)
        }
    }
}