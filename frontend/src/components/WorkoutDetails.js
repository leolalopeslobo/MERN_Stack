import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {  //passing the props
    const { dispatch } = useWorkoutsContext()

    const handleClick = async () => {
        //communicate with the delete API
        const response = await fetch('/api/workouts/'+workout._id, {
            method: 'DELETE'
        })

        //this is the document that is just deleted
        const json = await response.json()

        if(response.ok) {
            //dispatch the context for updation
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    
    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}

export default WorkoutDetails;