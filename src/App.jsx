import { useState } from 'react'
import styled from 'styled-components'
import GoalList from './GoalList'
import Form from './Form'

const data = JSON.parse(localStorage.getItem('goals'))

function App() {

  const [goals, setGoals] = useState(data.length < 1 ? [{ title: 'This is a sample goal', count: '5', id: 0 }] : data)

  const addGoal = (goal) => {
    setGoals(prevState => [goal, ...prevState])
  }
  const deleteGoal = (id) => {
    setGoals(prevState => prevState.filter((goal) => goal.id !== id))
  }

  return (
    <Application>

      <Header>
        MY GOALS
      </Header>

      <Form addGoal={addGoal} />

      <GoalList goals={goals} setGoals={setGoals} deleteGoal={deleteGoal} />

    </Application>
  )
}

export default App

const Application = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
`
const Header = styled.h1`
    font-weight: 700;
    font-size: 1.7em;
    text-align: center;
    padding: 30px;
    background-color: #36546e;
    width: 100%;
    position: fixed;
    top: 0;
`