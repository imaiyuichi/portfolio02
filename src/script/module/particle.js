import * as THREE from 'three';

export function startMyAnimation() {
    // Canvas
    const canvas = document.querySelector('#webgl');

    // Sizes
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight,
    };

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        100
    );
    camera.position.z = 6;
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // レンダラーの背景色を透明に設定
    renderer.setClearColor(0x000000, 0); // 背景色を黒色、透明度0に設定

    // Particle Geometry
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;

        // パーティクルの色をランダムで生成
        const color = new THREE.Color();
        color.setHSL(Math.random(), 1, 0.7); // HSLカラースペースを使用
        particleColors[i * 3] = color.r;
        particleColors[i * 3 + 1] = color.g;
        particleColors[i * 3 + 2] = color.b;

        particlePositions[i * 3] = x;
        particlePositions[i * 3 + 1] = y;
        particlePositions[i * 3 + 2] = z;
    }

    particleGeometry.setAttribute(
        'position',
        new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
        'color',
        new THREE.BufferAttribute(particleColors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05, // パーティクルのサイズを調整
        vertexColors: true, // パーティクルに色を適用
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ブラウザのスクロールに応じてアニメーション
    const animateParticles = () => {
        const scrollPercent =
            (window.scrollY /
                (document.body.clientHeight - window.innerHeight)) *
            100;
        particles.rotation.x = (scrollPercent / 100) * Math.PI;
        particles.rotation.y = (scrollPercent / 100) * Math.PI;
    };

    // ブラウザのリサイズ操作
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });

    // アニメーションループ
    const animate = () => {
        requestAnimationFrame(animate);

        // パーティクルのアニメーション
        animateParticles();

        // レンダリング
        renderer.render(scene, camera);
    };

    // アニメーション開始
    animate();
}
