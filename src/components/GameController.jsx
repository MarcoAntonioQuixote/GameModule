import { useEffect } from 'react'

function GameController({handleMove,a,b}) {

    useEffect(() => {
        const handleKeyDown = (e) => {
            handleMove(e.key);
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

  return (
    <div className="controller">
        <div className="dpad">
        <button onClick={() => handleMove('ArrowUp')} className="dpad-button up"></button>
        <button onClick={() => handleMove('ArrowDown')} className="dpad-button down"></button>
        <button onClick={() => handleMove('ArrowLeft')} className="dpad-button left"></button>
        <button onClick={() => handleMove('ArrowRight')} className="dpad-button right"></button>
        <div className="dpad-center" />
        </div>

        <div className="buttons">
            <button onClick={a} className="btn a">A</button>
            <button onClick={b} className="btn b">B</button>
        </div>
    </div>
  )
}

export default GameController