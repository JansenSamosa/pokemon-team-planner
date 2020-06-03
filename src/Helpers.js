//get color of type ie - Fire = red, Water = blue
export const getTypeColor = type => {
    let color = ''
    switch(type) {
        case 'normal':
            color='#bebeb2'
            break
        case 'grass':
            color='#8cd751'
            break
        case 'fire':
            color='#fa5643'
            break
        case 'water':
            color='#56aeff'
            break
        case 'fighting':
            color='#a85644'
            break
        case 'flying':
            color='#79a3ff'
            break
        case 'poison':
            color='#ab5da2'
            break
        case 'ground':
            color='#e9c856'
            break
        case 'rock':
            color='#cdbc72'
            break
        case 'bug':
            color='#c3d21f'
            break
        case 'ghost':
            color='#7975d7'
            break
        case 'electric':
            color='#fde53c'
            break
        case 'psychic':
            color='#f26295'
            break
        case 'ice':
            color='#96f1ff'
            break
        case 'dragon':
            color='#8673ff'
            break
        case 'dark':
            color='#866350'
            break
        case 'steel':
            color='#c4c2db'
            break
        case 'fairy':
            color='#faadff'
            break
        default:
            color='#bebeb2'
            break
    }
    return color
}

//gets strengths and weaknesses based on types
export const getTypeDefenseStrengths = types => {
    //initializes strengths/weaknesses
    let strengths = {normal: 1,flying: 1,ground: 1,bug: 1,steel: 1,water: 1,electric: 1,ice: 1,dark: 1,
        fighting: 1,poison: 1,rock: 1,ghost: 1,fire: 1,grass: 1,psychic: 1,dragon: 1,fairy: 1}

    for(let i = 0; i < types.length; i++) {
        switch(types[i]) {
            case 'normal':
                strengths.fighting *= 2
                strengths.ghost *= 0
                break
            case 'grass':
                strengths.flying *= 2
                strengths.poison *= 2
                strengths.bug *= 2
                strengths.fire *= 2
                strengths.ice *= 2
                strengths.ground *= .5
                strengths.water *= .5
                strengths.grass *= .5
                strengths.electric *= .5
                break
            case 'fire':
                strengths.ground *= 2
                strengths.rock *= 2
                strengths.water *= 2
                strengths.bug *= .5
                strengths.steel *= .5
                strengths.fire *= .5
                strengths.grass *= .5
                strengths.ice *= .5
                strengths.fairy *= .5
                break
            case 'water':
                strengths.grass *= 2
                strengths.electric *= 2
                strengths.steel *= .5
                strengths.fire *= .5
                strengths.water *= .5
                strengths.ice *= .5
                break
            case 'fighting':
                strengths.flying *= 2
                strengths.psychic *= 2
                strengths.fairy *= 2
                strengths.rock *= .5
                strengths.bug *= .5
                strengths.dark *= .5
                break
            case 'flying':
                strengths.rock *= 2
                strengths.electric *= 2
                strengths.ice *= 2
                strengths.grass *= .5
                strengths.bug *= .5
                strengths.fighting *= .5
                strengths.ground *= 0
                break
            case 'poison':
                strengths.ground *= 2
                strengths.psychic *= 2
                strengths.fighting *= .5
                strengths.poison *= .5
                strengths.bug *= .5
                strengths.grass *= .5
                strengths.fairy *= .5
                break
            case 'ground':
                strengths.water *= 2
                strengths.grass *= 2
                strengths.ice *= 2
                strengths.rock *= .5
                strengths.poison *= .5
                strengths.electric *= 0
                break
            case 'rock':
                strengths.fighting *= 2
                strengths.ground *= 2
                strengths.steel *= 2
                strengths.water *= 2
                strengths.grass *= 2
                strengths.normal *= .5
                strengths.flying *= .5
                strengths.poison *= .5
                strengths.fire *= .5
                break
            case 'bug':
                strengths.flying *= 2
                strengths.rock *= 2
                strengths.fire *= 2
                strengths.fighting *= .5
                strengths.ground *= .5
                strengths.grass *= .5
                break
            case 'ghost':
                strengths.ghost *= 2
                strengths.dark *= 2
                strengths.poison *= .5
                strengths.bug *= .5
                strengths.normal *= 0
                strengths.fighting *= 0
                break
            case 'electric':
                strengths.ground *= 2
                strengths.flying *= .5
                strengths.steel *= .5
                strengths.electric *= .5
                break
            case 'psychic':
                strengths.bug *= 2
                strengths.ghost *= 2
                strengths.dark *= 2
                strengths.fighting *= .5
                strengths.psychic *= .5
                break
            case 'ice':
                strengths.fighting *= 2
                strengths.rock *= 2
                strengths.steel *= 2
                strengths.fire *= 2
                strengths.ice *= .5
                break
            case 'dragon':
                strengths.ice *= 2
                strengths.dragon *= 2
                strengths.fairy *= 2
                strengths.fire *= .5
                strengths.water *= .5
                strengths.grass *= .5
                strengths.electric *= .5
                break
            case 'dark':
                strengths.fighting *= 2
                strengths.bug *= 2
                strengths.fairy *= 2
                strengths.ghost *= .5
                strengths.dark *= .5
                strengths.psychic *= 0
                break
            case 'steel':
                strengths.fighting *= 2
                strengths.ground *= 2
                strengths.fire *= 2
                strengths.normal *= .5
                strengths.flying *= .5
                strengths.rock *= .5
                strengths.bug *= .5
                strengths.steel *= .5
                strengths.grass *= .5
                strengths.psychic *= .5
                strengths.ice *= .5
                strengths.dragon *= .5
                strengths.fairy *= .5
                strengths.poison *= 0
                break
            case 'fairy':
                strengths.poison *= 2
                strengths.steel *= 2
                strengths.dark *= .5
                strengths.bug *= .5
                strengths.fighting *= .5
                strengths.dragon *= 0
                break 
            default:
                break
        }
    }
    return strengths
}
