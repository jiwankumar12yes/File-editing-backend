import fs from "fs";
import pptxgen from "pptxgenjs";

export const extractTextFromPPT = async (req, res) => {
  const { filePath } = req.body;
  try {
    const pptx = new pptxgen();
    const pptData = fs.readFileSync(filePath);
    // Processing logic here...
    res.json({ message: "Extracted text from PPT" });
  } catch (error) {
    res.status(500).json({ error: "Failed to extract text from PPT" });
  }
};
