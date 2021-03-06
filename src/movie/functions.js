const Movie = require("./table");
const Director = require ("../director/table");


exports.addMovie = async (movieObj) =>{ 
    console.log(movieObj.director)
    // try{
        const director = await Director.findOne({where: {fullName: movieObj.director}});
        console.log(director.dataValues.id);
        const newMovie = await Movie.create({title:movieObj.title, actor: movieObj.actor, DirectorId: director.dataValues.id});
        console.log(newMovie);
    //     console.log(`Successfully added ${newMovie.dataValues.title} to database`);
    // } catch (error){ 
    //     console.log(error)
    // }
  
};

exports.listMovies = async () => { 
    try { 
        const movies = await Movie.findAll();
        for (let i = 0; i<movies.length; i++){
            console.log(movies[i].dataValues.title, movies[i].dataValues.actor, movies[i].dataValues.DirectorID)
        }
    } catch (error){ 
        console.log(error);
    }
}

exports.updateMovie = async (updateObj, filterObj) => { 
    try { 
        const response = await Movie.update(updateObj, {where: filterObj});
        // the response is an array (only has one item in it)
        // so if the response at index is more than 0 (i.e. there has been at least one change, then it will show a success message)
        if(response[0]>0){ 
            console.log ("Successfully updated")
        } else { 
            console.log ("Something went wrong with update")
        };
    } catch (error){ 
        console.log(error);
    }
}; 

exports.deleteMovie = async (filterObj) =>{ 
    try { 
        const response = await Movie.destroy({where: filterObj}); 
        if(response>0){ 
            console.log(`Successfully deleted`)
        } else (
            console.log ("Something went wrong")
        )
    } catch (error){ 
        console.log(error)
    }
};


