import express from "express";
import { uploadFile } from "../controllers/fileController.js";
import {
  extractTextFromImage,
  extractTextFromPDF,
} from "../controllers/pdfController.js";
import { extractTextFromPPT } from "../controllers/pptController.js";
import upload from "../middleware/multerConfig.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadFile);
router.post("/extract-text/pdf", extractTextFromPDF);
router.post("/extract-text/image", extractTextFromImage);
router.post("/extract-text/ppt", extractTextFromPPT);

export default router;
