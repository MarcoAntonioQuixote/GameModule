const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const tokens = [
  { emoji: '🐢', projectile: false },
  { emoji: '⚡', projectile: true },
  { emoji: '👻', projectile: false },
  { emoji: '🦇', projectile: false },
  { emoji: '🕷️', projectile: false },
  { emoji: '💣', projectile: true },
  { emoji: '🐍', projectile: false },
  { emoji: '🪲', projectile: false },
  { emoji: '🦀', projectile: false },
  { emoji: '🧊', projectile: true },
];


const limits = { //0,0, is bottom left
    left: -70,
    right: 200,
    top: 280,
    bottom: -40,
}

//done from bottom up, not top down, {x:0, y: 0} is bottom left
const jump = (setPos,jumping,setJumping) => {
    if (jumping) return
    setJumping(true)
    const up = setInterval(() => {
        setPos(prev => {
            if (prev.y < limits.top) {
                return { ...prev, y: prev.y + 20, x: prev.x + 1 };
            } else {
                clearInterval(up);
                setTimeout(() => {
                    fall(setPos,setJumping);
                },200)
                return prev;
            }
        });
    }, 10);
};

function fall(setPos,setJumping) {
    const down = setInterval(() => {
        setPos(prev => {
            if (prev.y > limits.bottom) {
                return { ...prev, y: prev.y - 20, x: prev.x + 1 };
            } else {
                clearInterval(down);
                setJumping(false)
                return prev;
            }
        });
    }, 10);
};

const moveMario = (dir,setPos,jumping,setJumping) => {
    setPos(prev => {
        const newPos = {...prev}
        switch (dir) {
            case 'ArrowUp':
                jump(setPos,jumping,setJumping);
                break;
            case 'ArrowDown': if (newPos.y < limits.bottom) break;
                newPos.y -= 25;
                break;
            case 'ArrowLeft': if (newPos.x < limits.left) break;
                newPos.x -= 25;
                break;
            case 'ArrowRight': if (newPos.x > limits.right) break;
                newPos.x += 25;
                break;
            default:
                break;
        }
        return newPos;
    })
}

function isColliding(player, object) {
    const r1 = player.getBoundingClientRect();
    const r2 = object.getBoundingClientRect();

    const shrinkRect = (r, padX, padY) => ({
        top: r.top + padY,
        bottom: r.bottom - padY,
        left: r.left + padX,
        right: r.right - padX
    });

    const p = shrinkRect(r1, 60, 60);
    const o = shrinkRect(r2, 20, 20);

    return !(
        p.right < o.left ||
        p.left > o.right ||
        p.bottom < o.top ||
        p.top > o.bottom
    );
}

const modifyHitState = (index,setEnemies,setHit,setHearts) => {
    setEnemies((prev) => {
        return prev.map((e,i) => {
            if (i === index) {
                if (e.hitCount >= 12) {
                    if (!e.hit) {
                        setHit(true)
                        setHearts(prev => prev - 1)
                        setTimeout(() => {setHit(false)}, 750)
                    }
                    return {...e, hit: true}
                }
                return {...e, hitCount: e.hitCount + 1}
            }
            return e
        })
    })
}

const createEnemies = () => {
    let enemies = []
    for (let x = 0; x < 50; x++) {
        const t = tokens[random(0,tokens.length-1)]
        enemies.push({
            token: t.emoji,
            projectile: t.projectile,
            x: random(200,500),
            hit: false,
            hitCount: 0
        })
    }
    return enemies;
}

const marioFunctions = {
    moveMario,
    jump,
    fall,
    limits,
    createEnemies,
    isColliding,
    modifyHitState
}

export default marioFunctions