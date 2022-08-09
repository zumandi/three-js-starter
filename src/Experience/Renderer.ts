import {
    WebGLRenderer, 
    sRGBEncoding, 
    CineonToneMapping, 
    PCFSoftShadowMap
} from 'three'
import EXP from "./EXP"

export default class Renderer{
    exp: IExp
    canvas: HTMLCanvasElement
    sizes: ISizes
    scene: THREE.Scene
    camera: ICamera
    instance: WebGLRenderer

    constructor(){
        this.exp = EXP.getInstance()
        this.canvas = this.exp.canvas
        this.sizes = this.exp.sizes
        this.scene = this.exp.scene
        this.camera = this.exp.camera

        this.setInstance()
    }

    setInstance(){
        this.instance = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        })
        this.instance.physicallyCorrectLights = true
        this.instance.outputEncoding = sRGBEncoding
        this.instance.toneMapping = CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = PCFSoftShadowMap
        this.instance.setClearColor('#211d2a')
        this.resize()
    }

    resize(){
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }

    update(){
        this.instance.render(this.scene, this.camera.instance)
    }
}