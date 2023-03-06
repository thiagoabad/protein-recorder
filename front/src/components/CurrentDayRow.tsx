function CurrentDayRow(props: {
    key: number
    rowKey: number,
    name: String,
    time: String,
    quantity: Number,
}) {
    const { rowKey, name, time, quantity } = props
    return (
        <tr>
            <th scope="row">{rowKey+1}</th>
            <td>{name}</td>
            <td>{time}</td>
            <td>{quantity.toString()}</td>
        </tr>
    )
}

export default CurrentDayRow
