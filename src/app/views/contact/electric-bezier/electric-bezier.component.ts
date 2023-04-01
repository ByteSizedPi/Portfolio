import { Component, OnInit } from '@angular/core';
import { Utils } from '../../../shared/models/Utils';

@Component({
  selector: 'electric-bezier',
  templateUrl: './electric-bezier.component.html',
  styleUrls: ['./electric-bezier.component.scss'],
})
export class ElectricBezierComponent extends Utils implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {
    // window.requestAnimFrame = function () {
    //   return (
    //     window.requestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame ||
    //     window.oRequestAnimationFrame ||
    //     window.msRequestAnimationFrame ||
    //     function (callback) {
    //       window.setTimeout(callback);
    //     }
    //   );
    // };

    const init = (elemid: string) => {
      let canvas = this.Id(elemid) as HTMLCanvasElement;
      let c = canvas.getContext('2d') as CanvasRenderingContext2D;
      return { c: c, canvas: canvas };
    };

    window.onload = () => {
      let { c, canvas } = init('canvas');
      let w = (canvas.width = window.innerWidth);
      let h = (canvas.height = this.Id('contact').offsetHeight);
      let mouse: Vec2D = { x: 0, y: 0 };
      let last_mouse: Vec2D = { x: 0, y: 0 };

      //initiation

      function dist(p1x: number, p1y: number, p2x: number, p2y: number) {
        return Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
      }

      interface Vec2D {
        x: number;
        y: number;
        errx?: number;
        erry?: number;
      }

      interface Parent {
        x: number;
        y: number;
        nextPos: Vec2D;
      }

      class Segment {
        public pos: Vec2D;
        public nextPos: Vec2D;

        constructor(
          parent: any,
          public l: number,
          public ang: number,
          public first: boolean
        ) {
          this.pos = first
            ? { x: parent.x, y: parent.y }
            : {
                x: parent.nextPos.x,
                y: parent.nextPos.y,
              };
          this.nextPos = {
            x: this.pos.x + this.l * Math.cos(this.ang),
            y: this.pos.y + this.l * Math.sin(this.ang),
          };
        }

        update(t: Vec2D) {
          this.ang = Math.atan2(t.y - this.pos.y, t.x - this.pos.x);
          this.pos.x = t.x + this.l * Math.cos(this.ang - Math.PI);
          this.pos.y = t.y + this.l * Math.sin(this.ang - Math.PI);
          this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
          this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
        }

        fallback(t: Vec2D) {
          this.pos = t;
          this.nextPos.x = this.pos.x + this.l * Math.cos(this.ang);
          this.nextPos.y = this.pos.y + this.l * Math.sin(this.ang);
        }

        show = () => c.lineTo(this.nextPos.x, this.nextPos.y);
      }

      class Tentacle {
        public t: Vec2D;
        public rand: number = Math.random();
        public segments: Segment[];
        public angle: number;
        public dt: number;
        public x: number = Math.random() * w;
        public y: number = Math.random() * h;
        public l: number = Math.random() * (maxl - minl) + minl;
        public n: number = n;

        constructor() {
          this.segments = [new Segment(this, this.l / this.n, 0, true)];
          for (let i = 1; i < this.n; i++) {
            this.segments.push(
              new Segment(this.segments[i - 1], this.l / this.n, 0, false)
            );
          }
        }

        move(last_target: Vec2D, target: Vec2D) {
          this.angle = Math.atan2(target.y - this.y, target.x - this.x);
          this.dt = dist(last_target.x, last_target.y, target.x, target.y) + 5;
          this.t = {
            x: target.x - 0.8 * this.dt * Math.cos(this.angle),
            y: target.y - 0.8 * this.dt * Math.sin(this.angle),
          };

          this.segments[this.n - 1].update(this.t.x ? this.t : target);

          for (let i = this.n - 2; i >= 0; i--)
            this.segments[i].update(this.segments[i + 1].pos);

          if (
            dist(this.x, this.y, target.x, target.y) <=
            this.l + dist(last_target.x, last_target.y, target.x, target.y)
          ) {
            this.segments[0].fallback({ x: this.x, y: this.y });
            for (let i = 1; i < this.n; i++) {
              this.segments[i].fallback(this.segments[i - 1].nextPos);
            }
          }
        }

        show(target: Vec2D) {
          if (dist(this.x, this.y, target.x, target.y) <= this.l) {
            c.globalCompositeOperation = 'lighter';
            c.beginPath();
            c.lineTo(this.x, this.y);
            for (let i = 0; i < this.n; i++) {
              this.segments[i].show();
            }
            c.strokeStyle =
              'hsl(' +
              (this.rand * 60 + 180) +
              ',100%,' +
              (this.rand * 60 + 25) +
              '%)';
            c.lineWidth = this.rand * 2;
            c.lineCap = 'round';
            c.lineJoin = 'round';
            c.stroke();
            c.globalCompositeOperation = 'source-over';
          }
        }

        show2(target: Vec2D) {
          c.beginPath();
          if (dist(this.x, this.y, target.x, target.y) <= this.l) {
            c.arc(this.x, this.y, 2 * this.rand + 1, 0, 2 * Math.PI);
            c.fillStyle = 'white';
          } else {
            c.arc(this.x, this.y, this.rand * 2, 0, 2 * Math.PI);
            c.fillStyle = 'darkcyan';
          }
          c.fill();
        }
      }

      let maxl = 300,
        minl = 50,
        n = 30,
        numt = 500,
        tent: Tentacle[] = [],
        clicked = false,
        target: Vec2D = { x: 0, y: 0 },
        last_target: Vec2D = { x: 0, y: 0 },
        t = 0,
        q = 10;

      for (let i = 0; i < numt; i++) {
        tent.push(new Tentacle());
      }

      const draw = () => {
        //animation
        // console.log(mouse.x);
        if (mouse.x) {
          target.errx = mouse.x - target.x;
          target.erry = mouse.y - target.y;
        } else {
          target.errx =
            w / 2 +
            ((h / 2 - q) * Math.sqrt(2) * Math.cos(t)) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.x;
          target.erry =
            h / 2 +
            ((h / 2 - q) * Math.sqrt(2) * Math.cos(t) * Math.sin(t)) /
              (Math.pow(Math.sin(t), 2) + 1) -
            target.y;
        }

        target.x += target.errx / 10;
        target.y += target.erry / 10;

        t += 0.01;

        c.beginPath();
        c.arc(
          target.x,
          target.y,
          dist(last_target.x, last_target.y, target.x, target.y) + 5,
          0,
          2 * Math.PI
        );
        c.fillStyle = 'hsl(210,100%,80%)';
        c.fill();

        for (let i = 0; i < numt; i++) {
          tent[i].move(last_target, target);
          tent[i].show2(target);
        }
        for (let i = 0; i < numt; i++) {
          tent[i].show(target);
        }
        last_target.x = target.x;
        last_target.y = target.y;
      };

      this.Id('contact').addEventListener(
        'mousemove',
        (e) => {
          let rect = canvas.getBoundingClientRect();
          last_mouse.x = mouse.x;
          last_mouse.y = mouse.y;

          mouse.x = e.pageX;
          mouse.y = e.clientY - rect.top;
        },
        false
      );

      canvas.addEventListener('mouseleave', (e) => (mouse = { x: 0, y: 0 }));
      canvas.addEventListener('mousedown', (e) => (clicked = true));
      canvas.addEventListener('mouseup', (e) => (clicked = false));

      function loop() {
        // window.requestAnimationFrame(loop);
        // c.fillStyle="rgba(30,30,30,0.1)";
        // c.fillRect(0, 0, w, h);
        c.clearRect(0, 0, w, h);
        draw();
      }

      window.addEventListener('resize', function () {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        loop();
      });

      loop();
      setInterval(loop, 1000 / 60);
    };
  }
}
