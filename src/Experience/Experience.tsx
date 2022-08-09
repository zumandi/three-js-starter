import { Component, onMount } from 'solid-js'
import EXP from './EXP'

const Experience: Component = () => {
    let canvas: HTMLCanvasElement
    onMount(() => {
        const _exp = EXP.getInstance(canvas)
        _exp.init()
    })

    return (
        <canvas ref={canvas} class="w-full h-full bg-slate-600"></canvas>
    );
};

export default Experience
