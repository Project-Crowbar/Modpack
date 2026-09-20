StartupEvents.registry('item', event => {
    event.create('peanut_butter_honey').food(food => {
        food
            .nutrition(11)
            .saturation(0.5725)
            .effect('farmersdelight:nourishment', 3600, 0, 1)
            .effect('farmersdelight:comfort', 3600, 0, 1)
            .effect('extradelight:sunshine', 3600, 0, 1)
    })
        .texture('prcb:item/peanut_butter_honey')
        .tooltip('Special food item for Project Crowbar. Contains the joy of Cryptoe.')
        .displayName('PBH')
})
