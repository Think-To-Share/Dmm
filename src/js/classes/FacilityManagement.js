import * as PIXI from 'pixi.js';
import { Renderer } from '@pixi/core';
import { EventSystem } from '@pixi/events';
import '@pixi/graphics-extras';

export class FacilityManagement {
    constructor() {
        this.pixiContainerElem = document.querySelector('.smart-integrated-section .pixi-container')
        this.textContents = document.querySelectorAll('.smart-integrated-section .smart-integrated-content');
    }

    init() {
        this.hideTexts()
        this.initializePixi()
        this.addBackground()
        // this.addActiveShape()
        this.addIcons()
        this.loadElements()
    }

    hideTexts() {
        this.textContents.forEach((elem, index) => {
            if(index) {
                elem.style.display = 'none';
            }
        })
    }

    initializePixi() {
        delete Renderer.__plugins.interaction;
        this.app = new PIXI.Application({
            backgroundColor: 0xffffff,
            width: 724,
            height: 541,
        })
        this.pixiContainerElem.appendChild(this.app.view)
        this.app.stage.interactive = true;
        this.app.renderer.addSystem(EventSystem, 'events');
    }

    getPolygonNodes(x, y, width, height) {
        const Point1 = [
            x + (width * 0.5),
            y
        ]

        const Point2 = [
            x + width,
            y + (height * 0.3)
        ]

        const Point3 = [
            x + width,
            y + (height * 0.7)
        ]

        const Point4 = [
            x + (width * 0.5),
            y + height
        ]

        const Point5 = [
            x,
            y + (height * 0.7)
        ]

        const Point6 = [
            x,
            y + (height * 0.3)
        ]

        return [...Point1, ...Point2, ...Point3, ...Point4, ...Point5, ...Point6]
    }

    addActiveShape() {
        const shape = new PIXI.Graphics()
        shape.beginFill(0x1a1d4e)
        shape.drawPolygon(this.getPolygonNodes(20, 30, 140, 150))
        shape.endFill()
        this.app.stage.addChild(shape)
    }

    addBackground() {
        this.app.loader.add('bg', require('../../images/facilities-management/bg.jpg'))
    }

    addIcons() {
        for (let i = 1; i <= 12; i++) {
            this.app.loader.add(`icon_${i}`, require(`../../images/facilities-management/${i}.png`))
        }
    }

    loadElements() {
        this.app.loader.load((load, res) => {
            const bg = new PIXI.Sprite(res.bg.texture)
            bg.x = 0;
            bg.y = 0;
            this.app.stage.addChild(bg);

            this.addActiveShape()

            const icon_1 = new PIXI.Sprite(res.icon_1.texture)
            icon_1.x = 45;
            icon_1.y = 60;
            this.app.stage.addChild(icon_1)

            const icon_2 = new PIXI.Sprite(res.icon_2.texture)
            icon_2.x = 205;
            icon_2.y = 60;
            this.app.stage.addChild(icon_2)

            const icon_3 = new PIXI.Sprite(res.icon_3.texture)
            icon_3.x = 360;
            icon_3.y = 70;
            this.app.stage.addChild(icon_3)

            const icon_4 = new PIXI.Sprite(res.icon_4.texture)
            icon_4.x = 520;
            icon_4.y = 60;
            this.app.stage.addChild(icon_4)

            const icon_5 = new PIXI.Sprite(res.icon_5.texture)
            icon_5.x = 115;
            icon_5.y = 220;
            this.app.stage.addChild(icon_5)

            const icon_6 = new PIXI.Sprite(res.icon_6.texture)
            icon_6.x = 280;
            icon_6.y = 220;
            this.app.stage.addChild(icon_6)

            const icon_7 = new PIXI.Sprite(res.icon_7.texture)
            icon_7.x = 430;
            icon_7.y = 220;
            this.app.stage.addChild(icon_7)

            const icon_8 = new PIXI.Sprite(res.icon_8.texture)
            icon_8.x = 590;
            icon_8.y = 220;
            this.app.stage.addChild(icon_8)

            const icon_9 = new PIXI.Sprite(res.icon_9.texture)
            icon_9.x = 45;
            icon_9.y = 370;
            this.app.stage.addChild(icon_9)

            const icon_10 = new PIXI.Sprite(res.icon_10.texture)
            icon_10.x = 205;
            icon_10.y = 375;
            this.app.stage.addChild(icon_10)

            const icon_11 = new PIXI.Sprite(res.icon_11.texture)
            icon_11.x = 360;
            icon_11.y = 375;
            this.app.stage.addChild(icon_11)

            const icon_12 = new PIXI.Sprite(res.icon_12.texture)
            icon_12.x = 520;
            icon_12.y = 365;
            this.app.stage.addChild(icon_12)

            this.addIconInteraction(icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9, icon_10, icon_11, icon_12)
        })
    }

    addIconInteraction(...icons) {
        icons.forEach((icon, index) => {
            icon.interactive = true;
            icon.buttonMode = true;

            icon.on('click', _ => {
                this.textContents.forEach(elem => {
                    elem.style.display = 'none';
                })

                this.textContents[index].style.display = 'block'
            })
        });
    }
}