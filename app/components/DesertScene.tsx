"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function DesertScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

  
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x1c1a17, 0.0015);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.set(0, 2, 30);
    camera.lookAt(0, -4, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;


    const ambientLight = new THREE.AmbientLight(0xd4a373, 0.3);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffe4c4, 0.8);
    sunLight.position.set(20, 30, 10);
    sunLight.castShadow = false;
    scene.add(sunLight);

    const warmFill = new THREE.PointLight(0xc16a3d, 0.4, 80);
    warmFill.position.set(-15, 10, 5);
    scene.add(warmFill);


    const duneGeometry = new THREE.PlaneGeometry(120, 80, 128, 64);
    const dunePositions = duneGeometry.attributes.position;
    for (let i = 0; i < dunePositions.count; i++) {
      const x = dunePositions.getX(i);
      const y = dunePositions.getY(i);
      const z =
        Math.sin(x * 0.08) * 3.5 +
        Math.sin(y * 0.06 + 1.5) * 2.5 +
        Math.sin(x * 0.15 + y * 0.1) * 1.5 +
        Math.cos(x * 0.04 - y * 0.03) * 2.0;
      dunePositions.setZ(i, z);
    }
    duneGeometry.computeVertexNormals();

    const duneMaterial = new THREE.MeshStandardMaterial({
      color: 0xd2b48c,
      roughness: 0.9,
      metalness: 0.0,
      transparent: true,
      opacity: 0.35,
      flatShading: true,
    });

    const duneMesh = new THREE.Mesh(duneGeometry, duneMaterial);
    duneMesh.rotation.x = -Math.PI / 2.3;
    duneMesh.position.set(0, -14, -10);
    scene.add(duneMesh);


    const particleCount = 350;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = Math.random() * 25 - 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      velocities[i * 3] = Math.random() * 0.02 + 0.005;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.005;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.003;
      sizes[i] = Math.random() * 1.5 + 0.3;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(sizes, 1)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xe8d8c3,
      size: 0.4,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);


    const stoneGroup = new THREE.Group();

    const stoneMaterial = new THREE.MeshStandardMaterial({
      color: 0xa8a29e,
      roughness: 0.85,
      metalness: 0.05,
      transparent: true,
      opacity: 0.2,
    });

    for (let i = 0; i < 4; i++) {
      const geometry = new THREE.OctahedronGeometry(
        Math.random() * 1.2 + 0.4,
        0
      );
      const stone = new THREE.Mesh(geometry, stoneMaterial);
      stone.position.set(
        (Math.random() - 0.5) * 40,
        Math.random() * 8 - 6,
        (Math.random() - 0.5) * 20 - 10
      );
      stone.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      stoneGroup.add(stone);
    }
    scene.add(stoneGroup);


    const clock = new THREE.Clock();

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();


      const dunePos = duneGeometry.attributes.position;
      for (let i = 0; i < dunePos.count; i++) {
        const x = dunePos.getX(i);
        const y = dunePos.getY(i);
        const z =
          Math.sin(x * 0.08 + elapsed * 0.15) * 3.5 +
          Math.sin(y * 0.06 + 1.5 + elapsed * 0.1) * 2.5 +
          Math.sin(x * 0.15 + y * 0.1 + elapsed * 0.08) * 1.5 +
          Math.cos(x * 0.04 - y * 0.03 + elapsed * 0.05) * 2.0;
        dunePos.setZ(i, z);
      }
      dunePos.needsUpdate = true;
      duneGeometry.computeVertexNormals();


      const particlePos = particleGeometry.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let px = particlePos.getX(i);
        let py = particlePos.getY(i);
        let pz = particlePos.getZ(i);

        px += velocities[i * 3];
        py += velocities[i * 3 + 1];
        pz += velocities[i * 3 + 2];

        if (px > 50) px = -50;
        if (py > 15) py = -10;
        if (py < -10) py = 15;
        if (pz > 30) pz = -30;
        if (pz < -30) pz = 30;

        particlePos.setX(i, px);
        particlePos.setY(i, py);
        particlePos.setZ(i, pz);
      }
      particlePos.needsUpdate = true;

      // Rotate stones slowly
      stoneGroup.children.forEach((stone, idx) => {
        stone.rotation.x += 0.001 * (idx + 1) * 0.3;
        stone.rotation.y += 0.0015 * (idx + 1) * 0.3;
        stone.position.y += Math.sin(elapsed * 0.3 + idx) * 0.003;
      });


      camera.position.x = Math.sin(elapsed * 0.05) * 2;
      camera.position.y = 2 + Math.sin(elapsed * 0.08) * 0.5;
      camera.lookAt(0, -4, 0);

      renderer.render(scene, camera);
    };

    animate();


    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameRef.current);
      if (rendererRef.current && container.contains(rendererRef.current.domElement)) {
        container.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
      duneGeometry.dispose();
      duneMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      stoneMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}
