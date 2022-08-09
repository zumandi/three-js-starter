import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Time from './Utils/Time'
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'

export default class EXP implements IExp{
    sizes: ISizes
    time: ITime
    scene: THREE.Scene
    canvas: HTMLCanvasElement
    camera: ICamera
    renderer: IRenderer
    world: IWorld

    private static instance: EXP

    private constructor(canvas : HTMLCanvasElement) {
        // Global access
        // @ts-ignore
        window.exp = this

        // Options
        this.canvas = canvas
    }

    public static getInstance(canvas? : HTMLCanvasElement): EXP {
        if (!EXP.instance) {
            if(!canvas) { return }
            EXP.instance = new EXP(canvas);
        }
        return EXP.instance;
    }

    public init(){
        // Set up
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Resize Event
        this.sizes.on('resize', () => {
            this.resize()
        });

        // Time tick Event
        this.time.on('tick', () => {
            this.update()
        });
    }

    public resize(){
        this.camera.resize()
        this.renderer.resize()
    }

    public update(){
        this.camera.update()
        this.renderer.update()
    }
}