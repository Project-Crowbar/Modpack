StartupEvents.registry('item', event => {
    event.create('prcb_cookie').food(food => {
        food
            .nutrition(10)
            .saturation(1)
            .effect('minecraft:speed', 200, 2, 3)
            .effect('minecraft:haste', 200, 2, 3)
            .effect('minecraft:resistance', 160, 4, 1)
            .alwaysEdible()
    })
        .texture('prcb:item/prcb_cookie')
        .tooltip('Exclusive cookie only given out by Staff members on Project Crowbar. Texture by gontrolgantron.')
        .displayName('Project Crowbar Cookie')
        .rarity('epic')
})
