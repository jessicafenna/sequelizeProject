const Director = require("./table");


exports.addDirector = async (directorObj, filterObj) =>{ 
    try{
        const newDirector = await Director.create(directorObj,  {where: filterObj});
        console.log(`Successfully added ${newDirector.dataValues.fullName} to database`);
    } catch (error){ 
        console.log(error)
    }
};

exports.listDirectors = async () => { 
    try { 
        const directors = await Director.findAll();
        for (let i = 0; i<directors.length; i++){
            console.log(directors[i].dataValues.director)
        }
    } catch (error){ 
        console.log(error);
    }
}