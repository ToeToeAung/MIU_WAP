
import express from 'express';
import { getAllStudents, getStudentById,deleteStudentById, getAverage } from '../controllers/studentController';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:studentId', getStudentById);
router.delete('/:studentId',deleteStudentById)
router.get('/:studentId/getAverage',getAverage)
//router.delete('/:studentId/courses/:courseId',deleteCourseTranscript);

export default router;
