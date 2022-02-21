import Express, { Request, Response, NextFunction } from 'express'

const app = Express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	return res.status(200).json({ msg: 'Tudo certo' })
})

app.listen(3000)
