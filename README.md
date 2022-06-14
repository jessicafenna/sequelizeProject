# sequelizeProject

App to store movies/TV shows and directors in a database 

Yargs input: 
Choose either: --movies or --TVshows

Because of the way databases are set up first input a director (else directorID is null and will not link tables) OR add a director when inputting a movie 

//movies//
//// To create movie entry:--movies --movie --add --title "example movie title" --actor "example actor" (--director "example director")
//// To list movies: --movies --movie --list
//// To update a movie: --movies --movie --update --actor "example actor to be added" --title "example title already in database"
////To delete a movie:  --movies --movie --delete --title "example title to be deleted"


//TVshows//
n.b. director function not available yet for TV shows 
////To create TV show entry: --TVshows --add --title "example TV title" --actor "example actor
//// To list movies: --TVshows --TVshow --list
//// To update a movie: --TVshows --TVshow --update --actor "example actor to be added" --title "example title already in database"
////To delete a movie:  --TVshows --TVshow --delete --title "example title to be deleted"