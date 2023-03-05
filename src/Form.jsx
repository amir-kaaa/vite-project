import { useState } from 'react'
import styled from 'styled-components'

const Form = ({ addGoal }) => {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        addGoal({ title: input1, count: input2, id: Date.now() })
        setInput1('')
        setInput2('')
    }

    return (

        <Forming onSubmit={submitHandler}>

            <Input
                id='input1'
                type='text'
                placeholder='Set your goal'
                onChange={e => setInput1(e.target.value.slice(0, 40))}
                value={input1}
                required
            />

            <Input2
                type='number'
                placeholder='Days to complete'
                onChange={e => setInput2(e.target.value.slice(0, 3))}
                value={input2}
            />

            <Submit type='submit'>
                Submit
            </Submit>

        </Forming>

    )
}

export default Form

const Forming = styled.form`
    width: 100%;
    padding: 40px;
    text-align: center;
    margin-top: 100px;
`
const Input = styled.input`
    margin-right: 50px;
    padding: 10px 20px;
    width: 400px;
`
const Input2 = styled.input`
    margin-right: 50px;
    padding: 10px;
`
const Submit = styled.button`
    padding: 10px 20px;
`