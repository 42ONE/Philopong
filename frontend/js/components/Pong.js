let scene, camera, renderer;
        let paddle1, paddle2, ball;
        let paddleWidth = 30, paddleHeight = 200, paddleDepth = 100; // 패들 두께 추가
        let ballRadius = 15;  // 공 반지름
        let ballSpeed = { x: 10, y: 10 };  // 초기 공 속도 (x, y 방향 모두 적용)
        let paddleSpeed = 15;
        let keys = { ArrowUp: false, ArrowDown: false, w: false, s: false };

        init();
        animate();

        function init() {
            // 씬 설정
            scene = new THREE.Scene();

            // 그라디언트 배경 설정
            let canvas = document.createElement('canvas');
            let context = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            let gradient = context.createLinearGradient(0, 0, 0, window.innerHeight);
            gradient.addColorStop(0, '#87CEEB'); // 첫 번째 색상 (하늘색)
            gradient.addColorStop(1, '#4682B4'); // 두 번째 색상 (짙은 파란색)

            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);

            let backgroundTexture = new THREE.CanvasTexture(canvas);
            scene.background = backgroundTexture;

            // 카메라 설정 (PerspectiveCamera 사용)
            let aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(75, aspect, 1, 1000);
            camera.position.set(0, 0, 800); // 카메라 위치 설정
            camera.lookAt(0, 0, 0); // 카메라가 바라보는 방향 설정

            // 렌더러 설정
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true; // 그림자 사용 설정
            renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 그림자 맵 타입 설정
            document.body.appendChild(renderer.domElement);

            // 조명 생성
            let ambientLight = new THREE.AmbientLight(0x404040); // 주변광 (어두운 회색)
            scene.add(ambientLight);

            let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // 방향광 (흰색, 강도 0.5)
            directionalLight.position.set(0, 500, 300); // 조명의 위치 설정 (x, y, z)
            directionalLight.castShadow = true; // 그림자 캐스팅 설정
            directionalLight.shadow.mapSize.width = 2048; // 그림자 맵 사이즈 설정 (넓게 설정)
            directionalLight.shadow.mapSize.height = 2048;
            directionalLight.shadow.camera.near = 0.5; // 그림자 카메라 근접 면 설정
            directionalLight.shadow.camera.far = 2000; // 그림자 카메라 원격 면 설정

            // 그림자 카메라의 범위를 넓게 설정
            directionalLight.shadow.camera.left = -2000;
            directionalLight.shadow.camera.right = 2000;
            directionalLight.shadow.camera.top = 2000;
            directionalLight.shadow.camera.bottom = -2000;

            scene.add(directionalLight);

            // 패들 생성
            let paddleGeometry = new THREE.BoxGeometry(paddleWidth, paddleHeight, paddleDepth); // 3D 패들 생성
            let paddleMaterial = new THREE.MeshPhongMaterial({ color: 0xA9A9A9 }); // Phong 재질 사용

            paddle1 = new THREE.Mesh(paddleGeometry, paddleMaterial);
            paddle2 = new THREE.Mesh(paddleGeometry, paddleMaterial);

            paddle1.position.set(-window.innerWidth / 2 + paddleWidth / 2, 0, 0);
            paddle2.position.set(window.innerWidth / 2 - paddleWidth / 2, 0, 0);

            // 그림자 설정
            paddle1.castShadow = true;
            paddle1.receiveShadow = true;
            paddle2.castShadow = true;
            paddle2.receiveShadow = true;

            scene.add(paddle1);
            scene.add(paddle2);

            // 공 생성
            let ballGeometry = new THREE.SphereGeometry(ballRadius, 32, 32);
            let ballMaterial = new THREE.MeshPhongMaterial({ color: 0x00FF7F }); // Phong 재질 사용

            ball = new THREE.Mesh(ballGeometry, ballMaterial);
            ball.castShadow = true; // 공도 그림자 캐스팅 설정
            ball.receiveShadow = true; // 공도 그림자 수신 설정
            scene.add(ball);

            // 바닥면 생성
            let groundGeometry = new THREE.PlaneGeometry(window.innerWidth * 2, window.innerHeight * 2);
            let groundMaterial = new THREE.MeshStandardMaterial({ color: 0xf3f3f3 }); // 표준 재질 사용
            let ground = new THREE.Mesh(groundGeometry, groundMaterial);
            ground.rotation.x = -Math.PI / 2; // 바닥면을 수평으로 설정
            ground.position.y = -400; // 바닥면 위치 설정
            ground.receiveShadow = true; // 그림자 수신 설정
            scene.add(ground);

            // 패들 경로 표시 선 생성
            let lineMaterial = new THREE.LineBasicMaterial({ color: 0xFF0000 });
            let lineGeometry1 = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(paddle1.position.x, -window.innerHeight / 2, 1),
                new THREE.Vector3(paddle1.position.x, window.innerHeight / 2, 1)
            ]);
            let line1 = new THREE.Line(lineGeometry1, lineMaterial);
            scene.add(line1);

            let lineGeometry2 = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(paddle2.position.x, -window.innerHeight / 2, 1),
                new THREE.Vector3(paddle2.position.x, window.innerHeight / 2, 1)
            ]);
            let line2 = new THREE.Line(lineGeometry2, lineMaterial);
            scene.add(line2);

            // 이벤트 리스너 추가
            window.addEventListener('resize', onWindowResize, false);
            window.addEventListener('keydown', onKeyDown, false);
            window.addEventListener('keyup', onKeyUp, false);
        }

        function onWindowResize() {
            let aspect = window.innerWidth / window.innerHeight;
            camera.aspect = aspect;
            camera.updateProjectionMatrix();

            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onKeyDown(event) {
            keys[event.key] = true;
        }

        function onKeyUp(event) {
            keys[event.key] = false;
        }

        // 공 패들 충돌
        function checkBallPaddleCollision() {
            // 패들 1과 충돌 검사
            if (ball.position.x - ballRadius < paddle1.position.x + paddleWidth / 2 &&
                ball.position.x + ballRadius > paddle1.position.x - paddleWidth / 2 &&
                ball.position.y - ballRadius < paddle1.position.y + paddleHeight / 2 &&
                ball.position.y + ballRadius > paddle1.position.y - paddleHeight / 2) {

                // 충돌 발생 시
                if (ball.position.x < paddle1.position.x) {
                    ball.position.x = paddle1.position.x - paddleWidth / 2 - ballRadius;
                } else {
                    ball.position.x = paddle1.position.x + paddleWidth / 2 + ballRadius;
                }
                ballSpeed.x = -ballSpeed.x;
            }

            // 패들 2와 충돌 검사
            if (ball.position.x - ballRadius < paddle2.position.x + paddleWidth / 2 &&
                ball.position.x + ballRadius > paddle2.position.x - paddleWidth / 2 &&
                ball.position.y - ballRadius < paddle2.position.y + paddleHeight / 2 &&
                ball.position.y + ballRadius > paddle2.position.y - paddleHeight / 2) {

                // 충돌 발생 시
                if (ball.position.x < paddle2.position.x) {
                    ball.position.x = paddle2.position.x - paddleWidth / 2 - ballRadius;
                } else {
                    ball.position.x = paddle2.position.x + paddleWidth / 2 + ballRadius;
                }
                ballSpeed.x = -ballSpeed.x;
            }
        }

        // 애니메이션 함수에서 호출하는 부분
        function animate() {
            requestAnimationFrame(animate);

            // 패들 이동
            if (keys.ArrowUp && paddle2.position.y < window.innerHeight / 2 - paddleHeight / 2) {
                paddle2.position.y += paddleSpeed;
            }
            if (keys.ArrowDown && paddle2.position.y > -window.innerHeight / 2 + paddleHeight / 2) {
                paddle2.position.y -= paddleSpeed;
            }
            if (keys.w && paddle1.position.y < window.innerHeight / 2 - paddleHeight / 2) {
                paddle1.position.y += paddleSpeed;
            }
            if (keys.s && paddle1.position.y > -window.innerHeight / 2 + paddleHeight / 2) {
                paddle1.position.y -= paddleSpeed;
            }

            // 공 이동
            ball.position.x += ballSpeed.x;
            ball.position.y += ballSpeed.y;

            // 공과 패들 충돌 검사
            checkBallPaddleCollision();

            // 공과 벽 충돌 검사
            if (ball.position.y + ballRadius > window.innerHeight / 2 || ball.position.y - ballRadius < -window.innerHeight / 2) {
                ballSpeed.y = -ballSpeed.y;
            }

            // 득점 확인
            if (ball.position.x > window.innerWidth / 2 || ball.position.x < -window.innerWidth / 2) {
                ball.position.set(0, 0, 0);
                ballSpeed.x = -ballSpeed.x;
            }

            renderer.render(scene, camera);
        }