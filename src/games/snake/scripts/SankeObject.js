import React from 'react';

export const SnakeObject = (props) => {
    return (
        <div>

            {
                props.snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className={"Snake-dot Snake-head-" + props.direction} key={i} style={style}>
                    </div>
                )
            })}
        </div>
    )
}