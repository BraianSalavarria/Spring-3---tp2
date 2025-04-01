import express from 'express';
 import {obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesCotroller,  buscarSuperheroesPorAtributoController, 
    obtenerSuperheroesMayoresDe30Controller, insertarSuperheroeControlloer, 
    actualizarCompletoSuperheroeController,eliminarSuperheroeController,eliminarSuperheroePorNombreController,
 } from '../controllers/superheroesController.mjs'

import { handleValidationErrors } from '../routes/errorMiddleware.mjs';
import { nombreRealValidationRules,nombreSuperheroeValidationRules, edadValidationRules,poderesValidationRules } from '../routes/validationRoules.mjs';
 const router = express.Router();

   // Definicion de las rutas
 router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller);
 router.get('/heroes',obtenerTodosLosSuperheroesCotroller);
 router.get('/heroes/:id', obtenerSuperheroePorIdController);
 router.get('/heroes/buscar/:atributo/:valor',buscarSuperheroesPorAtributoController);
 router.post('/heroes/nuevo_superheroe', nombreRealValidationRules(),nombreSuperheroeValidationRules(),poderesValidationRules(),edadValidationRules(),handleValidationErrors,insertarSuperheroeControlloer);
 router.put('/heroes/actualizar_superheroe/:id',actualizarCompletoSuperheroeController);
 router.delete('/heroes/borrar/:id',eliminarSuperheroeController );
 router.delete('/heroes/borrar/nombre/:nombre',eliminarSuperheroePorNombreController);
 

 export default router;
