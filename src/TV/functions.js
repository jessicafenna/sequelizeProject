const TV = require ("./table");

exports.addTV = async (TVObj) =>{ 
    try{
        const newTV = await TV.create(TVObj);
        console.log(`Successfully added ${newTV.dataValues.title} to database`);
    } catch (error){ 
        console.log(error)
    }
};

exports.listTV = async () => { 
    try { 
        const TV = await TV.findAll();
        for (let i = 0; i<TV.length; i++){
            console.log(TV[i].dataValues.title)
        }
    } catch (error){ 
        console.log(error);
    }
}

exports.updateTV = async (updateObj, filterObj) => { 
    try { 
        const response = await TV.update(updateObj, {where: filterObj});
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

exports.deleteTV = async (filterObj) =>{ 
    try { 
        const response = await TV.destroy({where: filterObj}); 
        if(response>0){ 
            console.log(`Successfully deleted`)
        } else (
            console.log ("Something went wrong")
        )
    } catch (error){ 
        console.log(error)
    }
};