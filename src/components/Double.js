
function Doubled(props) {
    // const doubled = props.arr.map((number) => number*2);
    // console.log(doubled);
    // let n = 0;
    const doubled = props.arr.map((number) =>
        // <li key={n += 1}>
        <li key={number.toString()}>
            {number*2}
        </li>
    );
    return (
        <div>
            <ul>{doubled}</ul>
        </div>
    )

}

export default Doubled;