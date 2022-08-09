import { PerspectiveCamera } from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import EXP from "./EXP"

export default class Camera implements ICamera{
    exp: IExp
    sizes: ISizes
    scene: THREE.Scene
    canvas: HTMLCanvasElement
    instance: PerspectiveCamera
    controls: OrbitControls


    constructor(){
        this.exp = EXP.getInstance()
        this.sizes = this.exp.sizes
        this.scene = this.exp.scene
        this.canvas = this.exp.canvas

        this.setInstance()
        this.setOrbitControls()
    }

    setInstance(){
        this.instance = new PerspectiveCamera(
            35,
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    setOrbitControls(){
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    update(){
        this.controls.update()
    }
}