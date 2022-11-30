import { db } from './config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'


function AddTask({ onClose, open }) {
    /* function to add new task to firestore */
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addDoc(collection(db, 'tasks'), {
                title: 'test',
                description: 'description test',
                created: Timestamp.now()
            })
            alert('Success')
        } catch (err) {
            alert(err)
        }
    }

    return (
        <div className={`modal`}>
            <div className='modal__head'>
                <h2>TESTING</h2>
                <form onSubmit={handleSubmit}className='addTask' name='addTask'>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}

export default AddTask