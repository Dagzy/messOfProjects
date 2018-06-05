class Camper {
    constructor(name, goals, location, img){
        this.name = name,
        this.goals = goals,
        this.location = location,
        this.img = img
    }
}
let qGoals = 'Quincy wants to climb Denali and cycle a century in the next two years'
let qLoc = 'Indianapolis'
const quincy = new Camper('Quincy', qGoals, qLoc)

let hGoals = 'Heather wants to hike the Appalachian Trail and visit every state'
let hLoc = 'Indianapolis'
const heather = new Camper('Heather', hGoals, hLoc)

let dGoals = 'Jon wants to head west and have a great time while he\'s visiting out there!'
let dLoc = 'Indianapolis'
const doog = new Camper('Jon', dGoals,dLoc)

let jGoals = 'Jack wants to pee on every tree in the midwest; a lofty goal, to be sure'
let jLoc = 'Indianapolis'
const jack = new Camper('Jack', jGoals, jLoc)

const camperArray = [quincy, heather, doog, jack]
export default camperArray