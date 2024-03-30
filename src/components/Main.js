import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../redux/result_reducer'
import '../styles/Main.css'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>
        <img src="https://i.giphy.com/hPQeT7yBOSAyiAdHRG.webp" alt="" />
        <ol>
            <li>We'll blast through 5 questions about your legal rights like a superhero! 🦸‍♂️</li>
            <li>Each question has 3 different answers. Pick the one that sounds the most "righty-o"! 👍</li>
            <li>Each question has three options. You can choose only one option1️⃣</li>
            <li>Changed your mind? No worries! You can switch your answer before the quiz is over.😉</li>
            <li>At the end, we'll unveil your super impressive score! ✨</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='Username*' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz 🚀</Link>
        </div>

    </div>
  )
}
