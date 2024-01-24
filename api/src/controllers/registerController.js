const joi = require("joi");
const Platform = require("../models/platform");


async function register(request, response) {

  try {
    await joi
      .object({
        objectApp: joi.string().required(),
        categoryApp: joi.string().required(),
      })
      .validateAsync(request.body);
  } catch (error) {
    return response.status(400).json({
      error: "ValidationError",
      message: error.message,
    });
  }

  try {
    const { objectApp, categoryApp } = request.body;

    const existingApp = await Platform.findOne({ objectApp });
    if (existingApp) {
      return response.status(400).json({
        error: objectApp,
        message: 'platform already registered',
      });
    }

    const newPlatform = new Platform({ objectApp, categoryApp });
    await newPlatform.save();

    response.status(201).json({
      message: "Succesfully registered",
      data: newPlatform,
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Error when creating the record",
      message: error.message,
    });
  }
}

async function allPlatforms(request, response) {
  try {

    response.status(200).json({
      mensaje: "Successful All Platforms",
      data: await Platform.find()
    });
  } catch (errorPeticion) {
    response.status(400).json({
      mesaje: "Error " + errorPeticion,
    });
  }
}

async function deletePlataform(request, response) {


  try {
    const nombrePlataforma = request.params.objectApp_id;
    const resutDelete = await Platform.findOneAndDelete(nombrePlataforma);
      response.status(200).json({
        mensaje: "Platform successfully removed",
        data:resutDelete
      });
   
  } catch (error) {
    response.status(500).json({
      mensaje: "Error when trying to delete the platform",
      error: error.message
    });
  }
}

module.exports = { register, allPlatforms, deletePlataform };
