import { useActionState,use } from "react";
import {OpinionsContext} from '../store/opinions-context'

export function NewOpinion() {
  const {addOpinion}=use(OpinionsContext)
  async function submitAction(prevFormState, formData) {
    const userName = formData.get('userName');
    const title = formData.get('title');
    const body = formData.get('body');
    
    let errors = [];
    
    if (title.trim().length < 5) {
      errors.push("Title must have at least 5 characters");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("Body must be between 10 and 300 characters");
    }
    if (userName.trim().length === 0) {
      errors.push("Username must be filled");
    }
    
    if (errors.length > 0) {
      return { errors, enteredValues: { userName, title, body } };
    }
    await addOpinion({title,body,userName})
    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(submitAction, { 
    errors: null, 
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.enteredValues?.userName} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.enteredValues?.title} />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.enteredValues?.body}></textarea>
        </p>
        
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        
        
      </form>
    </div>
  );
}
