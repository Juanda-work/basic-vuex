const getRandomInt = () => {
    return new Promise( resolve => {
        const rndInt = Math.floor( Math.random()*20 )

        setTimeout(() => {
            resolve( rndInt )
        }, 2000);
    })
}

export default getRandomInt