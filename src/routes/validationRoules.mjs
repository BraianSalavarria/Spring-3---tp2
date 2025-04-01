import { body } from "express-validator";

export const nombreSuperheroeValidationRules = () => [
    body('nombreSuperHeroe')
        .notEmpty().withMessage('El nombre del superhéroe es obligatorio.')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre del superhéroe debe tener entre 3 y 60 caracteres.')
        .trim()
        .escape()
];

export const nombreRealValidationRules = () => [
    body('nombreReal')
        .notEmpty().withMessage('El nombre real del superhéroe es obligatorio.')
        .isLength({ min: 3, max: 60 }).withMessage('El nombre real debe tener entre 3 y 60 caracteres.')
        .trim()
        .escape()
];

export const edadValidationRules = () => [
    body('edad')
        .notEmpty().withMessage('La edad del superhéroe es obligatoria.')
        .isInt({ min: 0 }).withMessage('La edad debe ser un número entero mayor o igual a 0.')
];

export const poderesValidationRules = () => [
    body('poderes')
        .exists().withMessage('Los poderes del superhéroe son obligatorios.')
        .isArray({ min: 1 }).withMessage('Los poderes deben ser un arreglo con al menos un elemento.'),
  
    body('poderes.*')
        .isString().withMessage('Cada poder debe ser una cadena de texto.')
        .trim()
        .escape()
        .isLength({ min: 3, max: 60 }).withMessage('Cada poder debe tener entre 3 y 60 caracteres.')
];
