In React Router Dom v6, a common error occurs when using the `useParams` hook within a component that is not directly nested within a route defined with a `:param` segment. This results in an empty object being returned by `useParams`, even if the URL contains parameters.  For example:

```javascript
// Incorrect usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // {} even if the URL has parameters
  return <div>My Component</div>;
}

// Correct usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  console.log(params); // Contains parameters
  return <div>My Component</div>;
}
```