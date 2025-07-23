import { useEffect } from 'react'

function GameController({setPos}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            move(e.key);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    function move(dir) {
        setPos(prev => {
            const newPos = {...prev}
            switch (dir) {
                case 'ArrowUp':
                    newPos.y -= 30;
                    break;
                case 'ArrowDown':
                    newPos.y += 30;
                    break;
                case 'ArrowLeft':
                    newPos.x -= 30;
                    break;
                case 'ArrowRight':
                    newPos.x += 30;
                    break;
                default:
                    break;
            }
            return newPos;
        })
    }

  return (
    <div className="controller">
        <div className="dpad">
        <button onClick={() => move('ArrowUp')} className="dpad-button up"></button>
        <button onClick={() => move('ArrowDown')} className="dpad-button down"></button>
        <button onClick={() => move('ArrowLeft')} className="dpad-button left"></button>
        <button onClick={() => move('ArrowRight')} className="dpad-button right"></button>
        <div className="dpad-center" />
        </div>

        <div className="buttons">
            <button className="btn a">A</button>
            <button className="btn b">B</button>
        </div>
    </div>
  )
}

export default GameController