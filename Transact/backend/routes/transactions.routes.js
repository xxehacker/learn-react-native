import express from "express";

const router = express.Router();

//! get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await sql`SELECT * FROM transactions`;
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

//! post transaction
router.post("/", async (req, res) => {
  try {
    const { title, amount, category, user_id } = req.body;

    if (!title || !amount === undefined || !category || !user_id) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const transaction =
      await sql`INSERT INTO transactions (title, amount, category , user_id) VALUES (${title}, ${amount}, ${category},${user_id} ) RETURING *`;

    res.status(201).json(transaction[0]);
  } catch (error) {
    res.status(500).json({ message: "Error creating transaction" });
  }
});

//! get transaction by id
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const transactions =
      await sql`SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC`;
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transaction" });
  }
});

//! delete transaction
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await sql`DELETE FROM transactions WHERE id = ${id}`;

    if (isNaN(parseInt(id))) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    if (transaction.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction" });
  }
});

//! transactions summary
router.get("/summary/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const balanceResult =
      await sql` SELECT COALESCE(SUM(amount), 0) AS balance FROM transactions WHERE user_id = ${userId}`;

    const incomeResult =
      await sql`SELECT COALESCE(SUM(amount), 0) AS income FROM transactions WHERE user_id = ${userId} AND amount > 0`;

    const expenseResult =
      await sql`SELECT COALESCE(SUM(amount), 0) AS expense FROM transactions WHERE user_id = ${userId} AND amount < 0`;

    const transactions = {
      balance: balanceResult[0].balance,
      income: incomeResult[0].income,
      expense: expenseResult[0].expense,
    };

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions summary" });
  }
});

//! update transaction
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const transaction =
      await sql`UPDATE transactions SET title = ${title}, amount = ${amount}, category = ${category} WHERE id = ${id} RETURNING *`;

    if (transaction.length === 0) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction[0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction" });
  }
});

export default router;
