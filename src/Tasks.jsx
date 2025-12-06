const Tasks = () => {

    const taskList = ['a', 'b', 'c']


    return (

        <div>

            <ul>
                {
                    taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))
                }
            </ul>

            <ul>

                {


                    taskList.map((task, index) => {

                        const isEven = index % 2 === 0

                         return (

                            <li key={task}

                                style={{ color: isEven ? 'blue' : 'green' }}

                            >{task}

                            </li>

                         )

                    })

                

                }


            </ul>
        </div>
    )
}

export default Tasks