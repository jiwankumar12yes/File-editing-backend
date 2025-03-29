import fs from "fs";
import { PDFDocument } from "pdf-lib";
import Tesseract from "tesseract.js";

export const extractTextFromPDF = async (req, res) => {
  const { filePath } = req.body;
  try {
    const pdfBytes = fs.readFileSync(filePath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const text = await pdfDoc.getText();
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: "Failed to extract text from PDF" });
  }
};

export const extractTextFromImage = async (req, res) => {
  const { imagePath } = req.body;
  try {
    const { data } = await Tesseract.recognize(imagePath, "eng");
    res.json({ text: data.text });
  } catch (error) {
    res.status(500).json({ error: "OCR failed" });
  }
};
