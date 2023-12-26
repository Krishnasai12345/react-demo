const players=[
    {
    "name":"Sachin",
    "runs":20000,
    "loc":"Mumbia",
    "hun":100
    },
    {
    "name":"Dhoni",
    "runs":18000,
    "loc":"Ranchi",
    "hun":40
    },
    {
    "name":"Dravid",
    "runs":10000,
    "loc":"Banglore",
    "hun":32
    },
   {
    "name":"Kohli",
    "runs":19000,
    "loc":"Delhi",
    "hun":76
    },
]

function findByName(players,Name)
{
    output = [];
    players.forEach(element => {
        if(element.name === Name )
            output.push(element)
    });
    return output;

}
console.log(findByName(players,"Kohli"))

function runsComparison(players,run)
{
    output=[];
    players.forEach(element=>{
       if(element.runs > run)
            output.push(element.name)
    
    })
    return output;

}
console.log(runsComparison(players,18000))

function isAllPLayersHitCentury(players)
{
    return players.every((element)=>{
        return element.hun>0;
    }

    )
}
console.log("Is All players hit min one century =>",isAllPLayersHitCentury(players))

function addingNewProperty(players)
{
    output = []
    players.forEach((element)=>{
        element["fif"]= element.hun/2;
    }
    )
    return players
}
console.log(addingNewProperty(players))