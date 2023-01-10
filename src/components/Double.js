
function Doubled(props) {
    // const doubled = props.arr.map((number) => number*2);
    // console.log(doubled);
    let n = 0;
    const doubled = props.arr.map((number) =>
        // <li key={n += 1}>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{doubled}</ul>
    )

}

export default Doubled;