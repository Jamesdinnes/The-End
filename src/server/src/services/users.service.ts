import { pool } from '../config'

const { query } = pool

export const getUsers = async (ctx, next) => {
  try {
    const result = await query('SELECT * FROM users ORDER BY id ASC')
    return ctx.body = result.rows
  } catch (e) {
    return e
  }
}

export const getUserById = async (ctx, next) => {
  try {
    const id = parseInt(ctx.params.id)
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return ctx.body = result.rows
  } catch (e) {
    return e
  }
}

export const createUser = (ctx, next) => {
  const { name, email } = ctx.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, result) => {
    if (error) {
      throw error
    }
    // next.status(201).send(`User added with ID: ${result.insertId}`)
  })
}

export const updateUser = (ctx, next) => {
  const id = parseInt(ctx.params.id)
  const { name, email } = ctx.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      next.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

export const deleteUser = (ctx, next) => {
  const id = parseInt(ctx.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, result) => {
    if (error) {
      throw error
    }
    next.status(200).send(`User deleted with ID: ${id}`)
  })
}