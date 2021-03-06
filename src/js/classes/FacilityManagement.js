import { Application, Graphics, Sprite } from 'pixi.js';
import { Renderer } from '@pixi/core';
import { EventSystem } from '@pixi/events';
import { gsap } from "gsap";
import { PixiPlugin } from "gsap/PixiPlugin";

export class FacilityManagement {
    floatingAnimation  = null;

    constructor() {
        this.pixiContainerElem = document.querySelector('.smart-integrated-section .pixi-container')
        this.textContents = document.querySelectorAll('.smart-integrated-section .smart-integrated-content');
    }

    init() {
        this.hideTexts()
        this.initializePixi()
        this.initializeGsap()
        this.addActiveShape()
        this.addHoverShape()
        this.addBackground()
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
        this.app = new Application({
            backgroundColor: 0xffffff,
            width: 724,
            height: 541,
            antialias: true,
            resolution: 2,
        })
        this.pixiContainerElem.appendChild(this.app.view)
        this.app.stage.sortableChildren = true;
        this.app.renderer.addSystem(EventSystem, 'events');
    }

    initializeGsap() {
        gsap.registerPlugin(PixiPlugin);
    }

    getPolygonNodes(x, y, width, height) {
        const Point1 = [
            x + (width * 0.5),
            y
        ]

        const Point2 = [
            x + width,
            y + (height * 0.247)
        ]

        const Point3 = [
            x + width,
            y + (height * 0.73)
        ]

        const Point4 = [
            x + (width * 0.47),
            y + height
        ]

        const Point5 = [
            x,
            y + (height * 0.76)
        ]

        const Point6 = [
            x,
            y + (height * 0.25)
        ]

        return [...Point1, ...Point2, ...Point3, ...Point4, ...Point5, ...Point6]
    }

    addActiveShape() {
        this.active_shape = new Graphics()
        this.active_shape.beginFill(0x1a1d4e)
        this.active_shape.drawPolygon(this.getPolygonNodes(20, 19, 159, 185))
        this.active_shape.endFill()
        this.active_shape.zIndex = 0
        this.app.stage.addChild(this.active_shape)
    }

    addHoverShape(){
        this.hover_shape = new Graphics()
        this.hover_shape.beginFill(0x5c61ab)
        this.hover_shape.drawPolygon(this.getPolygonNodes(20, 19, 159, 185))
        this.hover_shape.endFill()
        this.hover_shape.zIndex = 0
        this.app.stage.addChild(this.hover_shape)
        this.hover_shape.scale.x = 0
        this.hover_shape.scale.y = 0
    }

    addBackground() {
        this.app.loader.add('bg', require('../../images/facilities-management/bg.png'))
    }

    addIcons() {
        for (let i = 1; i <= 12; i++) {
            this.app.loader.add(`icon_${i}`, require(`../../images/facilities-management/${i}.png`))
        }
    }

