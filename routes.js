const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=> {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM CursoDeFormacion', (err, rows) => {
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=> {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        const data = req.body
        conn.query('INSERT INTO CursoDeFormacion set ?',[data], (err, rows) => {
            if(err) return res.send(err)
            res.json('El curso se creo correctamente')
        })
    })
})

routes.delete('/:id', (req, res)=> {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM CursoDeFormacion WHERE Id = ?',[req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.json('El curso se elimino correctamente')
        })
    })
})
routes.put('/:id', (req, res)=> {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE CursoDeFormacion SET ? WHERE Id = ?',[req.body, req.params.id], (err, rows) => {
            if(err) return res.send(err)
            res.json('El curso se actualizo correctamente')
        })
    })
})

module.exports = routes;