import React from 'react'
import * as THREE from 'three'
import TWEEN from 'tween.js'
import styled, { keyframes } from 'styled-components'
import {debounce} from 'lodash'
import Terrain from '../utils/terrain.js'


let camera, scene, renderer, controls
let wMesh, wGeometry, wMaterial, wHeightMap

export default class Waves extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  componentDidMount = () => {
    this.createMesh()
      
    window.addEventListener( 'resize', debounce(this.createMesh, 300), false )

  }

  componentDidUpdate() {
    this._zoom(camera.zoom, this.props.cameraZoom, 2000)
  }

  _zoom(start, end, duration) {
    let camZoom = { cameraZoom: start }
    let camZoomTarget = { cameraZoom: end }
    let camTween = new TWEEN.Tween(camZoom)
      .to(camZoomTarget, duration)
      .easing(TWEEN.Easing.Cubic.Out)
      .start()
      .onUpdate(() => {
        camera.zoom = camZoom.cameraZoom
        camera.updateProjectionMatrix()
      })
  }

  setupCamera = () => {
    const { innerWidth: width, innerHeight: height } = window

    scene = new THREE.Scene()
    camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      10,
      10000
    )
  }

  setupRenderer = () => {
    const { innerWidth: width, innerHeight: height } = window

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      clearAlpha: 0.25
    })
    renderer.setClearColor(0x252627)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    this.removeChildren(this.refs.container)
    this.refs.container.appendChild(renderer.domElement)
  
  }

  setupLights = () => {
    let aLight = new THREE.AmbientLight(0xebebeb)
    let dLight = new THREE.DirectionalLight(0x6695f7, 1, 100)
    dLight.position.set(0, 0, 100)
    scene.add(aLight)
    scene.add(dLight)
  }

  animate = () => {
    requestAnimationFrame(this.animate)
    TWEEN.update()
    renderer.render(scene, camera)
  }
  createMesh = () => {
    this.setupCamera()
    this.setupRenderer()
    this.setupLights()
    this.animate()
    wHeightMap = Terrain.allocateHeightMap(100, 200)
    Terrain.simplexHeightMap(wHeightMap)

    wGeometry = Terrain.heightMapToPlaneGeometry(wHeightMap)

    wMaterial = new THREE.MeshLambertMaterial({
      color: 0x08FDD8,
      wireframe: true
    })
    wMesh = new THREE.Mesh(wGeometry, wMaterial)
    wMesh.lookAt(new THREE.Vector3(0, 50, 0))
    scene.add(wMesh)

    wMesh.scale.set(45, 250, 25)
    wMesh.scale.multiplyScalar(1.25)
    wMesh.rotation.z = 5
    wMesh.position.z = -300

    camera.zoom = 5
    camera.updateProjectionMatrix()
  }
  removeChildren = (el) => {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }

  render() {

    return (
      <Container>
        <div ref="container" />
      </Container>
    )
  }
}

const Container = styled.div`
  canvas {
    position: fixed;
    top: 0;
    left: 0;
    background: #252627;
  }
  `