    loadElements() {
        this.app.loader.load((load, res) => {
            const bg = new Sprite(res.bg.texture)
            bg.x = 0;
            bg.y = 0;
            this.app.stage.addChild(bg);

            const icon_1 = new Sprite(res.icon_1.texture)
            icon_1.x = 45;
            icon_1.y = 60;
            this.app.stage.addChild(icon_1)
            this.setFloatingAnimation(icon_1)

            const icon_2 = new Sprite(res.icon_2.texture)
            icon_2.x = 205;
            icon_2.y = 60;
            this.app.stage.addChild(icon_2)

            const icon_3 = new Sprite(res.icon_3.texture)
            icon_3.x = 360;
            icon_3.y = 70;
            this.app.stage.addChild(icon_3)

            const icon_4 = new Sprite(res.icon_4.texture)
            icon_4.x = 520;
            icon_4.y = 60;
            this.app.stage.addChild(icon_4)

            const icon_5 = new Sprite(res.icon_5.texture)
            icon_5.x = 115;
            icon_5.y = 220;
            this.app.stage.addChild(icon_5)

            const icon_6 = new Sprite(res.icon_6.texture)
            icon_6.x = 280;
            icon_6.y = 220;
            this.app.stage.addChild(icon_6)

            const icon_7 = new Sprite(res.icon_7.texture)
            icon_7.x = 430;
            icon_7.y = 220;
            this.app.stage.addChild(icon_7)

            const icon_8 = new Sprite(res.icon_8.texture)
            icon_8.x = 590;
            icon_8.y = 220;
            this.app.stage.addChild(icon_8)

            const icon_9 = new Sprite(res.icon_9.texture)
            icon_9.x = 45;
            icon_9.y = 370;
            this.app.stage.addChild(icon_9)

            const icon_10 = new Sprite(res.icon_10.texture)
            icon_10.x = 205;
            icon_10.y = 375;
            this.app.stage.addChild(icon_10)

            const icon_11 = new Sprite(res.icon_11.texture)
            icon_11.x = 360;
            icon_11.y = 375;
            this.app.stage.addChild(icon_11)

            const icon_12 = new Sprite(res.icon_12.texture)
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
            icon.zIndex = 1

            icon.addEventListener('mouseenter', () => {
                this.hover_shape.scale.x = 1;
                this.hover_shape.scale.y = 1;
                this.setIconBkgShapePosition(index,this.hover_shape)
            })

            icon.addEventListener('mouseleave', () => {
                this.hover_shape.scale.x = 0;
                this.hover_shape.scale.y = 0;
            })

            icon.addEventListener('pointerdown', _ => {
                this.textContents.forEach(elem => {
                    elem.style.display = 'none';
                })

                const currentText = this.textContents[index];
                currentText.style.display = 'block'

                const textAnimationTl = gsap.timeline()
                textAnimationTl.fromTo(currentText.querySelector('.smart-integrated-heading'), {
                    autoAlpha: 0,
                    y: 20,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                })
                textAnimationTl.fromTo(currentText.querySelector('.smart-integrated-text'), {
                    autoAlpha: 0,
                },
                {
                    autoAlpha: 1,
                    duration: 1,
                    ease: 'power4.out',
                })
                textAnimationTl.fromTo(currentText.querySelector('.smart-integrated-btn-container'), {
                    autoAlpha: 0,
                    y: 30,
                },
                {
                    autoAlpha: 1,
                    y: 0,
                })

                this.setIconBkgShapePosition(index,this.active_shape)
                this.setFloatingAnimation(icon)
            })
        });
    }

    setIconBkgShapePosition(index,shape) {
        switch (index) {
            case 0:
                shape.x = 0
                shape.y = 0
                break;
            
            case 1:
                shape.x = 157
                shape.y = 4.5
                break;
        
            case 2:
                shape.x = 314.03
                shape.y = 7.6
                break;

            case 3:
                shape.x = 462
                shape.y = 7.6
                break;

            case 4:
                shape.x = 62
                shape.y = 158
                break;

            case 5:
                shape.x = 220
                shape.y = 158
                break;

            case 6:
                shape.x = 380
                shape.y = 158
                break;
            case 7:
                shape.x = 535
                shape.y = 158
                break;


            case 8:
                shape.x = 0
                shape.y = 308
                break;

            case 9:
                shape.x = 157
                shape.y = 312
                break;

            case 10:
                    shape.x = 314.03
                    shape.y = 315
                    break;
            case 11:
                    shape.x = 462
                    shape.y = 312
                    break;
            default:
                break;
        }

        gsap.fromTo(shape, {
            alpha: 0,
        }, 
        {
            alpha: 1,
            duration: 0.4,
        })
    }


    setFloatingAnimation(icon, ) {
        if(this.floatingAnimation) {
            this.floatingAnimation.pause()
            this.floatingAnimation.progress(0)
            this.floatingAnimation.kill()
            this.floatingAnimation = null;
        }

        this.floatingAnimation = gsap.timeline({repeat: -1})
        this.floatingAnimation.to(icon, {
            y: '-=8',
            ease: 'linear',
            duration: 0.9,
        })

        this.floatingAnimation.to(icon, {
            y: '+=8',
            ease: 'linear',
            duration: 0.9
        })
    }
}