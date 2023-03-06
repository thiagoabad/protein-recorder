import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

function MainScreenChart(props: {data: Array<{
    day: String,
    value: Number,
}>}) {
    const { data } = props
    return <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
    </LineChart>
}

export default MainScreenChart