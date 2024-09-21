
import express from 'express';
import { getAllStudents, getStudentTranscriptById, deleteCourseTranscript } from '../controllers/studentController';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:studentId', getStudentTranscriptById);
router.delete('/:studentId/courses/:courseId',deleteCourseTranscript);


export default router;
