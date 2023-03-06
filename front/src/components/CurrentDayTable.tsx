import CurrentDayRow from './CurrentDayRow'

type RowData = {
  name: String,
  time: String,
  quantity: Number,
}

function CurrentDayTable(
  props: {
    data: Array<RowData>
  }
) {
  return (
    <table className="table">
      <thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">At</th>
        <th scope="col">Protein Qty</th>
        </tr>
      </thead>
      <tbody>
        {
          props.data.map((rowData: RowData, ix: number) => 
            <CurrentDayRow
              key={ix}
              rowKey={ix}
              name={rowData.name}
              time={rowData.time}
              quantity={rowData.quantity}
            />
          )
        }
      </tbody>
    </table>
  )
}

export default CurrentDayTable
