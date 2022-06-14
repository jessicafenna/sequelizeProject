const Director = require("./table");


exports.addDirector = async (directorObj) =>{ 
    try{
        const newDirector = await Director.create(directorObj);
        console.log(`Successfully added ${newDirector.dataValues.fullName} to database`);
    } catch (error){ 
        console.log(error)
    }
};

exports.listDirectors = async () => { 
    try { 
        const directors = await Director.findAll();
        console.log(directors);
        // for (let i = 0; i<directors.length; i++){
        //     console.log(directors[i].dataValues.director)
        // }
    } catch (error){ 
        console.log(error);
    }
}