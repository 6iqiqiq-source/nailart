"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function Hero() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: { time: { value: number }; resolution: { value: THREE.Vector2 } }
    animationId: number
  } | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const container = canvasRef.current

    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*5.0 - length(uv) + mod(uv.x+uv.y, 0.2));
          }
        }

        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    const camera = new THREE.Camera()
    camera.position.z = 1
    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2() },
    }
    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
    scene.add(new THREE.Mesh(geometry, material))

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    container.appendChild(renderer.domElement)

    const onResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }
    onResize()
    window.addEventListener("resize", onResize)

    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
      if (sceneRef.current) sceneRef.current.animationId = animationId
    }
    sceneRef.current = { camera, scene, renderer, uniforms, animationId: 0 }
    animate()

    return () => {
      window.removeEventListener("resize", onResize)
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)
        if (container && sceneRef.current.renderer.domElement)
          container.removeChild(sceneRef.current.renderer.domElement)
        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Shader background */}
      <div ref={canvasRef} className="absolute inset-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.08" />
            <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" strokeOpacity="0.15" />
            <path
              d="M12 30V10L28 30V10"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-semibold text-white tracking-[0.04em]">
            Nailart AI
          </span>
        </div>

        {/* Badge */}
        <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/6 border border-white/12">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 0L8.4 5.6L14 7L8.4 8.4L7 14L5.6 8.4L0 7L5.6 5.6L7 0Z"
              fill="white"
              fillOpacity="0.7"
            />
          </svg>
          <span className="text-[0.8rem] text-white/70 tracking-[0.06em]">
            AI-POWERED THUMBNAIL GENERATOR
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-white max-w-[820px] mb-5">
          Create YouTube Thumbnails
          <br />
          <span className="text-white/45">that actually get clicks.</span>
        </h1>

        {/* Subtext */}
        <p className="text-[clamp(1rem,2vw,1.2rem)] text-white/50 max-w-[520px] leading-[1.7] mb-10">
          Describe your video. Nailart AI instantly generates high-impact thumbnails
          optimized for maximum click-through rate.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <button className="py-[0.85rem] px-[2.2rem] bg-white text-black rounded-lg text-[0.95rem] font-bold tracking-[0.01em] cursor-pointer border-0">
            Start for Free
          </button>
        </div>
      </div>
    </section>
  )
}
