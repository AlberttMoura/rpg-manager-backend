import Express, { Request, Response, NextFunction } from 'express'
import db from './db'

const app = Express()

app.get('/', async (req: Request, res: Response, next: NextFunction) => {
	const users = await db.query('SELECT * FROM npc')
	return res.status(200).send(users.rows)
})

app.listen(process.env.PORT || 3000, () =>
	console.log(`Server running on port ${process.env.PORT || 3000}`)
)
