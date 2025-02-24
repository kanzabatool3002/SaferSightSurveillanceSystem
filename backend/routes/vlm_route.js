import express from "express";
import ViteExpress from "vite-express";
import multer from "multer";
import { checkProgress, promptVideo, uploadVideo } from "../gemini.js";

const router = express.Router();



const upload = multer({ dest: "/tmp/" })
router.post("/upload", upload.single('video'), async (req, res) => {

  try {
	const file = req.file;
	const resp = await uploadVideo(file)
	console.log(resp);
	res.json({ data: resp });

  } catch (error) {
	res.status(500).json({ error })
  }
})

router.post("/progress", async (req, res) => {
  try {
	console.log('/api/progress request', req.body)
	const result = req.body.result
	const progress = await checkProgress(result)
	console.log('/api/progress', progress)
	res.json({ progress })
  } catch (error) {
	console.error(error)
	res.status(500).json({ error })
  }
})

router.post("/prompt", async (req, res) => {
  try {
	const reqData = req.body
	console.log('/api/prompt', reqData)
	const videoResponse = await promptVideo(reqData.uploadResult, reqData.prompt, reqData.model)
	res.json(videoResponse)
  } catch (error) {
	res.json({ error }, { status: 400 })
  }
})

export default router;
