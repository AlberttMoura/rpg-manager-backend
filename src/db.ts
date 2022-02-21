import { Pool } from 'pg'

const connectionString =
	'postgres://sedxlamt:hQ6aYytrQ8R6R4D0XLUZo8ed3OgfMMRl@kesavan.db.elephantsql.com/sedxlamt'

const db = new Pool({ connectionString })

export default db
