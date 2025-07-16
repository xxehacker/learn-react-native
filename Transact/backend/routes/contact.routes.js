import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const contact = await sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message}) RETURNING *`;
        res.status(201).json(contact[0]);
    } catch (error) {
        res.status(500).json({ message: "Error creating contact" });
    }
});


export default router;