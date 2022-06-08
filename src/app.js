const yargs = require ("yargs");
const { sequelize }  = require ("./db/connection")
const { 
    addMovie,
    listMovies,
    updateMovie
 } = require ("./movie/functions");

// parameters are like empty variables - until you run the function the variable value is empty, when we run it  yargsObj (parameter) = yargs.argv (the argument we passed to the function)
const app = async (yargsObj) =>{
    // sync() (sequelize method) is checking the tables in the database, if we are trying to create one that doesn't exist, it will create it for us (i.e. first time you run one of the functions below, creates table) - until sync runs it doesn't exist so you can't insert info into it 
    await sequelize.sync();
    try{ 
        if (yargsObj.add){ 
            // take movie k/v from yargsObj, send to add function, return movie
            // outside the app so await it : 
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargsObj.list){ 
            // list all movies from db
            await listMovies();
        } else if (yargsObj.update){ 
            // take filter and update k/v pairs from yargsObj - send to update function and return success/failure message
            await updateMovie({actor: yargsObj.actor}, {title: yargsObj.title});
        } else if (yargsObj.delete){ 
            // take filter k/v pair from yargsObj and send to delete function, send success/failure message
        } else { 
            console.log ("Incorrect command")
        }

    } catch (error){
        console.log(error)
    }
}

// passing contents of terminal to app (argv = argument)
app(yargs.argv);