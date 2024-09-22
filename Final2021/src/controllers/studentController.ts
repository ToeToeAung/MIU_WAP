import { Request, Response, NextFunction } from "express"
import Student from "../models/student";

export const getAllStudents = (req : Request, res : Response) => {
    res.status(200).json({success: true, data : Student.getAllStudents()})
}

export const getStudentById = (req: Request, res: Response) => {
    console.log(req.body,req.query,req.params.studentId)
    res.status(200).json(Student.getStudenttById(req.params.studentId));
}

export const deleteStudentById = (req: Request, res: Response) => {
    res.status(200).json({success : true, data : Student.deleteStudentById(req.params.studentId)});
}

export const getAverage = (req : Request, res : Response) => {
    res.status(200).json ({average : Student.getAverage(req.params.studentId,req.query)});
}
