import ListItem from './ListItem'
import styled from 'styled-components'

function GoalList({ deleteGoal, setGoals, goals }) {

    const info = JSON.parse(localStorage.getItem('goals'))
    const data = (info.length < 1) ? goals : info
    localStorage.setItem('goals', JSON.stringify(goals))

    return (
        <Ul>
            {data.map(goal => (
                <ListItem
                    key={goal.id}
                    goal={goal}
                    data={data}
                    setGoals={setGoals}
                    deleteGoal={deleteGoal}
                />
            ))}
        </Ul>
    )
}

export default GoalList


const Ul = styled.ul`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`