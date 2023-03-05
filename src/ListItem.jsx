import styled from "styled-components"

const ListItem = ({ goal, setGoals, deleteGoal, data }) => {
    return (
        <>
            <Li>
                <Input
                    type='text'
                    value={goal.title}
                    onChange={e => {
                        goal.title = e.target.value.slice(0, 40)
                        setGoals([...data])
                    }}
                />
                <Dif>
                    <Input2
                        type='number'
                        value={goal.count}
                        onChange={e => {
                            goal.count = e.target.value.slice(0, 3)
                            setGoals([...data])
                        }}
                    />
                    {goal.count != 0 &&
                        <Div>{goal.count == 1 ? ' day to complete' : ' days to complete'}</Div>
                    }
                </Dif>
            </Li>
            <Delete onClick={() => deleteGoal(goal.id)}>delete</Delete>
        </>
    )
}


export default ListItem

const Li = styled.div`
    text-decoration: none;
    border-radius: 6px;
    border: 2px solid;
    width: 51%;
    list-style: none;
    margin-bottom: 30px;
    vertical-align: middle;
    justify-content: space-between;
    display: flex;
    background-color: rgb(59,59,59);
`
const Input = styled.input`
    width: 62%;
    padding: 20px;
    border: 0px;
`
const Delete = styled.button`
    border-radius: 8px;
    padding: 5px 20px;
    margin-bottom: 30px;
    margin-left: 30px;
    font-size: 15px;
`
const Div = styled.div`
    padding: 20px;
    padding-left: 5px;
`
const Dif = styled.div`
    display: flex;
    align-items: center;
`
const Input2 = styled.input`
    border: none;
    padding: 20px 0px;
    height: 100px;
    width: 50px;

    direction: rtl;
`