function MainScreenObjective(props: {ate: Number, goal: Number}) {
    return (
        <div>
            <p>You ate: {props.ate}g today</p>
            <p>You goal is: {props.goal}g</p>
        </div>
    )
}

export default MainScreenObjective