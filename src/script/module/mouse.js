import gsap from 'gsap';

export default class Menu {
    constructor(target) {
        const data = target.getBoundingClientRect();
        this.el = {
            target: target,
            x: data.x,
            y: data.y,
            w: data.width,
            h: data.height,
        };

        this.gravity = Math.min(15, this.el.w / 2);

        this.mouse = {
            x: 0,
            y: 0,
            cx: 0,
            cy: 0,
        };

        this.flag = false;

        this.el.target.addEventListener(
            'mouseenter',
            this.mouseEnter.bind(this),
            false
        );

        this.el.target.addEventListener(
            'mouseleave',
            this.mouseLeave.bind(this),
            false
        );
        this.mouseMove = this._mouseMove.bind(this);

        this.onRaf();
    }

    _mouseMove(e) {
        this.mouse.x = gsap.utils.mapRange(
            this.el.x, // 現在のX座標
            this.el.x + this.el.w, // 現在のX座標 + 幅
            -this.gravity, // -this.gravity（マウスが左に移動すると正の値になる必要があるため、マイナス符号を追加）
            this.gravity, // this.gravity（マウスが右に移動すると正の値になる必要があるため、正の値を指定）
            e.clientX // マウスのX座標
        );

        this.mouse.y = gsap.utils.mapRange(
            this.el.y,
            this.el.y + this.el.h,
            -this.gravity,
            this.gravity,
            e.clientY
        );
    }

    mouseEnter() {
        this.flag = true;
        gsap.to(this.el.target, {
            scale: 1.2,
            duration: 0.3,
        });
        addEventListener('mousemove', this.mouseMove);
    }

    mouseLeave() {
        this.flag = false;
        this.mouse.cx = 0;
        this.mouse.cy = 0;

        gsap.to(this.el.target, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)',
        });
        removeEventListener('mousemove', this.mouseMove);
    }

    onRaf() {
        if (this.flag) {
            this.mouse.cx = gsap.utils.interpolate(
                this.mouse.cx,
                this.mouse.x,
                0.1
            );
            this.mouse.cy = gsap.utils.interpolate(
                this.mouse.cy,
                this.mouse.y,
                0.1
            );
            gsap.set(this.el.target, {
                x: this.mouse.cx,
                y: this.mouse.cy,
            });
        }

        requestAnimationFrame(this.onRaf.bind(this));
    }
}
