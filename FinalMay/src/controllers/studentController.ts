import { Request, Response, NextFunction } from "express"
import Student from "../models/student";

export const getAllStudents = (req : Request, res : Response) => {
    res.status(200).json({success: true, data : Student.getAllStudents()})
}

export const getStudentTranscriptById = (req: Request, res: Response) => {
    console.log(req.body,req.query,req.params.studentId)
    res.status(200).json(Student.getStudentTranscriptById(parseInt(req.params.studentId)));
}

export const deleteCourseTranscript =(req : Request,res : Response) => {
    console.log(req.body,req.params.studentId,req.params.courseId)
    res.status(200).json({success: true, data : Student.deleteCourseTranscript(parseInt(req.params.studentId),parseInt(req.params.courseId))});
}